const axios = require("axios");

async function askOllama(prompt) {
  const res = await axios.post("http://localhost:11434/api/generate", {
    model: "deepseek-r1:latest",
    prompt: prompt,
    stream: false,
  });
  return res.data.response;
}

module.exports = { askOllama };
