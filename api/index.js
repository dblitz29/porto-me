// api/index.js
const SITE = {
  name: "Primafadhil Sulistyo",
  email: "primafadhil.sulistyo@gmail.com",
  wa: "https://wa.me/6281228729513",
  github: "https://github.com/yourusername",
  linkedin: "https://www.linkedin.com/in/yourusername",
  title: "Fadhil — AI/DevOps"
};

const projects = [
  { title: "NutriIoTSpoon", desc: "IoT spoon calorie detection (YOLO) + mobile app.", tags: ["IoT","CV","YOLO"] },
  { title: "Planogram Compliance", desc: "Object detection & classification SKU display (Ajinomoto).", tags: ["SageMaker","Bedrock","CV"] },
  { title: "HR GenAI Chatbot", desc: "Text-to-SQL + RAG untuk HR analytics multi-channel.", tags: ["Bedrock","pgvector","RAG"] },
];

function page(body, title = SITE.title) {
  return `<!doctype html>
<html lang="id">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>${title}</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: { base: "#0b0f1a", panel: "#0c1324", accent: "#34d399" },
        }
      }
    }
  </script>
</head>
<body class="min-h-screen text-zinc-100 bg-gradient-to-b from-base via-panel to-base">
  <nav class="sticky top-0 z-20 backdrop-blur bg-black/20 border-b border-white/10">
    <div class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      <a href="/" class="font-semibold">fadhil.dev</a>
      <div class="flex gap-4 text-sm">
        <a href="/about" class="opacity-80 hover:opacity-100">About</a>
        <a href="/projects" class="opacity-80 hover:opacity-100">Projects</a>
        <a href="/contact" class="opacity-80 hover:opacity-100">Contact</a>
      </div>
    </div>
  </nav>

  <main class="max-w-6xl mx-auto px-4">${body}
    <footer class="py-12 text-sm text-zinc-400">© ${new Date().getFullYear()} fadhil.dev — Node.js on Vercel</footer>
  </main>
</body>
</html>`;
}

function home() {
  const cards = projects.map(p => `
    <a class="group rounded-2xl border border-white/10 hover:border-white/20 p-5 bg-white/5 transition-colors"
       href="#">
      <h3 class="text-lg font-semibold group-hover:text-accent">${p.title}</h3>
      <p class="mt-2 text-sm text-zinc-300">${p.desc}</p>
      <div class="mt-3 flex flex-wrap gap-2">
        ${p.tags.map(t=>`<span class="text-xs px-2 py-1 rounded-full border border-white/10">${t}</span>`).join("")}
      </div>
    </a>
  `).join("");

  return page(`
    <header class="pt-16 pb-10 grid md:grid-cols-[1.2fr_.8fr] items-center gap-8">
      <div>
        <p class="text-sm uppercase tracking-widest text-emerald-300/90">Greetings!</p>
        <h1 class="mt-2 text-4xl sm:text-6xl font-bold leading-tight">
          I’m passionate about <span class="text-accent">AI & DevOps</span> — let’s dive in!
        </h1>
        <p class="mt-4 max-w-3xl text-zinc-300">
          Fokus ML/LLM, Computer Vision, & AWS (Bedrock, SageMaker, EKS). End-to-end delivery dari data → model → deploy.
        </p>
        <div class="mt-6 flex gap-3">
          <a href="/projects" class="px-4 py-2 rounded-2xl bg-accent text-black font-semibold">Explore Projects</a>
          <a href="/contact" class="px-4 py-2 rounded-2xl border border-white/20">Contact Me</a>
        </div>
      </div>
      <div class="flex md:justify-end">
        <img src="/static/profile.png" alt="Foto ${SITE.name}"
             class="w-40 h-40 rounded-full object-cover ring-2 ring-accent shadow-xl">
      </div>
    </header>

    <section class="py-12">
      <h2 class="text-2xl font-semibold">Selected Projects</h2>
      <div class="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">${cards}</div>
    </section>
  `);
}

function about() {
  return page(`
    <section class="py-12">
      <h2 class="text-2xl font-semibold">About</h2>
      <p class="mt-3 text-zinc-300 leading-relaxed">
        Saya cheerful & friendly; suka K-pop, gaming, dan eksplor teknologi.
        Highlight: Planogram CV (Ajinomoto), HR GenAI Chatbot, MLOps di AWS.
      </p>
    </section>
  `, "About — " + SITE.title);
}

function projectsPage() {
  return page(`
    <section class="py-12">
      <h2 class="text-2xl font-semibold">Projects</h2>
      <ul class="mt-4 list-disc pl-6 text-zinc-300">
        ${projects.map(p=>`<li><span class="font-semibold">${p.title}</span> — ${p.desc}</li>`).join("")}
      </ul>
    </section>
  `, "Projects — " + SITE.title);
}

function contact() {
  return page(`
    <section class="py-12">
      <h2 class="text-2xl font-semibold">Contact</h2>
      <div class="mt-3 text-zinc-300 space-y-1">
        <p>Email: <a class="underline" href="mailto:${SITE.email}">${SITE.email}</a></p>
        <p>WhatsApp: <a class="underline" href="${SITE.wa}">+62 812-2872-9513</a></p>
        <p>GitHub: <a class="underline" href="${SITE.github}">${SITE.github}</a></p>
        <p>LinkedIn: <a class="underline" href="${SITE.linkedin}">${SITE.linkedin}</a></p>
      </div>
    </section>
  `, "Contact — " + SITE.title);
}

module.exports = (req, res) => {
  const path = (req.url || "/").split("?")[0];
  let html =
    path === "/" || path === "/index.html" ? home() :
    path === "/about"    ? about() :
    path === "/projects" ? projectsPage() :
    path === "/contact"  ? contact() :
    page(`<section class="py-12"><h2 class="text-2xl font-semibold">404</h2>
          <p class="text-zinc-300">Halaman tidak ditemukan.</p></section>`, "404 — " + SITE.title);

  res.statusCode = html.includes("404 —") ? 404 : 200;
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.end(html);
};
