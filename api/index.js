// api/index.js
module.exports = (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.end(`
    <!doctype html>
    <html>
    <head>
      <title>Fadhil Portfolio</title>
      <style>
        body { font-family:sans-serif; background:#0b0f1a; color:white; padding:2rem; }
        h1 { color:#34d399; }
        a { color:#34d399; }
      </style>
    </head>
    <body>
      <h1>Hello, I'm Fadhil 👋</h1>
      <p>AI & DevOps Enthusiast</p>
      <h2>Projects</h2>
      <ul>
        <li>NutriIoTSpoon – IoT spoon calorie detection</li>
        <li>Planogram Compliance – Ajinomoto CV</li>
        <li>HR GenAI Chatbot – Bedrock & SQL Agent</li>
      </ul>
      <p>📩 <a href="mailto:primafadhil.sulistyo@gmail.com">Contact Me</a></p>
    </body>
    </html>
  `);
};
