// api/index.js — Portfolio based on CV
const SITE = {
  name: "Primafadhil Sulistyo",
  email: "primafadhil.sulistyo@gmail.com",
  wa: "https://wa.me/6281228729513",
  github: "https://github.com/dblitz29",
  linkedin: "https://www.linkedin.com/in/primafadhil-sulistyo/",
  title: "Fadhil — AI/ML • Software • Cloud"
};

const GALLERY = [
  "/static/gallery/iot.jpg",
  "/static/gallery/award.jpg",
  "/static/gallery/workshop.jpg",
  "/static/gallery/project.jpg"
];

const SKILLS = {
  "AI / ML": ["LLMs", "Computer Vision", "Generative AI", "NLP", "MLOps"],
  "Software Development": ["Python", "Node.js", "FastAPI", "PostgreSQL", "REST APIs"],
  "Cloud / DevOps": ["AWS Bedrock", "SageMaker", "EKS/K8s", "Docker", "OpenStack", "Ansible"]
};

const PROJECTS = [
  { title: "IoT-Based Calorie Detection Spoon", desc: "Runner-up KMIPN IV — IoT spoon with deep learning + mobile app.", tags: ["IoT","Deep Learning","Mobile"] },
  { title: "Planogram Compliance (Ajinomoto)", desc: "Object detection & classification using SageMaker + Bedrock.", tags: ["Computer Vision","AWS","Classification"] },
  { title: "AI-Powered Customer Support Chatbot", desc: "Contextual chatbot with Text-to-SQL and RAG pipeline.", tags: ["Chatbot","NLP","RAG"] },
  { title: "NusaChat (Public Gen AI Service)", desc: "GenAI ecosystem in Datacomm with image processing & DB integration.", tags: ["Generative AI","Cloud","Backend"] },
  { title: "Freight Management System", desc: "Desktop & mobile app for logistics optimization.", tags: ["Full-stack","Logistics","Mobile"] },
  { title: "CyberGuard", desc: "AI-driven malicious website detection system.", tags: ["Cybersecurity","ML"] }
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
          colors: { base:"#0b0f1a", panel:"#0c1324", accent:"#34d399" },
          keyframes: {
            floaty: { "0%,100%":{transform:"translateY(0)"}, "50%":{transform:"translateY(-10px)"} },
            fadeup: { "0%":{opacity:0,transform:"translateY(20px)"}, "100%":{opacity:1,transform:"translateY(0)"} },
            bgshift: { "0%":{backgroundPosition:"0% 50%"}, "100%":{backgroundPosition:"100% 50%"} }
          },
          animation: {
            floaty:"floaty 6s ease-in-out infinite",
            fadeup:"fadeup 1s ease-out forwards",
            bgshift:"bgshift 20s ease-in-out infinite alternate"
          }
        }
      }
    }
  </script>
</head>
<body class="min-h-screen text-zinc-100 bg-[length:200%_200%] bg-gradient-to-r from-base via-panel to-base animate-bgshift">
  <nav class="sticky top-0 z-20 backdrop-blur bg-black/30 border-b border-white/10">
    <div class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      <a href="/" class="font-semibold">fadhil.dev</a>
      <div class="flex gap-4 text-sm">
        <a href="#skills" class="opacity-80 hover:opacity-100">Skills</a>
        <a href="#projects" class="opacity-80 hover:opacity-100">Projects</a>
        <a href="#contact" class="opacity-80 hover:opacity-100">Contact</a>
      </div>
    </div>
  </nav>

  <main class="max-w-6xl mx-auto px-4">${body}
    <footer class="py-12 text-sm text-zinc-400">© ${new Date().getFullYear()} fadhil.dev — Node.js on Vercel</footer>
  </main>

  <script>
    // Carousel autoplay
    (function(){
      const track = document.querySelector('#carousel-track');
      if(!track) return;
      const slides = Array.from(track.children);
      const dots = Array.from(document.querySelectorAll('[data-dot]'));
      let i=0,timer;
      function go(n){i=(n+slides.length)%slides.length;track.style.transform='translateX('+(-i*100)+'%)';dots.forEach((d,idx)=>d.classList.toggle('bg-accent',idx===i));}
      function auto(){clearInterval(timer);timer=setInterval(()=>go(i+1),4000);}
      dots.forEach((d,idx)=>d.addEventListener('click',()=>{go(idx);auto();}));
      go(0);auto();
    })();
  </script>
