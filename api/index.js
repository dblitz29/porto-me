// Portfolio Node.js stylish + minimal untuk Vercel
// Jalur: /, /about, /projects, /contact
const SITE = {
  title: "Fadhil — AI/DevOps",
  name: "Primafadhil Sulistyo",
  email: "primafadhil.sulistyo@gmail.com",
  waLink: "https://wa.me/6281228729513",
  github: "https://github.com/yourusername",
  linkedin: "https://www.linkedin.com/in/yourusername",
  baseUrl: "https://your-vercel-url.vercel.app" // ganti setelah deploy
};

const PROJECTS = [
  {
    title: "NutriIoTSpoon",
    desc: "IoT spoon calorie detection (YOLO) + mobile app.",
    tags: ["IoT", "Computer Vision", "YOLO"]
  },
  {
    title: "Planogram Compliance",
    desc: "Object detection & classification SKU display (Ajinomoto).",
    tags: ["SageMaker", "Bedrock", "CV"]
  },
  {
    title: "HR GenAI Chatbot",
    desc: "Text-to-SQL + RAG untuk HR analytics multi-channel.",
    tags: ["Bedrock", "pgvector", "RAG"]
  }
];

function baseHtml({ title, body, description = "Portfolio AI/DevOps — warm gradient, minimal, responsif." }) {
  return `<!doctype html>
<html lang="id">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>${title}</title>
  <meta name="description" content="${escapeHtml(description)}" />
  <meta name="theme-color" content="#0e1527" />
  <link rel="icon" href="/static/favicon.ico" />
  <link rel="preload" as="image" href="/static/profile.webp" />
  <link rel="stylesheet" href="/static/style.css" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${escapeHtml(description)}" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="${SITE.baseUrl}/static/profile.webp" />
  <script type="application/ld+json">
  ${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.name,
    url: SITE.baseUrl,
    email: `mailto:${SITE.email}`,
    sameAs: [SITE.github, SITE.linkedin]
  })}
  </script>
</head>
<body>
  <div class="nav">
    <div class="container navin">
      <a class="brand" href="/">fadhil.dev</a>
      <nav class="tabs">
        <a href="/about">About</a>
        <a href="/projects">Projects</a>
        <a href="/contact">Contact</a>
      </nav>
    </div>
  </div>

  <main class="container">
    ${body}
    <footer class="footer">
      © ${new Date().getFullYear()} fadhil.dev — Node.js on Vercel
    </footer>
  </main>

  <script>
    // Filter project by tag (client-side, kecil saja)
    (function(){
      const filterBar = document.querySelector('[data-filterbar]');
      if (!filterBar) return;
      const cards = Array.from(document.querySelectorAll('[data-card]'));
      filterBar.addEventListener('click', (e) => {
        const btn = e.target.closest('button');
        if (!btn) return;
        const tag = btn.dataset.tag;
        document.querySelectorAll('[data-filterbar] button').forEach(b=>b.classList.remove('active'));
        btn.classList.add('active');
        cards.forEach(c=>{
          const tags = (c.dataset.tags || '').split(',');
          c.style.display = (tag==='All'||tags.includes(tag)) ? '' : 'none';
        });
      });
    })();
  </script>
</body>
</html>`;
}

function home() {
  const tags = Array.from(new Set(PROJECTS.flatMap(p => p.tags)));
  const cards = PROJECTS.map(p => `
    <article class="card" data-card data-tags="${p.tags.join(',')}">
      <h3>${p.title}</h3>
      <p class="muted">${p.desc}</p>
      <div class="tags">${p.tags.map(t=>`<span class="tag">${t}</span>`).join("")}</div>
    </article>
  `).join("");

  const body = `
  <header class="hero">
    <div class="hero-left">
      <p class="eyebrow">Greetings!</p>
      <h1>Saya passionate di <span class="accent">AI & DevOps</span> — let's dive in!</h1>
      <p class="lead">Fokus di ML/LLM, Computer Vision, & AWS (Bedrock, SageMaker, EKS). 
         Senang membangun solusi end-to-end: data → model → deploy → observability.</p>
      <div class="btns">
        <a class="btn primary" href="/projects">Explore Projects</a>
        <a class="btn" href="/contact">Contact Me</a>
      </div>
    </div>
    <div class="hero-right">
      <img class="avatar" src="/static/profile.webp" alt="Foto ${escapeHtml(SITE.name)}" loading="eager" />
    </div>
  </header>

  <section class="section">
    <div class="section-head">
      <h2>Selected Projects</h2>
      <div class="filter" data-filterbar>
        <button class="chip active" data-tag="All">All</button>
        ${tags.map(t=>`<button class="chip" data-tag="${t}">${t}</button>`).join("")}
      </div>
    </div>
    <div class="grid">${cards}</div>
  </section>
  `;

  return baseHtml({ title: `${SITE.title}`, body });
}

function about() {
  const body = `
  <section class="section">
    <h2>About</h2>
    <p class="muted">Saya cheerful & friendly; suka K-pop, gaming, dan eksplor teknologi.
      Passion di AI/ML (CV, NLP, LLM) & DevOps cloud (AWS). 
      Highlight: Planogram CV (Ajinomoto), HR GenAI Chatbot (SQL + RAG), MLOps di AWS.</p>
  </section>
  `;
  return baseHtml({ title: `About — ${SITE.title}`, body });
}

function projects() {
  const cards = PROJECTS.map(p => `
    <article class="card">
      <h3>${p.title}</h3>
      <p class="muted">${p.desc}</p>
      <div class="tags">${p.tags.map(t=>`<span class="tag">${t}</span>`).join("")}</div>
    </article>
  `).join("");
  const body = `
  <section class="section">
    <h2>Projects</h2>
    <div class="grid">${cards}</div>
  </section>`;
  return baseHtml({ title: `Projects — ${SITE.title}`, body });
}

function contact() {
  const body = `
  <section class="section">
    <h2>Contact</h2>
    <div class="contact">
      <p>Email: <a href="mailto:${SITE.email}">${SITE.email}</a></p>
      <p>WhatsApp: <a href="${SITE.waLink}">+62 812-2872-9513</a></p>
      <p>GitHub: <a href="${SITE.github}">${SITE.github}</a></p>
      <p>LinkedIn: <a href="${SITE.linkedin}">${SITE.linkedin}</a></p>
    </div>
  </section>`;
  return baseHtml({ title: `Contact — ${SITE.title}`, body });
}

function notFound() {
  const body = `
  <section class="section">
    <h2>404</h2>
    <p class="muted">Halaman tidak ditemukan.</p>
    <div class="btns"><a class="btn" href="/">Kembali ke Home</a></div>
  </section>`;
  return baseHtml({ title: `404 — ${SITE.title}`, body });
}

// util kecil
function escapeHtml(s){ return String(s).replace(/[&<>"']/g, m=>({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[m])); }

// Handler Vercel
module.exports = (req, res) => {
  const path = (req.url || "/").split("?")[0];
  let html;
  if (path === "/" || path === "/index.html") html = home();
  else if (path === "/about") html = about();
  else if (path === "/projects") html = projects();
  else if (path === "/contact") html = contact();
  else html = notFound();

  res.statusCode = html.includes("404 —") ? 404 : 200;
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.end(html);
};
