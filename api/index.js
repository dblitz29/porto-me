// ============================================================================
// Portfolio — Maximalism / Dopamine design system
// Content data is preserved; only the presentation layer is maximalist.
// ============================================================================

const SITE = {
  name: "Primafadhil Sulistyo",
  email: "primafadhil.sulistyo@gmail.com",
  github: "https://github.com/dblitz29",
  linkedin: "https://www.linkedin.com/in/primafadhil-sulistyo/",
  title: "Fadhil — AI/ML Software Developer"
};

const GALLERY = [
  {
    src: "/static/gallery/iot.jpg",
    title: "KMIPN IV IoT Competition",
    caption: "Achieved 1st Runner-up at KMIPN IV National Competition in Batam. Developed an innovative calorie-detection spoon using computer vision and deep learning, integrated with a companion mobile application for real-time nutritional tracking."
  },
  {
    src: "/static/gallery/aws.jpg",
    title: "AWS Generative AI Speaker",
    caption: "Invited as a key speaker at AWS Generative AI event in Surabaya 2025. Shared insights on end-to-end GenAI implementation patterns and best practices for deploying AI solutions on AWS infrastructure."
  },
  {
    src: "",
    title: "Datacenter Infrastructure",
    caption: "Contributed to datacenter racking and server setup operations at Datacomm. Gained hands-on experience in enterprise infrastructure deployment and production environment readiness."
  }
];