</body>
</html>`;
}

function SectionSkills(){
  const cards = Object.entries(SKILLS).map(([group, items]) => `
    <div class="rounded-2xl border border-white/10 p-5 bg-white/5 hover:scale-105 transition">
      <h3 class="font-semibold text-accent">${group}</h3>
      <div class="mt-3 flex flex-wrap gap-2">
        ${items.map(t=>`<span class="text-xs px-2 py-1 rounded-full border border-white/10">${t}</span>`).join("")}
      </div>
    </div>
  `).join("");
  return `
    <section id="skills" class="py-16 animate-fadeup">
      <h2 class="text-2xl font-semibold">Technical Skills</h2>
      <div class="grid sm:grid-cols-3 gap-6 mt-6">${cards}</div>
    </section>
  `;
}

function SectionProjects(){
  const cards = PROJECTS.map(p => `
    <article class="rounded-2xl border border-white/10 p-5 bg-white/5 hover:border-accent/50 hover:shadow-lg transition">
      <h3 class="text-lg font-semibold text-accent">${p.title}</h3>
      <p class="mt-2 text-sm text-zinc-300">${p.desc}</p>
      <div class="mt-3 flex flex-wrap gap-2">
        ${p.tags.map(t=>`<span class="text-xs px-2 py-1 rounded-full border border-white/10">${t}</span>`).join("")}
      </div>
    </article>
  `).join("");
  return `
    <section id="projects" class="py-16 animate-fadeup">
      <h2 class="text-2xl font-semibold">Projects</h2>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">${cards}</div>
    </section>
  `;
}

function home(){
  const dots = GALLERY.map((_,idx)=>`<button aria-label="slide ${idx+1}" data-dot class="w-3 h-3 rounded-full bg-white/30"></button>`).join("");
  const slides = GALLERY.map(src=>`
    <div class="min-w-full">
      <img src="${src}" alt="Gallery image" class="w-full h-72 sm:h-96 object-cover rounded-2xl"/>
    </div>
  `).join("");

  return page(`
    <!-- HERO -->
    <header class="pt-16 pb-10 grid md:grid-cols-[1.2fr_.8fr] items-center gap-8 animate-fadeup">
      <div>
        <p class="text-sm uppercase tracking-widest text-emerald-300/90">Hi, I’m Fadhil 👋</p>
        <h1 class="mt-2 text-4xl sm:text-6xl font-bold leading-tight">
          An <span class="text-accent">AI/ML Engineer</span> passionate about building intelligent systems.
        </h1>
        <p class="mt-4 max-w-3xl text-zinc-300">
          With strong skills in Software Development and Cloud/DevOps, I bridge the gap between
          data, algorithms, and scalable infrastructure.
        </p>
      </div>
      <div class="flex md:justify-end">
        <img src="/static/profile.png" alt="Foto ${SITE.name}"
             class="w-44 h-44 rounded-full object-cover ring-2 ring-accent shadow-xl animate-floaty">
      </div>
    </header>

    <!-- CAROUSEL -->
    <section class="pb-10 animate-fadeup">
      <div class="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
        <div id="carousel-track" class="flex transition-transform duration-700 ease-out">${slides}</div>
        <div class="absolute inset-x-0 bottom-3 flex justify-center gap-2">${dots}</div>
      </div>
    </section>

    ${SectionSkills()}
    ${SectionProjects()}

    <!-- CONTACT -->
    <section id="contact" class="py-16 animate-fadeup">
      <h2 class="text-2xl font-semibold">Contact</h2>
      <div class="mt-3 text-zinc-300 space-y-1">
        <p>Email: <a class="underline" href="mailto:${SITE.email}">${SITE.email}</a></p>
        <p>WhatsApp: <a class="underline" href="${SITE.wa}">+62 812-2872-9513</a></p>
        <p>GitHub: <a class="underline" href="${SITE.github}">${SITE.github}</a></p>
        <p>LinkedIn: <a class="underline" href="${SITE.linkedin}">${SITE.linkedin}</a></p>
      </div>
    </section>
  `);
}

module.exports = (req, res) => {
  const html = home();
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.end(html);
};
