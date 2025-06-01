// documentLoader.js
const fs = require("fs");

function loadDocument(filePath) {
  const text = fs.readFileSync(filePath, "utf-8");
  return text;
}

module.exports = { loadDocument };