const CERTIFICATIONS = [
  { title: "AWS Certified Generative AI Developer", issuer: "Amazon Web Services", level: "Professional Level", year: "2024" },
  { title: "AWS Certified AI Practitioner", issuer: "Amazon Web Services", level: "Foundational Level", year: "2024" },
  { title: "Kubernetes and Cloud Native Associate", issuer: "Cloud Native Computing Foundation", level: "KCNA Certified", year: "2023" },
  { title: "CompTIA Server+", issuer: "CompTIA", level: "Infrastructure Specialist", year: "2023" },
  { title: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", level: "Foundational Level", year: "2022" },
  { title: "Azure Machine Learning Fundamental", issuer: "Microsoft Azure", level: "AI-900 Certified", year: "2022" }
];

const SKILLS = [
  {
    category: "AI & Machine Learning",
    items: ["Large Language Models (LLMs)", "Claude, GPT & Bedrock Models", "Computer Vision & Object Detection", "Natural Language Processing", "Retrieval Augmented Generation (RAG)", "Agentic AI & Tool Use", "Model Deployment & MLOps"]
  },
  {
    category: "Software Development",
    items: ["Python & FastAPI", "Node.js & Express", "Rust", "PostgreSQL & MongoDB", "REST API Design", "Full-Stack Development"]
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS (Bedrock, SageMaker, Lambda)", "Docker & Kubernetes", "CI/CD Pipelines", "Infrastructure as Code", "Cloud Architecture"]
  }
];

const PROJECTS = [
  { title: "IoT-Based Calorie Detection System", desc: "Developed an intelligent IoT spoon using deep learning for real-time calorie estimation, integrated with a mobile application for nutritional tracking. Achieved 1st Runner-up at KMIPN IV National Competition in Batam.", tags: ["IoT", "Computer Vision", "Mobile", "Deep Learning"], highlight: "Award Winning" },
  { title: "Customer Service Automation using AI", desc: "Built an intelligent customer service automation platform leveraging AI to handle inquiries, route tickets, and provide instant responses. Implemented sentiment analysis and natural language understanding to improve satisfaction and cut response time by 60%.", tags: ["AI", "NLP", "Automation", "Customer Service"], highlight: "Production" },
  { title: "Planogram & Reimbursement for Insurance", desc: "Developed an AI-powered system for insurance planogram optimization and automated reimbursement processing. Used computer vision for document verification and machine learning for fraud detection, streamlining the claims approval workflow.", tags: ["Computer Vision", "Insurance Tech", "Document AI", "Automation"], highlight: "Enterprise" },
  { title: "Retail Planogram Intelligence", desc: "Built a Computer Vision solution on AWS using SageMaker and Bedrock to automatically detect shelf compliance and optimize product placement for retail operations.", tags: ["Computer Vision", "AWS SageMaker", "Retail"], highlight: "Production" },
  { title: "Enterprise Chatbot Platform", desc: "Architected a centralized chatbot system integrating HR, Finance, and IT services using AWS and OpenAI. Implemented RAG pipelines with access control and comprehensive observability.", tags: ["LLM", "AWS", "OpenAI", "RAG"], highlight: "Enterprise" },
  { title: "Quality Control Automation", desc: "Automated manufacturing defect detection using AWS S3, Lambda, and SageMaker. Reduced inspection time by 70% while maintaining 95% accuracy in defect identification.", tags: ["Computer Vision", "AWS Lambda", "Automation"], highlight: "Production" },
  { title: "AI-Powered Insurance Assistant", desc: "Created a GenAI assistant for insurance claim verification and document summarization using AWS Bedrock and OpenAI API, streamlining the claims processing workflow.", tags: ["Generative AI", "AWS Bedrock", "Documents"], highlight: "Production" },
  { title: "Fashion Behavior Intelligence", desc: "Developed an AI system that learns user style preferences and generates personalized fashion insights using embeddings and Generative AI on AWS Bedrock and OpenAI.", tags: ["Generative AI", "Embeddings", "Personalization"], highlight: "Innovation" },
  { title: "AIOps Smart Health Monitoring", desc: "Built an AIOps observability platform integrated with Datadog for smart, real-time health monitoring. Correlates metrics, logs, and traces, then uses ML-driven anomaly detection to surface incidents early and reduce mean-time-to-resolution.", tags: ["AIOps", "Datadog", "Observability", "Anomaly Detection"], highlight: "Production" },
  { title: "Agentic Analytics for Vehicle Reimbursement", desc: "Designed an agentic analytics system for insurance vehicle reimbursement. Autonomous agents assess claims, verify damage evidence, and reason over policy rules to recommend accurate payouts while flagging edge cases for human review.", tags: ["Agentic AI", "Insurance", "Analytics", "LLM"], highlight: "Enterprise" },
  { title: "Real-Time Anti-Fraud Transaction Intelligence", desc: "Engineered a real-time anti-fraud model scoring transactions as they happen. Combines gradient-boosted models with behavioral features and streaming pipelines to catch fraudulent activity in milliseconds without hurting legitimate throughput.", tags: ["Fraud Detection", "Machine Learning", "Real-Time", "Streaming"], highlight: "Production" }
];

// ---------------------------------------------------------------------------
// Design tokens — the five rotating accents
// ---------------------------------------------------------------------------
const ACCENTS = [
  { hex: "#FF3AF2", light: false }, // magenta
  { hex: "#00F5D4", light: true },  // cyan
  { hex: "#FFE600", light: true },  // yellow
  { hex: "#FF6B35", light: false }, // orange
  { hex: "#7B2FFF", light: false }  // purple
];
const BG = "#0D0D1A";

const acc = (i) => ACCENTS[((i % ACCENTS.length) + ACCENTS.length) % ACCENTS.length];
// a clashing partner accent (two steps away in the wheel)
const clash = (i) => acc(i + 2);
// readable text color when sitting ON an accent fill
const onAccent = (a) => (a.light ? BG : "#FFFFFF");

// hard, stacked, offset shadow in two clashing accents
function hardShadow(i, o1 = 8, o2 = 16) {
  const a = acc(i), b = clash(i);
  return `${o1}px ${o1}px 0 ${a.hex}, ${o2}px ${o2}px 0 ${b.hex}`;
}

// ---------------------------------------------------------------------------
// Floating decorative shapes — scattered, absolute, animated (aria-hidden)
// ---------------------------------------------------------------------------
function floatingShapes(seed = 0) {
  const shapes = [
    { top: "8%",  left: "4%",  size: 46, anim: "animate-float",         shape: "star" },
    { top: "18%", left: "92%", size: 30, anim: "animate-float-reverse", shape: "circle" },
    { top: "70%", left: "6%",  size: 60, anim: "animate-spin-slow",     shape: "square" },
    { top: "52%", left: "88%", size: 38, anim: "animate-wiggle",        shape: "star" },
    { top: "86%", left: "48%", size: 26, anim: "animate-bounce-subtle", shape: "circle" },
    { top: "34%", left: "70%", size: 22, anim: "animate-float",         shape: "cross" }
  ];
  return `<div class="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">` +
    shapes.map((s, idx) => {
      const a = acc(seed + idx);
      const common = `position:absolute;top:${s.top};left:${s.left};width:${s.size}px;height:${s.size}px;`;
      if (s.shape === "circle") {
        return `<span class="${s.anim}" style="${common}border-radius:9999px;border:6px solid ${a.hex};"></span>`;
      }
      if (s.shape === "square") {
        return `<span class="${s.anim}" style="${common}border:6px solid ${a.hex};transform:rotate(12deg);"></span>`;
      }
      if (s.shape === "cross") {
        return `<span class="${s.anim}" style="${common}color:${a.hex};font-weight:900;font-size:${s.size}px;line-height:1;">+</span>`;
      }
      // star
      return `<svg class="${s.anim}" style="${common}" viewBox="0 0 24 24" fill="${a.hex}"><path d="M12 1l2.9 6.6L22 8.6l-5 4.9 1.3 7L12 17.8 5.7 20.5 7 13.5l-5-4.9 7.1-1z"/></svg>`;
    }).join("") +
    `</div>`;
}

// Oversized background word bleeding behind a section
function ghostWord(word, i) {
  return `<span aria-hidden="true" class="ghost-word" style="color:${acc(i).hex};">${word}</span>`;
}

// ---------------------------------------------------------------------------
// Page shell
// ---------------------------------------------------------------------------
function page(body) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>${SITE.title}</title>
<meta name="description" content="${SITE.name} — AI/ML Software Developer building intelligent systems from data to production."/>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@600;800;900&family=Outfit:wght@500;700;800;900&family=DM+Sans:wght@400;500;700&family=Bungee&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"></script>
<style>
  :root { --bg:${BG}; }
  html { scroll-behavior:smooth; }
  body {
    background:${BG};
    color:#fff;
    font-family:"DM Sans",system-ui,sans-serif;
    overflow-x:hidden;
  }
  h1,h2,h3,.font-head { font-family:"Unbounded","Outfit",system-ui,sans-serif; }
  .font-display { font-family:"Bungee",system-ui,sans-serif; }

  /* ---- Global layered patterns (dots + diagonal stripes) ---- */
  body::before, body::after {
    content:""; position:fixed; inset:0; pointer-events:none; z-index:0;
  }
  body::before {
    background-image: radial-gradient(circle, rgba(255,58,242,0.20) 1.5px, transparent 1.5px);
    background-size: 34px 34px;
    opacity:0.5;
  }
  body::after {
    background-image: repeating-linear-gradient(45deg, transparent, transparent 14px, rgba(0,245,212,0.06) 14px, rgba(0,245,212,0.06) 28px);
  }
  /* radial mesh glow blobs */
  .mesh {
    position:fixed; inset:-10%; z-index:0; pointer-events:none;
    background:
      radial-gradient(ellipse at 18% 22%, rgba(255,58,242,0.18) 0%, transparent 45%),
      radial-gradient(ellipse at 82% 30%, rgba(0,245,212,0.16) 0%, transparent 45%),
      radial-gradient(ellipse at 50% 88%, rgba(123,47,255,0.18) 0%, transparent 50%),
      radial-gradient(ellipse at 70% 65%, rgba(255,230,0,0.10) 0%, transparent 45%);
    animation:drift 20s ease-in-out infinite;
    will-change:transform;
  }

  /* ---- Text shadow stacks ---- */
  .ts-1 { text-shadow: 2px 2px 0 #7B2FFF; }
  .ts-2 { text-shadow: 2px 2px 0 #7B2FFF, 4px 4px 0 #FF3AF2; }
  .ts-3 { text-shadow: 3px 3px 0 #7B2FFF, 6px 6px 0 #FF3AF2, 9px 9px 0 #00F5D4; }
  .ts-mega { text-shadow: 4px 4px 0 #7B2FFF, 8px 8px 0 #FF3AF2, 12px 12px 0 #00F5D4; }

  /* ---- Animated gradient text ---- */
  .grad-text {
    background:linear-gradient(90deg,#FF3AF2,#00F5D4,#FFE600,#FF6B35,#FF3AF2);
    background-size:300% 100%;
    -webkit-background-clip:text; background-clip:text;
    -webkit-text-fill-color:transparent;
    animation:gradient-shift 5s ease infinite;
  }

  /* ---- Oversized ghost word ---- */
  .ghost-word {
    position:absolute; left:50%; top:50%; transform:translate(-50%,-50%);
    font-family:"Bungee",sans-serif; font-size:clamp(7rem,22vw,20rem);
    opacity:0.07; white-space:nowrap; z-index:0; pointer-events:none; user-select:none;
    letter-spacing:-0.03em;
  }

  /* ---- Reveal on scroll ---- */
  .reveal { opacity:0; transform:translateY(36px); transition:opacity .6s ease-out, transform .6s cubic-bezier(0.68,-0.55,0.265,1.55); }
  .reveal.visible { opacity:1; transform:translateY(0); }

  /* ---- Keyframes ---- */
  @keyframes float { 0%,100%{transform:translateY(0) rotate(0)} 50%{transform:translateY(-20px) rotate(5deg)} }
  @keyframes float-reverse { 0%,100%{transform:translateY(0) rotate(0)} 50%{transform:translateY(20px) rotate(-5deg)} }
  @keyframes spin-slow { from{transform:rotate(0)} to{transform:rotate(360deg)} }
  @keyframes wiggle { 0%,100%{transform:rotate(-8deg)} 50%{transform:rotate(8deg)} }
  @keyframes bounce-subtle { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
  @keyframes gradient-shift { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
  @keyframes pulse-glow {
    0%,100%{ box-shadow:0 0 22px rgba(255,58,242,0.55); }
    50%{ box-shadow:0 0 44px rgba(255,58,242,0.85), 0 0 70px rgba(0,245,212,0.5); }
  }
  @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
  @keyframes marquee-rev { from{transform:translateX(-50%)} to{transform:translateX(0)} }
  @keyframes drift {
    0%,100%{ transform:translate(0,0) scale(1); }
    33%{ transform:translate(3%,-2%) scale(1.05); }
    66%{ transform:translate(-2%,2%) scale(0.97); }
  }
  @keyframes tilt-bob { 0%,100%{transform:rotate(-2deg) translateY(0)} 50%{transform:rotate(2deg) translateY(-8px)} }
  .animate-float{animation:float 6s ease-in-out infinite;will-change:transform;}
  .animate-float-reverse{animation:float-reverse 5s ease-in-out infinite;will-change:transform;}
  .animate-spin-slow{animation:spin-slow 20s linear infinite;will-change:transform;}
  .animate-wiggle{animation:wiggle 1.4s ease-in-out infinite;will-change:transform;}
  .animate-bounce-subtle{animation:bounce-subtle 2.2s ease-in-out infinite;will-change:transform;}
  .animate-pulse-glow{animation:pulse-glow 2.2s ease-in-out infinite;}

  /* ---- Moving marquee ticker ---- */
  .marquee { overflow:hidden; white-space:nowrap; }
  .marquee-track { display:inline-flex; align-items:center; gap:1rem; padding-right:1rem; animation:marquee 26s linear infinite; will-change:transform; }
  .marquee-track.rev { animation:marquee-rev 32s linear infinite; }
  .marquee:hover .marquee-track { animation-play-state:paused; }
  .marquee-item { display:inline-flex; align-items:center; gap:.6rem; font-weight:800; text-transform:uppercase; letter-spacing:.12em; font-size:.9rem; padding:.5rem 1.1rem; border-radius:9999px; }

  /* ---- Card hover lift ---- */
  .max-card { transition:transform .3s cubic-bezier(0.68,-0.55,0.265,1.55), box-shadow .3s ease; }
  .max-card:hover { transform:translatey(-10px) rotate(-1deg) scale(1.02); }

  /* ---- Reduced motion ---- */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after { animation-duration:0.01ms !important; animation-iteration-count:1 !important; transition-duration:0.15s !important; }
    html { scroll-behavior:auto; }
  }
</style>
</head>
<body>
  <div class="mesh"></div>

  <!-- NAV -->
  <nav class="sticky top-0 z-50 backdrop-blur-md" style="background:rgba(13,13,26,0.72);border-bottom:4px solid #FF3AF2;">
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <a href="#top" class="font-display text-xl md:text-2xl grad-text uppercase tracking-tight">Fadhil</a>
      <div class="hidden md:flex gap-7 text-sm font-bold uppercase tracking-widest">
        <a href="#work" class="hover:text-[#00F5D4] transition-colors">Work</a>
        <a href="#skills" class="hover:text-[#FFE600] transition-colors">Skills</a>
        <a href="#certs" class="hover:text-[#FF6B35] transition-colors">Certs</a>
        <a href="#projects" class="hover:text-[#7B2FFF] transition-colors">Projects</a>
        <a href="#contact" class="hover:text-[#FF3AF2] transition-colors">Contact</a>
      </div>
      <a href="#contact" class="md:hidden font-black uppercase text-xs px-4 py-2 rounded-full" style="background:#FFE600;color:${BG};border:3px solid #FF3AF2;">Say hi</a>
    </div>
  </nav>

  <main id="top" class="relative z-10 max-w-7xl mx-auto px-6">${body}</main>

  <!-- FOOTER -->
  <footer class="relative z-10 mt-24 py-14 text-center" style="border-top:8px solid #7B2FFF;">
    <p class="font-display text-2xl grad-text uppercase mb-2">${SITE.name}</p>
    <p class="text-white/60 text-sm uppercase tracking-widest">Built with Node.js &amp; Tailwind — More is more.</p>
    <p class="text-white/30 text-xs mt-3">&copy; ${new Date().getFullYear()} — All rights reserved.</p>
  </footer>

  <script>
    (function(){
      var io = new IntersectionObserver(function(entries){
        entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('visible'); } });
      }, { threshold: 0.12 });
      document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });
    })();
  </script>
  ${CAROUSEL_SCRIPT}
</body>
</html>`;
}

// ---------------------------------------------------------------------------
// HERO
// ---------------------------------------------------------------------------
function Hero() {
  return `
  <section class="relative py-20 md:py-28">
    ${ghostWord("BUILD", 4)}
    ${floatingShapes(0)}
    <div class="relative z-10 grid md:grid-cols-[1.15fr_.85fr] gap-14 items-center">
      <div>
        <div class="inline-block mb-6 px-5 py-2 rounded-full font-bold uppercase tracking-widest text-xs animate-wiggle"
             style="background:#00F5D4;color:${BG};border:4px solid #FF3AF2;box-shadow:${hardShadow(3,4,8)};">
          Available for opportunities
        </div>
        <h1 class="font-head font-black uppercase leading-none tracking-tighter mb-6"
            style="font-size:clamp(3rem,9vw,7rem);">
          <span class="block text-white ts-2">Hi, I'm</span>
          <span class="block grad-text">Fadhil</span>
        </h1>
        <p class="font-display text-xl md:text-2xl uppercase tracking-wide mb-6" style="color:#FFE600;">
          AI / ML Software Developer
        </p>
        <p class="text-lg md:text-xl text-white/85 leading-relaxed max-w-xl mb-9">
          I build intelligent systems that go all the way from raw data to production. Machine learning,
          cloud architecture, and full-stack engineering, wired together into things that actually ship.
        </p>
        <div class="flex flex-wrap gap-5">
          <a href="#projects" class="group font-black uppercase tracking-widest text-sm px-10 h-14 inline-flex items-center rounded-full text-white animate-pulse-glow transition-transform hover:scale-110 active:scale-95"
             style="background:linear-gradient(90deg,#FF3AF2,#7B2FFF,#00F5D4);border:4px solid #FFE600;">
            See my work <span class="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
          </a>
          <a href="#contact" class="font-black uppercase tracking-widest text-sm px-10 h-14 inline-flex items-center rounded-full transition-all hover:scale-105"
             style="background:transparent;border:4px dashed #00F5D4;color:#00F5D4;">
            Get in touch
          </a>
        </div>
      </div>

      <div class="flex justify-center md:justify-end">
        <div class="relative">
          <div class="absolute -inset-6 rounded-[2rem] animate-spin-slow" style="background:conic-gradient(from 0deg,#FF3AF2,#00F5D4,#FFE600,#FF6B35,#7B2FFF,#FF3AF2);opacity:0.55;filter:blur(22px);"></div>
          <img src="/profile.png" alt="Portrait of ${SITE.name}"
               class="relative w-72 h-80 md:w-80 md:h-96 object-cover animate-float"
               style="border:8px solid #FFE600;border-radius:1.5rem;box-shadow:${hardShadow(0,12,24)};"/>
          <div class="absolute -bottom-5 -left-5 font-black uppercase text-xs px-4 py-2 rounded-full animate-bounce-subtle"
               style="background:#FF6B35;color:${BG};border:4px solid #00F5D4;box-shadow:${hardShadow(2,4,8)};">3+ yrs</div>
          <div class="absolute -top-5 -right-5 font-black uppercase text-xs px-4 py-2 rounded-full animate-wiggle"
               style="background:#7B2FFF;color:#fff;border:4px solid #FFE600;box-shadow:${hardShadow(1,4,8)};">AI / ML</div>
        </div>
      </div>
    </div>
  </section>`;
}

// ---------------------------------------------------------------------------
// Section heading helper
// ---------------------------------------------------------------------------
function heading(kicker, title, i) {
  const a = acc(i);
  return `
  <div class="reveal text-center mb-16">
    <span class="inline-block font-bold uppercase tracking-[0.3em] text-xs mb-4 px-4 py-1.5 rounded-full"
          style="color:${BG};background:${a.hex};border:3px solid ${clash(i).hex};">${kicker}</span>
    <h2 class="font-head font-black uppercase tracking-tighter ts-3" style="font-size:clamp(2.5rem,6vw,4.5rem);">${title}</h2>
  </div>`;
}

// ---------------------------------------------------------------------------
// MARQUEE — moving ticker of stack + daily tools (Kiro, Claude Code, ...)
// ---------------------------------------------------------------------------
function Marquee() {
  const items = [
    "Python", "Rust", "Node.js", "AWS Bedrock", "SageMaker", "Docker", "Kubernetes",
    "PostgreSQL", "Claude", "OpenAI", "RAG", "Computer Vision", "Datadog", "FastAPI", "PyTorch"
  ];
  const tools = ["Kiro", "Claude Code", "Cursor", "VS Code", "Git"]; // daily code assistants / tools
  const chip = (t, i, isTool) => {
    const a = acc(i);
    return `<span class="marquee-item" style="${isTool
      ? `background:transparent;border:2px dashed ${a.hex};color:${a.hex};`
      : `background:${a.hex};color:${onAccent(a)};border:2px solid ${clash(i).hex};`}">${isTool ? "&#9670; " : ""}${t}</span>`;
  };
  // one full sequence (tech chips + a small "toolkit" run), duplicated for seamless loop
  const seq =
    items.map((t, i) => chip(t, i, false)).join("") +
    `<span class="marquee-item" style="background:transparent;color:#ffffff;opacity:.55;border:none;letter-spacing:.25em;">Daily toolkit &rarr;</span>` +
    tools.map((t, i) => chip(t, i + 2, true)).join("");
  return `
  <section class="relative py-6" aria-hidden="true">
    <div class="marquee py-4" style="border-top:4px solid #FF3AF2;border-bottom:4px solid #00F5D4;background:rgba(45,27,78,0.35);">
      <div class="marquee-track">${seq}${seq}</div>
    </div>
  </section>`;
}

