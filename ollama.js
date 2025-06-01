// ollama.js
const axios = require("axios");

async function askOllama(prompt) {
  const response = await axios.post("http://localhost:11434/api/generate", {
    model: "deepseek-r1:latest",
    prompt: prompt,
    stream: false,
  });

  return response.data.response.trim();
}

module.exports = { askOllama };
