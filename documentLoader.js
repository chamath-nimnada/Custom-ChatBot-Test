const fs = require("fs");

function loadDocument(filePath) {
  try {
    return fs.readFileSync(filePath, "utf8");
  } catch (err) {
    console.error("Failed to load document:", err);
    return "";
  }
}

module.exports = { loadDocument };
