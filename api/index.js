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
  { 
    title: "AWS Certified Generative AI Developer", 
    issuer: "Amazon Web Services", 
    level: "Professional Level",
    year: "2024"
  },
  { 
    title: "AWS Certified AI Practitioner", 
    issuer: "Amazon Web Services", 
    level: "Foundational Level",
    year: "2024"
  },
  { 
    title: "Kubernetes and Cloud Native Associate", 
    issuer: "Cloud Native Computing Foundation", 
    level: "KCNA Certified",
    year: "2023"
  },
  { 
    title: "CompTIA Server+", 
    issuer: "CompTIA", 
    level: "Infrastructure Specialist",
    year: "2023"
  },
  { 
    title: "AWS Certified Cloud Practitioner", 
    issuer: "Amazon Web Services", 
    level: "Foundational Level",
    year: "2022"
  },
  { 
    title: "Azure Machine Learning Fundamental", 
    issuer: "Microsoft Azure", 
    level: "AI-900 Certified",
    year: "2022"
  }
];

const SKILLS = [
  { 
    category: "Artificial Intelligence & Machine Learning", 
    items: [
      "Large Language Models (LLMs)",
      "Computer Vision & Object Detection", 
      "Natural Language Processing",
      "Retrieval Augmented Generation (RAG)",
      "Model Deployment & MLOps"
    ] 
  },
  { 
    category: "Software Development", 
    items: [
      "Python & FastAPI",
      "Node.js & Express",
      "PostgreSQL & MongoDB",
      "REST API Design",
      "Full-Stack Development"
    ] 
  },
  { 
    category: "Cloud & DevOps", 
    items: [
      "AWS (Bedrock, SageMaker, Lambda)",
      "Docker & Kubernetes",
      "CI/CD Pipelines",
      "Infrastructure as Code",
      "Cloud Architecture"
    ] 
  }
];

const PROJECTS = [
  { 
    title: "IoT-Based Calorie Detection System", 
    desc: "Developed an intelligent IoT spoon using deep learning for real-time calorie estimation, integrated with a mobile application for nutritional tracking. Achieved 1st Runner-up at KMIPN IV National Competition in Batam.",
    tags: ["IoT", "Computer Vision", "Mobile Development", "Deep Learning"],
    highlight: "Award Winning"
  },
  { 
    title: "Customer Service Automation using AI", 
    desc: "Built an intelligent customer service automation platform leveraging AI to handle inquiries, route tickets, and provide instant responses. Implemented sentiment analysis and natural language understanding to improve customer satisfaction and reduce response time by 60%.",
    tags: ["AI", "NLP", "Automation", "Customer Service"],
    highlight: "Production"
  },
  { 
    title: "Planogram and Reimbursement for Insurance", 
    desc: "Developed an AI-powered system for insurance planogram optimization and automated reimbursement processing. Utilized computer vision for document verification and machine learning for fraud detection, streamlining the claims approval workflow.",
    tags: ["Computer Vision", "Insurance Tech", "Document AI", "Automation"],
    highlight: "Enterprise"
  },
  { 
    title: "Retail Planogram Intelligence Platform", 
    desc: "Built a Computer Vision solution on AWS using SageMaker and Bedrock to automatically detect shelf compliance and optimize product placement for retail operations.",
    tags: ["Computer Vision", "AWS SageMaker", "Retail Analytics"],
    highlight: "Production"
  },
  { 
    title: "Enterprise Chatbot Platform", 
    desc: "Architected a centralized chatbot system integrating HR, Finance, and IT services using AWS and OpenAI. Implemented RAG pipelines with access control and comprehensive observability.",
    tags: ["LLM", "AWS", "OpenAI", "RAG"],
    highlight: "Enterprise"
  },
  { 
    title: "Quality Control Automation System", 
    desc: "Automated manufacturing defect detection using AWS S3, Lambda, and SageMaker. Reduced inspection time by 70% while maintaining 95% accuracy in defect identification.",
    tags: ["Computer Vision", "AWS Lambda", "Automation"],
    highlight: "Production"
  },
  { 
    title: "AI-Powered Insurance Assistant", 
    desc: "Created a GenAI assistant for insurance claim verification and document summarization using AWS Bedrock and OpenAI API, streamlining the claims processing workflow.",
    tags: ["Generative AI", "AWS Bedrock", "Document Processing"],
    highlight: "Production"
  },
  { 
    title: "Fashion Behavior Intelligence", 
    desc: "Developed an AI system that learns user style preferences and generates personalized fashion insights using embeddings and Generative AI on AWS Bedrock and OpenAI.",
    tags: ["Generative AI", "Embeddings", "Personalization"],
    highlight: "Innovation"
  }
];

