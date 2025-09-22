// api/index.js — Tailwind CDN + animasi minimalis
const SITE = {
  name: "Primafadhil Sulistyo",
  email: "primafadhil.sulistyo@gmail.com",
  wa: "https://wa.me/6281228729513",
  github: "https://github.com/yourusername",
  linkedin: "https://www.linkedin.com/in/yourusername",
  title: "Fadhil — AI/ML • Software • Cloud"
};

const projects = [
  { title: "NutriIoTSpoon", desc: "IoT spoon calorie detection (YOLO) + mobile app.", tags: ["IoT","CV","YOLO"] },
  { title: "Planogram Compliance", desc: "Object detection & SKU classification (Ajinomoto).", tags: ["SageMaker","Bedrock","CV"] },
  { title: "HR GenAI Chatbot", desc: "Text-to-SQL + RAG untuk HR analytics multi-channel.", tags: ["Bedrock","pgvector","RAG"] },
];

const skillsAI = ["Machine Learning", "Computer Vision", "Generative AI", "Evaluation & MLOps"];
const skillsDev = ["Node.js", "Python", "FastAPI", "PostgreSQL", "REST"];
const skillsCloud = ["AWS Bedrock", "SageMaker", "EKS/K8s", "Docker", "CI/CD"];

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
          keyframes: {
            floaty: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-6px)" } },
            softpulse: { "0%,100%": { opacity: .6 }, "50%": { opacity: 1 } },
            bgshift: { "0%": { backgroundPosition: "0% 0%" }, "100%": { backgroundPosition: "100% 0%" } }
          },
          animation: {
            floaty: "floaty 6s ease-in-out infinite",
            softpulse: "softpulse 3.5s ease-in-out infinite",
            bgshift: "bgshift 18s ease-in-out infinite alternate"
          }
        }
      }
    }
  </script>
</head>
<body class="min-h-screen text-zinc-100 bg-[length:200%_100%] bg-gradient-to-b from-base via-panel to-base animate-bgshift">
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

function ChipList(arr){
  return `<div class="mt-3 flex flex-wrap gap-2">
    ${arr.map(t=>`<span class="text-xs px-2 py-1 rounded-full border border-white/10">${t}</span>`).join("")}
  </div>`;
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
    <!-- HERO -->
    <header class="pt-16 pb-10 grid md:grid-cols-[1.2fr_.8fr] items-center gap-8">
      <div>
        <!-- Opsi 1: Ringkas, Impactful -->
        <p class="text-sm uppercase tracking-widest text-emerald-300/90">Hi, I’m Fadhil 👋</p>
        <h1 class="mt-2 text-4xl sm:text-6xl font-bold leading-tight">
          An <span class="text-accent">AI/ML Engineer</span> passionate about turning data into intelligence.
        </h1>
        <p class="mt-4 max-w-3xl text-zinc-300">
          Beyond machine learning, I also craft scalable software solutions and leverage cloud & DevOps
          to deliver end-to-end systems.
        </p>
        <div class="mt-6 flex gap-3">
          <a href="/projects" class="px-4 py-2 rounded-2xl bg-accent text-black font-semibold">Explore Projects</a>
          <a href="/contact" class="px-4 py-2 rounded-2xl border border-white/20">Contact Me</a>
        </div>
        <div class="mt-3 h-[2px] w-40 bg-accent/60 rounded animate-softpulse"></div>
      </div>
      <div class="flex md:justify-end">
        <img src="/static/foto.png" alt="Foto ${SITE.name}"
             class="w-40 h-40 rounded-full object-cover ring-2 ring-accent shadow-xl animate-floaty">
      </div>
    </header>

    <!-- SKILLS -->
    <section class="py-8">
      <h2 class="text-2xl font-semibold">Skills</h2>
      <div class="grid sm:grid-cols-3 gap-5 mt-4">
        <div class="rounded-2xl border border-white/10 p-4 bg-white/5">
          <h3 class="font-semibold">AI / ML</h3>
          ${ChipList(skillsAI)}
        </div>
        <div class="rounded-2xl border border-white/10 p-4 bg-white/5">
          <h3 class="font-semibold">Software Development</h3>
          ${ChipList(skillsDev)}
        </div>
        <div class="rounded-2xl border border-white/10 p-4 bg-white/5">
          <h3 class="font-semibold">Cloud / DevOps</h3>
          ${ChipList(skillsCloud)}
        </div>
      </div>
    </section>

    <!-- EXPERIENCE -->
    <section class="py-8">
      <h2 class="text-2xl font-semibold">Experience</h2>
      <ol class="mt-4 space-y-4">
        <li class="rounded-2xl border border-white/10 p-4 bg-white/5">
          <div class="flex items-center justify-between gap-3 flex-wrap">
            <p class="font-semibold">AI/ML Engineer — Ajinomoto (Project)</p>
            <span class="text-xs text-zinc-400">2024–Now</span>
          </div>
          <ul class="list-disc pl-5 text-zinc-300 text-sm mt-2">
            <li>Planogram CV: object detection & classification, deployment on AWS SageMaker.</li>
            <li>End-to-end pipeline & monitoring (logs/metrics) dengan praktik MLOps.</li>
          </ul>
        </li>
        <li class="rounded-2xl border border-white/10 p-4 bg-white/5">
          <div class="flex items-center justify-between gap-3 flex-wrap">
            <p class="font-semibold">Software & Cloud Engineer — Various</p>
            <span class="text-xs text-zinc-400">2022–2024</span>
          </div>
          <ul class="list-disc pl-5 text-zinc-300 text-sm mt-2">
            <li>Bangun layanan backend, integrasi database, dan CI/CD di AWS.</li>
            <li>Optimasi biaya & reliability (Docker, K8s/EKS, observability).</li>
          </ul>
        </li>
      </ol>
    </section>

    <!-- PROJECTS -->
    <section class="py-10">
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
        I am an AI/ML enthusiast with a strong passion for exploring how data and algorithms create meaningful impact.
        My main focus is on Machine Learning, Computer Vision, and Generative AI—designing and deploying intelligent systems.
      </p>
      <p class="mt-3 text-zinc-300 leading-relaxed">
        In addition to AI/ML expertise, I have solid experience in Software Development and Cloud Computing (DevOps).
        This combination lets me build models, engineer scalable applications, and deploy them seamlessly in the cloud.
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
