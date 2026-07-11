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

    res.json({
      success: true,
      imported: aiResponse.length,
      skipped: rows.length - aiResponse.length,
      result: aiResponse,
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
