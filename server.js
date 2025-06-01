const express = require("express");
const cors = require("cors");
const { loadDocument } = require("./documentLoader");
const { askOllama } = require("./ollama");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const context = loadDocument("./data.txt");

app.post("/api/chat", async (req, res) => {
  const { message } = req.body;

  const prompt = `
You are a helpful assistant who answers only based on the provided context.
- Do not include internal thoughts.
- Do not use <think> or reasoning.
- Just give the final answer.
- If the message is unrelated to the context, respond with "I don't know."

Context:
${context}

User: ${message}
Answer:
`;

  try {
    const raw = await askOllama(prompt);
    const cleaned = raw.replace(/<think>.*?<\/think>/gis, "").trim();
    res.json({ reply: cleaned });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to query model." });
  }
});

app.listen(3000, () =>
  console.log("✅ Server running at http://localhost:3000")
);