// ---------------------------------------------------------------------------
// CAROUSEL — Achievements
// ---------------------------------------------------------------------------
function Carousel() {
  const slides = GALLERY.map((g, i) => {
    const a = acc(i);
    const media = g.src
      ? `<img src="${g.src}" alt="${g.title}" class="w-full h-[26rem] md:h-[36rem] object-cover"/>`
      : `<div class="w-full h-[26rem] md:h-[36rem] flex items-center justify-center font-display uppercase text-4xl md:text-5xl text-center px-8"
             style="background:linear-gradient(135deg,${a.hex},${clash(i).hex});color:${BG};">${g.title}</div>`;
    return `
      <div class="min-w-full px-3">
        <div class="relative overflow-hidden max-card" style="border:8px solid ${a.hex};border-radius:1.5rem;box-shadow:${hardShadow(i,10,20)};">
          ${media}
          <div class="absolute inset-0" style="background:linear-gradient(to top, ${BG} 8%, rgba(13,13,26,0.35) 55%, transparent 100%);"></div>
          <div class="absolute bottom-0 left-0 right-0 p-7 md:p-9">
            <span class="inline-block mb-3 font-bold uppercase tracking-widest text-xs px-3 py-1 rounded-full"
                  style="background:${clash(i).hex};color:${onAccent(clash(i))};">Highlight</span>
            <h3 class="font-head font-black uppercase text-2xl md:text-3xl mb-3 ts-1">${g.title}</h3>
            <p class="text-white/80 leading-relaxed max-w-3xl">${g.caption}</p>
          </div>
        </div>
      </div>`;
  }).join("");

  const dots = GALLERY.map((_, i) =>
    `<button data-dot="${i}" aria-label="Go to slide ${i + 1}" class="w-4 h-4 rounded-full transition-all" style="background:#2D1B4E;border:3px solid ${acc(i).hex};"></button>`
  ).join("");

  return `
  <section id="work" class="relative py-24">
    ${ghostWord("WOW", 1)}
    ${heading("Milestones", "Achievements", 0)}
    <div class="reveal relative max-w-6xl mx-auto">
      <div class="overflow-hidden rounded-3xl">
        <div id="carousel-track" class="flex transition-transform duration-700 ease-out">${slides}</div>
      </div>
      <button id="c-prev" aria-label="Previous slide" class="absolute -left-3 md:-left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full font-black text-2xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
              style="background:#FFE600;color:${BG};border:4px solid #FF3AF2;box-shadow:${hardShadow(0,4,8)};">&lsaquo;</button>
      <button id="c-next" aria-label="Next slide" class="absolute -right-3 md:-right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full font-black text-2xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
              style="background:#00F5D4;color:${BG};border:4px solid #7B2FFF;box-shadow:${hardShadow(4,4,8)};">&rsaquo;</button>
      <div class="flex justify-center gap-4 mt-8">${dots}</div>
    </div>
  </section>`;
}

