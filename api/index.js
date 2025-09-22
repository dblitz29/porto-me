// ...
res.end(`
  <!doctype html>
  <html>
  <head>
    <title>Fadhil Portfolio</title>
    <style>
      body { font-family:sans-serif; background:#0b0f1a; color:white; padding:2rem; }
      h1 { color:#34d399; }
      img.avatar { width:140px; height:140px; border-radius:50%; object-fit:cover; border:2px solid #34d399; }
      .row { display:flex; gap:24px; align-items:center; flex-wrap:wrap; }
    </style>
  </head>
  <body>
    <div class="row">
      <img class="avatar" src="/static/profile.jpg" alt="Foto Fadhil" loading="lazy" />
      <div>
        <h1>Hello, I'm Fadhil 👋</h1>
        <p>AI & DevOps Enthusiast</p>
      </div>
    </div>
    <!-- sisanya... -->
  </body>
  </html>
`);
// ...
