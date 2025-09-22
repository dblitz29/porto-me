// api/index.js — Portfolio: Landing + Carousel (EN short captions) + Skills + Projects + Contact
const SITE = {
  name: "Primafadhil Sulistyo",
  email: "primafadhil.sulistyo@gmail.com",
  github: "https://github.com/dblitz29",
  linkedin: "https://www.linkedin.com/in/primafadhil-sulistyo/",
  title: "Fadhil — AI/ML • Software • Cloud"
};

// Gambar berada di /static/gallery/*. Ganti nama file sesuai asetmu.
const GALLERY = [
  {
    src: "/static/gallery/iot.jpg",
    caption:
      "Runner-up at KMIPN IV (IoT), Batam. Built a calorie-detection spoon using computer vision with a companion app."
  },
  {
    src: "/static/gallery/aws-event.jpg",
    caption:
      "Key speaker at AWS Generative AI event, Surabaya 2025. Shared end-to-end GenAI patterns on AWS."
  },
  {
    src: "/static/gallery/datacenter.jpg",
    caption:
      "Supported datacenter racking and server setup at Datacomm to strengthen production readiness."
  }
];

const SKILLS = {
  "AI / ML": [
    "Large Language Models (LLMs)",
    "Generative AI (OpenAI, Bedrock)",
    "Computer Vision (YOLO, OpenCV)",
    "Natural Language Processing (NLP)",
    "Embeddings & Vector Databases (Faiss, pgvector, Milvus)",
    "Text-to-SQL & RAG Pipelines",
    "Model Deployment & MLOps (SageMaker, CI/CD)"
  ],
  "Software Development": [
    "Python", "Node.js", "PHP", "FastAPI", "PostgreSQL",
    "MongoDB", "REST APIs", "JavaScript/TypeScript"
  ],
  "Cloud / DevOps": [
    "AWS (Bedrock, SageMaker, Lambda, EKS, S3, RDS)",
    "OpenStack", "Docker", "Kubernetes",
    "Ansible", "CloudWatch", "CI/CD Pipelines"
  ],
  "Data & Tools": [
    "ETL & Data Warehousing",
    "Data Lakes & DWH tools",
    "Grafana & Observability",
    "Apache Spark & Hadoop"
  ]
};


const PROJECTS = [
  {
    title: "IoT-Based Calorie Detection Spoon",
    desc: "IoT spoon with deep-learning calorie estimation and a companion mobile app. Runner-up KMIPN IV.",
    tags: ["IoT","Deep Learning","Mobile"]
  },
  {
    title: "Retail Planogram Intelligence",
    desc: "Computer Vision on AWS (SageMaker + Bedrock) to detect shelf compliance and improve in-store execution.",
    tags: ["Computer Vision","AWS","Retail"]
  },
  {
    title: "Quality Control Automation",
    desc: "Automated defect detection in manufacturing using S3, Lambda, and SageMaker for consistent, faster QC.",
    tags: ["Automation","AWS","Computer Vision"]
  },
  {
    title: "Centralized Chatbot Platform",
    desc: "Enterprise chatbot hub on AWS + OpenAI integrating HR/Finance/IT with RAG, access control, and observability.",
    tags: ["Chatbot","AWS","OpenAI"]
  },
  {
    title: "Generative Fashion Behavior AI",
    desc: "Learns user style preferences and generates contextual insights via embeddings + GenAI on Bedrock/OpenAI.",
    tags: ["Generative AI","Fashion","OpenAI"]
  },
  {
    title: "Insurance Claim Assistant",
    desc: "GenAI assistant for claim verification and document summarization using Bedrock, Lambda, and OpenAI API.",
    tags: ["Insurance","AWS","OpenAI"]
  },
  {
    title: "Planogram Compliance (Ajinomoto)",
    desc: "Object detection and product classification; model pipeline and inference managed on AWS.",
    tags: ["Computer Vision","AWS","Classification"]
  },
  {
    title: "AI-Powered Customer Support Chatbot",
    desc: "Context-aware chatbot with Text-to-SQL and RAG for secure operational data access.",
    tags: ["Chatbot","NLP","RAG"]
  },
  {
    title: "NusaChat (Public Gen AI Service)",
    desc: "Public GenAI service with image processing and database integration, designed for multi-tenant scenarios.",
    tags: ["Generative AI","Cloud","Backend"]
  },
  {
    title: "Freight Management System",
    desc: "Desktop and mobile apps for logistics operations with tracking and operational reporting.",
    tags: ["Full-stack","Logistics","Mobile"]
  }
];