const CAROUSEL_SCRIPT = `<script>
  (function(){
    var track = document.getElementById('carousel-track');
    if(!track) return;
    var dots = Array.prototype.slice.call(document.querySelectorAll('[data-dot]'));
    var prev = document.getElementById('c-prev');
    var next = document.getElementById('c-next');
    var total = ${GALLERY.length};
    var i = 0, timer;
    function go(n){
      i = (n % total + total) % total;
      track.style.transform = 'translateX(-' + (i*100) + '%)';
      dots.forEach(function(d, idx){
        d.style.transform = idx === i ? 'scale(1.4)' : 'scale(1)';
        d.style.background = idx === i ? (d.style.borderColor || '#FF3AF2') : '#2D1B4E';
      });
    }
    function auto(){ clearInterval(timer); timer = setInterval(function(){ go(i+1); }, 5000); }
    if(prev) prev.addEventListener('click', function(){ go(i-1); auto(); });
    if(next) next.addEventListener('click', function(){ go(i+1); auto(); });
    dots.forEach(function(d, idx){ d.addEventListener('click', function(){ go(idx); auto(); }); });
    go(0); auto();
  })();
</script>`;

// ---------------------------------------------------------------------------
// SKILLS — broken grid, rotating accents
// ---------------------------------------------------------------------------
function SkillsSection() {
  const cards = SKILLS.map((s, i) => {
    const a = acc(i), b = clash(i);
    const offset = i % 2 === 1 ? "md:translate-y-10" : "";
    const rot = i % 2 === 0 ? "rotate-1" : "-rotate-1";
    return `
      <div class="reveal max-card ${offset} ${rot} p-8 backdrop-blur-sm"
           style="background:rgba(45,27,78,0.8);border:4px solid ${a.hex};border-radius:1.5rem;box-shadow:${hardShadow(i,8,16)};">
        <h3 class="font-head font-black uppercase text-2xl mb-6 ts-1" style="color:${a.hex};">${s.category}</h3>
        <ul class="space-y-3">
          ${s.items.map((it, k) => `
            <li class="flex items-start gap-3 text-white/90 font-medium">
              <span class="font-black" style="color:${acc(i + k + 1).hex};">&#9656;</span>
              <span>${it}</span>
            </li>`).join("")}
        </ul>
      </div>`;
  }).join("");
  return `
  <section id="skills" class="relative py-24">
    ${ghostWord("SKILLS", 2)}
    ${floatingShapes(3)}
    ${heading("What I do", "Technical", 2)}
    <div class="grid md:grid-cols-3 gap-8 items-start">${cards}</div>
  </section>`;
}

