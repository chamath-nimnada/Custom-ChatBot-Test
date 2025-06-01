// index.js
const readline = require("readline");
const { loadDocument } = require("./documentLoader");
const { askOllama } = require("./ollama");

// Load your data once
const documentText = loadDocument("./data.txt"); // Put your knowledge here

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("💬 Ask a question (type 'exit' to quit):");

rl.on("line", async (input) => {
  if (input.toLowerCase() === "exit") {
    rl.close();
    return;
  }

  const prompt = `
You are an assistant. Answer using only the information in the context below.
If you don’t know, say “I don't know.”

Context:
${documentText}

Question:
${input}
`;

  const answer = await askOllama(prompt);
  console.log(`🤖: ${answer}`);
});
