const Papa = require("papaparse");

function parseCSV(buffer) {
  const csv = buffer.toString("utf8");

  const parsed = Papa.parse(csv, {
    header: true,
    skipEmptyLines: true,
  });

  return parsed.data;
}

module.exports = parseCSV;