// ---------------------------------------------------------------------------
// CERTIFICATIONS
// ---------------------------------------------------------------------------
function CertificationsSection() {
  const cards = CERTIFICATIONS.map((c, i) => {
    const a = acc(i), b = clash(i);
    const borderStyle = i % 3 === 1 ? "dashed" : "solid";
    const rot = i % 2 === 0 ? "-rotate-1" : "rotate-1";
    return `
      <div class="reveal max-card ${rot} p-8 backdrop-blur-sm"
           style="background:rgba(45,27,78,0.8);border:4px ${borderStyle} ${a.hex};border-radius:1.5rem;box-shadow:${hardShadow(i,8,16)};">
        <div class="flex items-center justify-between mb-5">
          <span class="font-display text-lg" style="color:${a.hex};">${c.year}</span>
          <span class="w-12 h-12 rounded-full flex items-center justify-center font-black text-xl animate-wiggle"
                style="background:${a.hex};color:${onAccent(a)};border:3px solid ${b.hex};">&#10022;</span>
        </div>
        <h3 class="font-head font-black uppercase text-xl leading-tight mb-3 text-white">${c.title}</h3>
        <p class="text-white/70 font-medium">${c.issuer}</p>
        <p class="text-sm mt-2 font-bold uppercase tracking-widest" style="color:${b.hex};">${c.level}</p>
      </div>`;
  }).join("");
  return `
  <section id="certs" class="relative py-24">
    ${ghostWord("PROOF", 3)}
    ${heading("Credentials", "Certifications", 3)}
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">${cards}</div>
  </section>`;
}