function page(body, title = SITE.title) {
  return `<!doctype html>
<html lang="en">
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
            fadeup:"fadeup 0.9s ease-out forwards",
            bgshift:"bgshift 22s ease-in-out infinite alternate"
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
    // Carousel autoplay + dots
    (function(){
      const track = document.querySelector('#carousel-track');
      if(!track) return;
      const slides = Array.from(track.children);
      const dots = Array.from(document.querySelectorAll('[data-dot]'));
      let i=0,timer;
      function go(n){i=(n+slides.length)%slides.length;track.style.transform='translateX('+(-i*100)+'%)';dots.forEach((d,idx)=>d.classList.toggle('bg-accent',idx===i));}
      function auto(){clearInterval(timer);timer=setInterval(()=>go(i+1),4500);}
      dots.forEach((d,idx)=>d.addEventListener('click',()=>{go(idx);auto();}));
      go(0);auto();
    })();
  </script>
</body>
</html>`;
}

function SectionSkills(){
  const cards = Object.entries(SKILLS).map(([group, items]) => `
    <div class="rounded-2xl border border-white/10 p-5 bg-white/5 hover:border-accent/50 hover:shadow-lg transition">
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

function SectionContact(){
  return `
    <section id="contact" class="py-16 animate-fadeup">
      <h2 class="text-2xl font-semibold">Contact</h2>
      <div class="mt-6 grid sm:grid-cols-3 gap-6">
        <a href="mailto:${SITE.email}" class="group rounded-2xl border border-white/10 p-5 bg-white/5 hover:border-accent/50 transition">
          <h3 class="font-semibold">Email</h3>
          <p class="mt-1 text-zinc-300">${SITE.email}</p>
          <span class="mt-3 inline-block text-xs opacity-80 group-hover:opacity-100">Send an email</span>
        </a>
        <a href="${SITE.github}" target="_blank" rel="noopener" class="group rounded-2xl border border-white/10 p-5 bg-white/5 hover:border-accent/50 transition">
          <h3 class="font-semibold">GitHub</h3>
          <p class="mt-1 text-zinc-300">${SITE.github}</p>
          <span class="mt-3 inline-block text-xs opacity-80 group-hover:opacity-100">View repositories</span>
        </a>
        <a href="${SITE.linkedin}" target="_blank" rel="noopener" class="group rounded-2xl border border-white/10 p-5 bg-white/5 hover:border-accent/50 transition">
          <h3 class="font-semibold">LinkedIn</h3>
          <p class="mt-1 text-zinc-300">${SITE.linkedin}</p>
          <span class="mt-3 inline-block text-xs opacity-80 group-hover:opacity-100">Connect professionally</span>
        </a>
      </div>
      <p class="mt-6 text-sm text-zinc-400 max-w-2xl">
        Open for collaboration, AI/ML consulting, and GenAI integrations in cloud environments with a focus on reliability and scalability.
      </p>
    </section>
  `;
}

function home(){
  const dots = GALLERY.map((_,idx)=>`<button aria-label="slide ${idx+1}" data-dot class="w-3 h-3 rounded-full bg-white/30"></button>`).join("");
  const slides = GALLERY.map(g=>`
    <div class="min-w-full flex flex-col items-center">
      <img src="${g.src}" alt="Gallery image" class="w-full h-72 sm:h-96 object-cover rounded-2xl"/>
      <p class="mt-3 text-sm text-zinc-300 italic max-w-3xl text-center px-2">${g.caption}</p>
    </div>
  `).join("");

  return page(`
    <!-- HERO -->
    <header class="pt-16 pb-10 grid md:grid-cols-[1.2fr_.8fr] items-center gap-8 animate-fadeup">
      <div>
        <p class="text-sm uppercase tracking-widest text-emerald-300/90">Hi, I’m Fadhil</p>
        <h1 class="mt-2 text-4xl sm:text-6xl font-bold leading-tight">
          AI/ML Engineer focused on taking intelligent systems from data to production.
        </h1>
        <p class="mt-4 max-w-3xl text-zinc-300">
          My background in Software Development and Cloud/DevOps bridges algorithms, applications, and infrastructure
          to deliver reliable, scalable AI solutions.
        </p>
      </div>
      <div class="flex md:justify-end">
        <img src="/static/profile.png" alt="Photo of ${SITE.name}"
             class="w-44 h-44 rounded-full object-cover ring-2 ring-accent shadow-xl animate-floaty">
      </div>
    </header>

    <!-- CAROUSEL -->
    <section class="pb-4 animate-fadeup">
      <div class="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
        <div id="carousel-track" class="flex transition-transform duration-700 ease-out">${slides}</div>
      </div>
      <!-- Dots moved BELOW the carousel to avoid overlapping the caption -->
      <div class="mt-3 flex justify-center gap-2">${dots}</div>
    </section>

    ${SectionSkills()}
    ${SectionProjects()}
    ${SectionContact()}
  `);
}

module.exports = (req, res) => {
  const html = home();
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.end(html);
};