function page(body) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <title>${SITE.title}</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(40px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeInLeft {
      from { opacity: 0; transform: translateX(-40px); }
      to { opacity: 1; transform: translateX(0); }
    }
    @keyframes fadeInRight {
      from { opacity: 0; transform: translateX(40px); }
      to { opacity: 1; transform: translateX(0); }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(2deg); }
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
    @keyframes slideDown {
      from { opacity: 0; transform: translateY(-20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes scaleIn {
      from { opacity: 0; transform: scale(0.9); }
      to { opacity: 1; transform: scale(1); }
    }
    @keyframes shimmer {
      0% { background-position: -1000px 0; }
      100% { background-position: 1000px 0; }
    }
    
    .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
    .animate-fadeInLeft { animation: fadeInLeft 0.8s ease-out forwards; }
    .animate-fadeInRight { animation: fadeInRight 0.8s ease-out forwards; }
    .animate-float { animation: float 4s ease-in-out infinite; }
    .animate-pulse-slow { animation: pulse 3s ease-in-out infinite; }
    .animate-slideDown { animation: slideDown 0.6s ease-out forwards; }
    .animate-scaleIn { animation: scaleIn 0.6s ease-out forwards; }
    
    .card {
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      opacity: 0;
      transform: translateY(30px);
    }
    .card.visible {
      opacity: 1;
      transform: translateY(0);
    }
    .card:hover {
      transform: translateY(-10px) scale(1.02);
      box-shadow: 0 25px 50px -12px rgba(59, 130, 246, 0.4);
    }
    
    .shimmer {
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
      background-size: 1000px 100%;
      animation: shimmer 3s infinite;
    }
    
    .gradient-border {
      position: relative;
      background: linear-gradient(145deg, #1e293b, #0f172a);
    }
    .gradient-border::before {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: inherit;
      padding: 2px;
      background: linear-gradient(145deg, #3b82f6, #8b5cf6, #ec4899);
      -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      opacity: 0;
      transition: opacity 0.4s;
    }
    .gradient-border:hover::before {
      opacity: 1;
    }
  </style>
</head>
<body class="bg-slate-950 text-slate-100 min-h-screen overflow-x-hidden">
  <!-- Animated Background -->
  <div class="fixed inset-0 overflow-hidden pointer-events-none">
    <div class="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
    <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style="animation-delay: 1.5s;"></div>
    <div class="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse-slow" style="animation-delay: 3s;"></div>
  </div>

  <nav class="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800 animate-slideDown">
    <div class="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
      <a href="/" class="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
        Primafadhil Sulistyo
      </a>
      <div class="flex gap-8 text-sm font-medium">
        <a href="#about" class="text-slate-400 hover:text-blue-400 transition-colors duration-300">About</a>
        <a href="#skills" class="text-slate-400 hover:text-blue-400 transition-colors duration-300">Skills</a>
        <a href="#certifications" class="text-slate-400 hover:text-blue-400 transition-colors duration-300">Certifications</a>
        <a href="#projects" class="text-slate-400 hover:text-blue-400 transition-colors duration-300">Projects</a>
        <a href="#contact" class="text-slate-400 hover:text-blue-400 transition-colors duration-300">Contact</a>
      </div>
    </div>
  </nav>

  <main class="relative max-w-7xl mx-auto px-6">${body}</main>
  
  <footer class="relative text-center py-12 border-t border-slate-800 mt-20">
    <p class="text-slate-500">© ${new Date().getFullYear()} ${SITE.name}. All rights reserved.</p>
    <p class="text-slate-600 text-sm mt-2">Built with Node.js & Tailwind CSS</p>
  </footer>

  <script>
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 100);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.card').forEach(card => observer.observe(card));

    // Carousel functionality
    (function() {
      const track = document.getElementById('carousel-track');
      const prevBtn = document.getElementById('prev-btn');
      const nextBtn = document.getElementById('next-btn');
      const dots = document.querySelectorAll('[data-dot]');
      
      if (!track) return;
      
      let currentIndex = 0;
      const totalSlides = ${GALLERY.length};
      let autoplayTimer;

      function goToSlide(index) {
        currentIndex = (index + totalSlides) % totalSlides;
        track.style.transform = \`translateX(-\${currentIndex * 100}%)\`;
        
        dots.forEach((dot, i) => {
          if (i === currentIndex) {
            dot.classList.remove('bg-slate-600');
            dot.classList.add('bg-blue-400', 'scale-125');
          } else {
            dot.classList.remove('bg-blue-400', 'scale-125');
            dot.classList.add('bg-slate-600');
          }
        });
      }

      function startAutoplay() {
        stopAutoplay();
        autoplayTimer = setInterval(() => {
          goToSlide(currentIndex + 1);
        }, 5000);
      }

      function stopAutoplay() {
        if (autoplayTimer) {
          clearInterval(autoplayTimer);
        }
      }

      if (prevBtn) {
        prevBtn.addEventListener('click', () => {
          goToSlide(currentIndex - 1);
          startAutoplay();
        });
      }

      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          goToSlide(currentIndex + 1);
          startAutoplay();
        });
      }

      dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
          goToSlide(index);
          startAutoplay();
        });
      });

      goToSlide(0);
      startAutoplay();
    })();
  </script>
</body>
</html>`;
}

function CarouselSection() {
  const slides = GALLERY.map((item, i) => `
    <div class="min-w-full px-4">
      <div class="relative overflow-hidden rounded-3xl border-2 border-slate-800 shadow-2xl group">
        <img src="${item.src}" alt="${item.title}" class="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110">
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
        <div class="absolute bottom-0 left-0 right-0 p-8">
          <h3 class="text-2xl font-bold text-white mb-3">${item.title}</h3>
          <p class="text-slate-300 leading-relaxed">${item.caption}</p>
        </div>
      </div>
    </div>
  `).join('');

  const dots = GALLERY.map((_, i) => `
    <button data-dot="${i}" class="w-3 h-3 rounded-full bg-slate-600 hover:bg-blue-400 transition-all duration-300" aria-label="Go to slide ${i+1}"></button>
  `).join('');

  return `
    <section class="py-24">
      <div class="text-center mb-16 animate-fadeInUp">
        <h2 class="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Achievements & Highlights
        </h2>
        <p class="text-xl text-slate-400 max-w-2xl mx-auto">
          Key milestones and contributions in AI/ML development and cloud computing
        </p>
      </div>
      
      <div class="relative max-w-5xl mx-auto">
        <div class="overflow-hidden rounded-3xl">
          <div id="carousel-track" class="flex transition-transform duration-700 ease-out">
            ${slides}
          </div>
        </div>
        
        <button id="prev-btn" class="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-slate-900/90 backdrop-blur border-2 border-slate-700 rounded-full flex items-center justify-center text-white hover:bg-blue-500 hover:border-blue-400 transition-all duration-300 hover:scale-110 shadow-xl">
          <span class="text-2xl font-bold">‹</span>
        </button>
        
        <button id="next-btn" class="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-slate-900/90 backdrop-blur border-2 border-slate-700 rounded-full flex items-center justify-center text-white hover:bg-blue-500 hover:border-blue-400 transition-all duration-300 hover:scale-110 shadow-xl">
          <span class="text-2xl font-bold">›</span>
        </button>
        
        <div class="flex justify-center gap-3 mt-8">
          ${dots}
        </div>
      </div>
    </section>
  `;
}

function Hero() {
  return `
    <section id="about" class="py-24 grid md:grid-cols-2 gap-16 items-center">
      <div class="space-y-8 animate-fadeInLeft">
        <div class="inline-block px-5 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full text-sm font-medium text-blue-300 animate-scaleIn">
          Available for Opportunities
        </div>
        <h1 class="text-6xl md:text-7xl font-bold leading-tight">
          <span class="block text-slate-100">Hi, I'm</span>
          <span class="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Primafadhil
          </span>
        </h1>
        <p class="text-2xl text-slate-300 font-light leading-relaxed">
          AI/ML Software Engineer
        </p>
        <p class="text-lg text-slate-400 leading-relaxed max-w-xl">
          I specialize in building intelligent systems that bridge the gap between cutting-edge AI research and production-ready applications. 
          With expertise in Machine Learning, Cloud Architecture, and Full-Stack Development, I transform complex data challenges into scalable solutions.
        </p>
        <div class="flex gap-4 pt-4">
          <a href="#projects" class="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl font-semibold text-white shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105">
            View My Work
            <span class="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a href="#contact" class="px-8 py-4 border-2 border-slate-700 rounded-xl font-semibold hover:bg-slate-800 hover:border-blue-500 transition-all duration-300 hover:scale-105">
            Get In Touch
          </a>
        </div>
      </div>
      
      <div class="flex justify-center animate-fadeInRight">
        <div class="relative">
          <div class="absolute -inset-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
          <div class="relative">
            <img src="/profile.png" alt="${SITE.name}" 
                 class="w-80 h-80 rounded-3xl object-cover border-4 border-slate-800 shadow-2xl animate-float">
            <div class="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-500/20 to-purple-500/20 shimmer"></div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function SkillsSection() {
  const cards = SKILLS.map((skill, i) => `
    <div class="card gradient-border rounded-2xl p-8" style="animation-delay: ${i*0.15}s">
      <h3 class="text-2xl font-bold text-blue-400 mb-6">${skill.category}</h3>
      <ul class="space-y-3">
        ${skill.items.map(item => `
          <li class="flex items-start gap-3 text-slate-300">
            <span class="text-blue-400 mt-1">▹</span>
            <span>${item}</span>
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');
  
  return `
    <section id="skills" class="py-24">
      <div class="text-center mb-16 animate-fadeInUp">
        <h2 class="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Technical Expertise
        </h2>
        <p class="text-xl text-slate-400 max-w-2xl mx-auto">
          A comprehensive skill set spanning AI/ML, software development, and cloud infrastructure
        </p>
      </div>
      <div class="grid md:grid-cols-3 gap-8">${cards}</div>
    </section>
  `;
}

function CertificationsSection() {
  const cards = CERTIFICATIONS.map((cert, i) => `
    <div class="card gradient-border rounded-2xl p-8" style="animation-delay: ${i*0.1}s">
      <div class="flex items-start justify-between mb-4">
        <div class="px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-xs font-semibold text-blue-300">
          ${cert.year}
        </div>
      </div>
      <h3 class="text-xl font-bold text-slate-100 mb-3 leading-tight">${cert.title}</h3>
      <p class="text-slate-400 mb-2">${cert.issuer}</p>
      <p class="text-sm text-slate-500">${cert.level}</p>
    </div>
  `).join('');
  
  return `
    <section id="certifications" class="py-24">
      <div class="text-center mb-16 animate-fadeInUp">
        <h2 class="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Professional Certifications
        </h2>
        <p class="text-xl text-slate-400 max-w-2xl mx-auto">
          Industry-recognized credentials demonstrating expertise in AI, cloud computing, and infrastructure
        </p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">${cards}</div>
    </section>
  `;
}

function ProjectsSection() {
  const cards = PROJECTS.map((proj, i) => `
    <div class="card gradient-border rounded-2xl p-8" style="animation-delay: ${i*0.1}s">
      <div class="flex items-start justify-between mb-4">
        <span class="px-3 py-1 bg-purple-500/20 border border-purple-400/30 rounded-full text-xs font-semibold text-purple-300">
          ${proj.highlight}
        </span>
      </div>
      <h3 class="text-2xl font-bold text-slate-100 mb-4">${proj.title}</h3>
      <p class="text-slate-400 leading-relaxed mb-6">${proj.desc}</p>
      <div class="flex flex-wrap gap-2">
        ${proj.tags.map(tag => `
          <span class="px-3 py-1 bg-slate-800 border border-slate-700 rounded-lg text-xs text-slate-300">
            ${tag}
          </span>
        `).join('')}
      </div>
    </div>
  `).join('');
  
  return `
    <section id="projects" class="py-24">
      <div class="text-center mb-16 animate-fadeInUp">
        <h2 class="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p class="text-xl text-slate-400 max-w-2xl mx-auto">
          Real-world applications of AI/ML technologies solving complex business challenges
        </p>
      </div>
      <div class="grid md:grid-cols-2 gap-8">${cards}</div>
    </section>
  `;
}

function ContactSection() {
  return `
    <section id="contact" class="py-24">
      <div class="text-center mb-16 animate-fadeInUp">
        <h2 class="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Let's Connect
        </h2>
        <p class="text-xl text-slate-400 max-w-2xl mx-auto">
          Open for collaboration, consulting opportunities, and innovative AI/ML projects
        </p>
      </div>
      <div class="grid md:grid-cols-3 gap-8">
        <a href="mailto:${SITE.email}" class="card gradient-border rounded-2xl p-8 text-center group">
          <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
            ✉
          </div>
          <h3 class="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">Email</h3>
          <p class="text-slate-400 text-sm break-all">${SITE.email}</p>
        </a>
        <a href="${SITE.github}" target="_blank" class="card gradient-border rounded-2xl p-8 text-center group">
          <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
            &lt;/&gt;
          </div>
          <h3 class="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">GitHub</h3>
          <p class="text-slate-400 text-sm">View my open source contributions</p>
        </a>
        <a href="${SITE.linkedin}" target="_blank" class="card gradient-border rounded-2xl p-8 text-center group">
          <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pink-500 to-blue-500 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
            in
          </div>
          <h3 class="text-xl font-bold mb-3 group-hover:text-pink-400 transition-colors">LinkedIn</h3>
          <p class="text-slate-400 text-sm">Connect for professional opportunities</p>
        </a>
      </div>
    </section>
  `;
}

module.exports = (req, res) => {
  const html = page(
    Hero() + 
    CarouselSection() +
    SkillsSection() + 
    CertificationsSection() + 
    ProjectsSection() + 
    ContactSection()
  );
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.end(html);
};