// ---------------------------------------------------------------------------
// PROJECTS
// ---------------------------------------------------------------------------
function ProjectsSection() {
  const cards = PROJECTS.map((p, i) => {
    const a = acc(i), b = clash(i);
    const offset = i % 2 === 1 ? "md:translate-y-12" : "";
    const rot = i % 3 === 0 ? "rotate-1" : (i % 3 === 1 ? "-rotate-1" : "rotate-0");
    return `
      <div class="reveal max-card ${offset} ${rot} p-8 backdrop-blur-sm"
           style="background:rgba(45,27,78,0.82);border:4px solid ${a.hex};border-radius:1.5rem;box-shadow:${hardShadow(i,8,16)};">
        <span class="inline-block mb-4 font-bold uppercase tracking-widest text-xs px-3 py-1.5 rounded-full"
              style="background:${b.hex};color:${onAccent(b)};">${p.highlight}</span>
        <h3 class="font-head font-black uppercase text-2xl mb-4 ts-1 text-white">${p.title}</h3>
        <p class="text-white/80 leading-relaxed mb-6">${p.desc}</p>
        <div class="flex flex-wrap gap-2">
          ${p.tags.map((t, k) => `<span class="text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full"
             style="background:transparent;border:2px solid ${acc(i + k).hex};color:${acc(i + k).hex};">${t}</span>`).join("")}
        </div>
      </div>`;
  }).join("");
  return `
  <section id="projects" class="relative py-24">
    ${ghostWord("SHIP", 0)}
    ${floatingShapes(1)}
    ${heading("Selected work", "Featured Projects", 4)}
    <div class="grid md:grid-cols-2 gap-8 items-start">${cards}</div>
  </section>`;
}

