const express = require("express");
const multer = require("multer");

const parseCSV = require("../utils/csvParser");
const { extractCRMData } = require("../services/ai.service");

const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
});

router.post("/import", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    const rows = parseCSV(req.file.buffer);

    const aiResponse = await extractCRMData(rows);

    console.log("AI Response:", aiResponse);
    console.log("Is Array:", Array.isArray(aiResponse));

    if (!Array.isArray(aiResponse)) {
      return res.status(500).json({
        success: false,
        message: "AI did not return a valid array.",
        aiResponse,
      });
    }

    const filtered = aiResponse.filter((lead) => {
      const email = (lead.email || "").toString().trim().toLowerCase();
      const phone = (lead.mobile_without_country_code || "")
        .toString()
        .trim()
        .toLowerCase();

      const validEmail =
        email &&
        email !== "null" &&
        email !== "undefined" &&
        email !== "n/a" &&
        email !== "-";

      const validPhone =
        phone &&
        phone !== "null" &&
        phone !== "undefined" &&
        phone !== "n/a" &&
        phone !== "-";

      return validEmail || validPhone;
    });

    res.json({
      success: true,
      imported: filtered.length,
      skipped: rows.length - filtered.length,
      result: filtered,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

module.exports = router;
