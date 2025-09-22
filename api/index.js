// api/index.js — Portfolio: Landing + Carousel (caption panjang) + Skills + Projects + Contact
const SITE = {
  name: "Primafadhil Sulistyo",
  email: "primafadhil.sulistyo@gmail.com",
  github: "https://github.com/dblitz29",
  linkedin: "https://www.linkedin.com/in/primafadhil-sulistyo/",
  title: "Fadhil — AI/ML • Software • Cloud"
};

// Gambar berada di /static/gallery/*. Ganti sesuai nama file milikmu.
const GALLERY = [
  {
    src: "/static/gallery/iot.jpg",
    caption:
      "Runner-up KMIPN IV kategori Internet of Things di Batam. Saya merancang perangkat dan model deteksi kalori berbasis visi komputer, lalu mengintegrasikannya dengan aplikasi pendamping agar hasil pengukuran bisa digunakan secara praktis."
  },
  {
    src: "/static/gallery/aws-event.jpg",
    caption:
      "Key speaker pada acara AWS Generative AI di Surabaya tahun 2025. Saya membahas rancangan sistem GenAI end-to-end di AWS, mencakup keamanan data, orchestrasi prompt, evaluasi, serta pola integrasi dengan aplikasi perusahaan."
  },
  {
    src: "/static/gallery/datacenter.jpg",
    caption:
      "Ikut membantu proses racking dan penataan server di lingkungan datacenter Datacomm. Pengalaman ini memperkuat pemahaman saya tentang operasi infrastruktur, kesiapan produksi, dan praktik keandalan sistem."
  }
];

const SKILLS = {
  "AI / ML": [
    "LLMs", "Computer Vision", "Generative AI", "NLP", "MLOps"
  ],
  "Software Development": [
    "Python", "Node.js", "FastAPI", "PostgreSQL", "REST APIs"
  ],
  "Cloud / DevOps": [
    "AWS Bedrock", "SageMaker", "EKS/Kubernetes", "Docker",
    "OpenStack", "Ansible", "AWS Lambda", "API Gateway",
    "CloudWatch", "RDS", "S3"
  ]
};

const PROJECTS = [
  // Judul lama (tetap)
  { title: "IoT-Based Calorie Detection Spoon",
    desc: "Perangkat sendok IoT dengan model deep learning untuk estimasi kalori, dilengkapi aplikasi pendamping. Runner-up KMIPN IV.",
    tags: ["IoT","Deep Learning","Mobile"] },

  // Judul menarik + deskripsi ringkas (AWS/OpenAI)
  { title: "Retail Planogram Intelligence",
    desc: "Sistem Computer Vision di AWS (SageMaker + Bedrock) untuk mendeteksi kepatuhan planogram, mengurangi kesalahan penataan rak dan meningkatkan eksekusi di toko.",
    tags: ["Computer Vision","AWS","Retail"] },

  { title: "Quality Control Automation",
    desc: "Automasi inspeksi kualitas pada jalur manufaktur menggunakan S3, Lambda, dan SageMaker. Mendeteksi cacat secara konsisten dan mempercepat pengambilan keputusan.",
    tags: ["Automation","AWS","Computer Vision"] },

  { title: "Centralized Chatbot Platform",
    desc: "Platform chatbot terpusat berbasis AWS dan OpenAI yang mengintegrasikan alur HR, Finance, dan IT. Mendukung RAG, kontrol akses, dan observabilitas percakapan.",
    tags: ["Chatbot","AWS","OpenAI"] },

  { title: "Generative Fashion Behavior AI",
    desc: "Analitik preferensi dan perilaku fashion pengguna. Menggabungkan embedding, retrieval, dan generative reasoning di AWS Bedrock/OpenAI untuk rekomendasi yang kontekstual.",
    tags: ["Generative AI","Fashion","OpenAI"] },

  { title: "Insurance Claim Assistant",
    desc: "Asisten klaim asuransi berbasis GenAI untuk membantu verifikasi dokumen dan merangkum informasi penting. Dibangun dengan Bedrock, Lambda, dan OpenAI API.",
    tags: ["Insurance","AWS","OpenAI"] },

  // Entri dari CV
  { title: "Planogram Compliance (Ajinomoto)",
    desc: "Pendeteksian objek dan klasifikasi kategori produk untuk audit rak. Pipeline model dan inferensi dikelola di AWS.",
    tags: ["Computer Vision","AWS","Classification"] },

  { title: "AI-Powered Customer Support Chatbot",
    desc: "Chatbot kontekstual dengan Text-to-SQL dan RAG untuk akses data operasional secara aman.",
    tags: ["Chatbot","NLP","RAG"] },

  { title: "NusaChat (Public Gen AI Service)",
    desc: "Layanan GenAI publik dengan pemrosesan gambar dan integrasi basis data, dirancang untuk skenario multi-tenant.",
    tags: ["Generative AI","Cloud","Backend"] },

  { title: "Freight Management System",
    desc: "Aplikasi desktop dan mobile untuk pengelolaan logistik dengan integrasi pelacakan dan laporan operasional.",
    tags: ["Full-stack","Logistics","Mobile"] },

  { title: "CyberGuard",
    desc: "Deteksi situs berbahaya berbasis machine learning dengan fokus pada fitur konten dan perilaku.",
    tags: ["Cybersecurity","ML"] }
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
        Terbuka untuk kolaborasi, konsultasi AI/ML, dan integrasi GenAI di lingkungan cloud.
        Saya mengutamakan desain yang dapat dioperasikan, terukur, dan aman.
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
          AI/ML Engineer yang fokus membangun sistem cerdas dari data hingga produksi.
        </h1>
        <p class="mt-4 max-w-3xl text-zinc-300">
          Latar belakang Software Development dan Cloud/DevOps membantu saya menjembatani algoritma, aplikasi, dan infrastruktur
          agar solusi AI dapat dioperasikan secara andal dan terukur.
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
    ${SectionContact()}
  `);
}

module.exports = (req, res) => {
  const html = home();
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.end(html);
};