// ---------------------------------------------------------------------------
// CONTACT
// ---------------------------------------------------------------------------
function ContactSection() {
  const links = [
    { href: `mailto:${SITE.email}`, label: "Email", sub: SITE.email, glyph: "@" },
    { href: SITE.github, label: "GitHub", sub: "Open-source & experiments", glyph: "&lt;/&gt;" },
    { href: SITE.linkedin, label: "LinkedIn", sub: "Let's connect professionally", glyph: "in" }
  ];
  const cards = links.map((l, i) => {
    const a = acc(i + 1), b = clash(i + 1);
    const rot = i % 2 === 0 ? "rotate-1" : "-rotate-1";
    return `
      <a href="${l.href}" ${l.href.startsWith("http") ? 'target="_blank" rel="noopener"' : ""}
         class="reveal max-card ${rot} block p-8 text-center backdrop-blur-sm"
         style="background:rgba(45,27,78,0.82);border:4px solid ${a.hex};border-radius:1.5rem;box-shadow:${hardShadow(i + 1,8,16)};">
        <span class="mx-auto mb-5 w-16 h-16 rounded-2xl flex items-center justify-center font-display text-2xl animate-bounce-subtle"
              style="background:${a.hex};color:${onAccent(a)};border:4px solid ${b.hex};">${l.glyph}</span>
        <h3 class="font-head font-black uppercase text-xl mb-2 text-white">${l.label}</h3>
        <p class="text-white/70 text-sm break-words">${l.sub}</p>
      </a>`;
  }).join("");
  return `
  <section id="contact" class="relative py-24">
    ${ghostWord("HELLO", 4)}
    ${floatingShapes(2)}
    ${heading("Say hi", "Let's Build Together", 0)}
    <div class="relative z-10 grid md:grid-cols-3 gap-8">${cards}</div>
    <p class="reveal relative z-10 mt-10 text-center text-white/70 max-w-2xl mx-auto text-lg">
      Open for collaboration, AI/ML consulting, and GenAI integrations in the cloud, with a focus on
      reliability and scale.
    </p>
  </section>`;
}

// ---------------------------------------------------------------------------
// Render
// ---------------------------------------------------------------------------
module.exports = (req, res) => {
  const html = page(
    Hero() +
    Marquee() +
    Carousel() +
    SkillsSection() +
    CertificationsSection() +
    ProjectsSection() +
    ContactSection()
  );
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.end(html);
};
