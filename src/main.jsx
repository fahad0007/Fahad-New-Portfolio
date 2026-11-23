import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X,
  Code2, Layers3, Smartphone, Braces, Sparkles, ExternalLink,
  MapPin, Download, ChevronRight
} from "lucide-react";
import "./styles.css";



const skills = [
  { title: "Frontend", items: ["React.js", "JavaScript (ES6+)", "Next.js", "TypeScript", "HTML5", "CSS3"] },
  { title: "React ecosystem", items: ["React Hooks", "Redux", "Context API", "React Router", "Reusable components"] },
  { title: "UI & integration", items: ["REST APIs", "Tailwind CSS", "Bootstrap", "Responsive design", "Loading & error states"] },
  { title: "Workflow", items: ["Git", "GitHub", "Debugging", "Cross-device testing"] }
];

const professionalProjects = [
  {
    number: "01", name: "Adiba Healthcare", type: "Healthcare · Doctor consultation",
    image: "/adiba.png",
    description: "A doctor–patient consultation platform with separate user journeys, appointment booking and consultation experiences.",
    points: ["Doctor and patient authentication flows", "Doctor profiles, availability and appointment management", "Doctor search and time-slot booking interfaces", "REST API integration, chat and video consultation functionality"],
    stack: ["React.js", "REST API", "Redux / Context API", "Responsive UI"],
    visual: "health"
  },
  {
    number: "02", name: "Apex Load", type: "Logistics platform",
    image: "/apex-loads.png",
    description: "Responsive frontend modules and interactive workflows designed to support logistics operations.",
    points: ["Reusable React interfaces and components", "REST API integration and frontend data flow", "Interactive features and responsive layouts"],
    stack: ["React.js", "JavaScript", "REST API", "CSS"],
    visual: "logistics"
  },
  {
    number: "03", name: "Agent CRM", type: "Multi-tenant SaaS",
    image: "/agent-crm.png",
    description: "A multi-tenant CRM experience built around reusable modules and maintainable frontend patterns.",
    points: ["Responsive frontend modules", "Reusable component development", "API integration, debugging and feature enhancements"],
    stack: ["React.js", "JavaScript", "REST API", "State management"],
    visual: "crm"
  },
  {
    number: "04", name: "Health Presso", type: "AI platform",
    image: "/health.png",
    description: "A responsive application interface focused on clear user interactions and reliable frontend states.",
    points: ["Responsive React interfaces", "Reusable components and API integration", "UI improvements and functional enhancements"],
    stack: ["React.js", "REST API", "JavaScript", "CSS"],
    visual: "ai"
  },
  {
    number: "05", name: "BBS College Website", type: "Education website",
    image: "/bbs.png",
    description: "An education website experience with responsive layouts and reusable interface elements.",
    points: ["Responsive website sections", "Reusable UI components", "Cross-device compatibility improvements"],
    stack: ["HTML5", "CSS3", "JavaScript", "Responsive design"],
    visual: "education"
  }
];

const personalProjects = [
  {
    name: "Zeel Sofa Website & Admin", category: "Personal · E-commerce",
    description: "A furniture website concept with an admin experience and Firebase-backed authentication/data workflows.",
    stack: ["React.js", "Firebase", "CSS"],
    label: "E-commerce concept",
    demo: "https://zeelsofa.vercel.app/",
    github: "https://github.com/fahad0007/Zeel-Sofa",
  },
 
  {
    name: "Netflix UI Clone", category: "Personal · Entertainment",
    description: "A streaming-platform inspired interface exploring movie discovery, poster grids and dynamic hero content.",
    stack: ["React.js", "TMDB API", "Axios"],
    label: "Movie discovery",
    demo: "https://netflix-clone-react-1.vercel.app/",
    github: "https://github.com/fahad0007/netflix-clone-react",
  },
   {
    name: "IronFordge Fitness Gym", category: "Personal · Fitness",
    description: "A responsive React + Vite gym/fitness website with reusable components and a dark editorial visual style with Theme costomize options.",
    stack: ["React.js",  "CSS"],
    label: "Fitness",
    demo: "https://ironfordge-fitness-gym.vercel.app/",
    github: "https://github.com/fahad0007/IronFordge-Fitness-Gym",
  },
  {
    name: "Vilocity Motors", category: "Personal · Automotomobile",
    description: "A responsive premium automotive showcase built with React + Vite. Includes category filters, search, sorting, saved cars, vehicle detail modals, and an enquiry flow.",
    stack: ["React.js"],
    label: "Automotive",
    demo: "https://vilocity-motors01.vercel.app/",
    github: "https://github.com/fahad0007/Vilocity-Motors",
  },
  {
    name: "Velvet & Roast", category: "Personal · Cafe",
    description: "A responsive cafe & restaurant landing page with a warm classic-modern visual style.",
    stack: ["React.js", "Responsive Design"],
    label: "responsive cafe & restaurant",
    demo: "https://velvet-and-roast.vercel.app/",
    github: "https://github.com/fahad0007/VELVET-ROAST",
  },
  {
    name: "GPS Camera & Gallery", category: "Personal · Utility",
    description: "A camera-focused app concept combining photo capture, location lookup and a locally stored gallery.",
    stack: ["React.js", "React Webcam", "Nominatim", "LocalStorage"],
    label: "Camera utility",
    demo: "https://fgps-cam.vercel.app/",
    github: "https://github.com/fahad0007/Gps-cam"
  },


  {
    name: "Fancy EVehicle", category: "Personal · Business",
    description: "A responsive product website concept with model, features, gallery, specifications, dealer and service sections.",
    stack: ["React.js", "CSS", "Framer Motion"],
    label: "Product website",
    demo: "https://fancy-ev.vercel.app/",
    github: "https://github.com/fahad0007/Fancy-E-Rickshaw",
  },
  {
    name: "Todo App", category: "Personal · Productivity",
    description: "A lightweight task manager with browser-based persistence for keeping everyday tasks organised.",
    stack: ["React.js", "LocalStorage", "CSS"],
    label: "Task manager",
    demo: "https://advance-todo-gamma.vercel.app",
    github: "https://github.com/fahad0007/AdvanceTodo"
  }
];


const skillIcons = {
  "React.js": "react/react-original.svg",

  JavaScript: "javascript/javascript-original.svg",
  JS: "javascript/javascript-original.svg",
  "JavaScript (ES6+)": "javascript/javascript-original.svg",

  "Next.js": "nextjs/nextjs-original.svg",
  TypeScript: "typescript/typescript-original.svg",

  "React Router": "reactrouter/reactrouter-original.svg",
  "React Hooks": "react/react-original.svg",

  HTML5: "html5/html5-original.svg",
  CSS3: "css3/css3-original.svg",

  Redux: "redux/redux-original.svg",
  "Context API": "react/react-original.svg",

  "Tailwind CSS": "tailwindcss/tailwindcss-original.svg",
  Bootstrap: "bootstrap/bootstrap-original.svg",

  Git: "git/git-original.svg",
  GitHub: "github/github-original.svg",
};






function WebsitePreview({ url, title }) {
  const [imageError, setImageError] = useState(false);

  const screenshotUrl = `https://s.wordpress.com/mshots/v1/${encodeURIComponent(
    url
  )}?w=1000`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="personal-preview"
      aria-label={`View ${title} website`}
    >
      {!imageError ? (
        <img
          src={screenshotUrl}
          alt={`${title} website preview`}
          className="personal-preview-image"
          loading="lazy"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="preview-placeholder">
          <span>&lt;/&gt;</span>
          <h4>{title}</h4>
          <p>View live website ↗</p>
        </div>
      )}

      <div className="preview-overlay">
        View Website ↗
      </div>
    </a>
  );
}



function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d", { alpha: true });
    if (!canvas || !ctx) return undefined;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const glyphs = "アカサタナハマヤラワ012345789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const fontSize = 15;
    let width = 0;
    let height = 0;
    let drops = [];
    let particles = [];
    let pointer = { x: -1000, y: -1000 };
    let frameId = 0;
    let lastFrame = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const columns = Math.ceil(width / fontSize);
      drops = Array.from({ length: columns }, () => Math.random() * -height / fontSize);
      const particleCount = Math.min(65, Math.max(24, Math.floor((width * height) / 18000)));
      particles = Array.from({ length: particleCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        radius: Math.random() * 1.4 + 0.5
      }));
    };

    const draw = (timestamp = 0) => {
      if (document.hidden) {
        frameId = 0;
        return;
      }
      if (timestamp - lastFrame < 40) {
        frameId = requestAnimationFrame(draw);
        return;
      }
      lastFrame = timestamp;

      ctx.fillStyle = "rgba(11, 13, 18, 0.12)";
      ctx.fillRect(0, 0, width, height);

      if (!reducedMotion) {
        ctx.font = `${fontSize}px "DM Mono", monospace`;
        drops.forEach((drop, index) => {
          const char = glyphs[Math.floor(Math.random() * glyphs.length)];
          const x = index * fontSize;
          const y = drop * fontSize;
          ctx.fillStyle = Math.random() > 0.975
            ? "rgba(141, 240, 204, 0.48)"
            : "rgba(74, 190, 157, 0.19)";
          ctx.fillText(char, x, y);
          if (y > height && Math.random() > 0.975) drops[index] = 0;
          drops[index] += 0.32 + Math.random() * 0.25;
        });
      }

      particles.forEach((particle, index) => {
        if (!reducedMotion) {
          particle.x += particle.vx;
          particle.y += particle.vy;
          if (particle.x < 0 || particle.x > width) particle.vx *= -1;
          if (particle.y < 0 || particle.y > height) particle.vy *= -1;
        }

        const dx = pointer.x - particle.x;
        const dy = pointer.y - particle.y;
        if (!reducedMotion && Math.hypot(dx, dy) < 110) {
          particle.x -= dx * 0.0007;
          particle.y -= dy * 0.0007;
        }

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(117, 224, 198, 0.38)";
        ctx.fill();

        for (let next = index + 1; next < particles.length; next++) {
          const other = particles[next];
          const distance = Math.hypot(other.x - particle.x, other.y - particle.y);
          if (distance < 105) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(101, 209, 183, ${0.10 * (1 - distance / 105)})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      });

      frameId = requestAnimationFrame(draw);
    };

    const handlePointer = (event) => {
      pointer = { x: event.clientX, y: event.clientY };
    };
    const clearPointer = () => {
      pointer = { x: -1000, y: -1000 };
    };
    const handleVisibility = () => {
      if (document.hidden) {
        if (frameId) cancelAnimationFrame(frameId);
        frameId = 0;
      } else if (!frameId) {
        lastFrame = 0;
        frameId = requestAnimationFrame(draw);
      }
    };

    resize();
    ctx.fillStyle = "#0b0d12";
    ctx.fillRect(0, 0, width, height);
    frameId = requestAnimationFrame(draw);

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointer, { passive: true });
    window.addEventListener("pointerleave", clearPointer);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointer);
      window.removeEventListener("pointerleave", clearPointer);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className="animated-background" aria-hidden="true" />;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Web app", "Utility", "Website"];
  const visibleProjects = personalProjects.filter((p) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Web app") return ["Entertainment", "Finance", "E-commerce"].some(x => p.category.includes(x));
    if (activeFilter === "Utility") return p.category.includes("Utility") || p.category.includes("Productivity");
    return p.category.includes("Portfolio") || p.category.includes("Business");
  });

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <AnimatedBackground />
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">F<span>.</span></span><span>FAHAD ANSARI</span></a>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {[["About", "#about"], ["Work", "#work"], ["Projects", "#personal"], ["Skills", "#skills"]].map(([label, href]) =>
            <a key={label} href={href} onClick={closeMenu}>{label}</a>
          )}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> AVAILABLE FOR THE NEXT OPPORTUNITY</div>
            <h1>Building digital<br /><span className="gradient-text">experiences</span> that<br />feel effortless.</h1>
            <p className="hero-intro">I'm <strong>Fahad Ahamad Ansari</strong> — a Frontend React Developer focused on building responsive, user-friendly web applications with clean, maintainable code.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <ArrowUpRight size={17} /></a>
              <a className="button button-ghost" href="/Fahad-Ahamad-Ansari-Resume.pdf" download>Download CV <Download size={16} /></a>
            </div>
            <div className="hero-meta">
              <span><MapPin size={14} /> Allahabad, Uttar Pradesh</span>
              <span className="meta-separator" />
              <span>2+ years of experience</span>
            </div>
          </div>
          <div className="hero-art" aria-label="Decorative frontend development illustration">
            <div className="orbit orbit-a" /><div className="orbit orbit-b" />
            <div className="hero-glow" />
            <div className="code-window">
              <div className="window-top"><div className="window-dots"><i /><i /><i /></div><span>fahad.dev / intro.jsx</span><span className="window-lock">⌘</span></div>
              <div className="code-content">
                <div className="code-line"><span className="line-no">01</span><span><b className="syntax-purple">const</b> <b className="syntax-blue">developer</b> = {"{"}</span></div>
                <div className="code-line indent"><span className="line-no">02</span><span><em>name</em>: <b className="syntax-green">"Fahad Ahamad Ansari"</b>,</span></div>
                <div className="code-line indent"><span className="line-no">03</span><span><em>role</em>: <b className="syntax-green">"React Developer"</b>,</span></div>
                <div className="code-line indent"><span className="line-no">04</span><span><em>experience</em>: <b className="syntax-orange">"2+ years"</b>,</span></div>
                <div className="code-line indent"><span className="line-no">05</span><span><em>focus</em>: [</span></div>
                <div className="code-line indent2"><span className="line-no">06</span><span><b className="syntax-green">"Great UI"</b>, <b className="syntax-green">"Clean code"</b>,</span></div>
                <div className="code-line indent2"><span className="line-no">07</span><span><b className="syntax-green">"Useful products"</b></span></div>
                <div className="code-line indent"><span className="line-no">08</span><span>]</span></div>
                <div className="code-line"><span className="line-no">09</span><span>{"}"}</span></div>
                <div className="code-line"><span className="line-no">10</span><span className="cursor-line"><b className="syntax-purple">export default</b> developer<span className="cursor" /></span></div>
              </div>
              <div className="window-footer"><span><span className="mini-green" /> JavaScript</span><span>UTF-8&nbsp;&nbsp; LF</span></div>
            </div>
            <div className="floating-chip chip-react"><span className="react-symbol">⚛</span> React.js</div>
            <div className="floating-chip chip-ts"><Braces size={16} /> TypeScript</div>
            <div className="floating-chip chip-ui"><Sparkles size={15} /> Thoughtful UI</div>
          </div>
          <a href="#about" className="scroll-cue"><span /> SCROLL TO EXPLORE</a>
        </section>

        <section className="intro-strip">
          <div className="strip-inner"><span>REACT DEVELOPMENT</span><b>✳</b><span>RESPONSIVE UI</span><b>✳</b><span>API INTEGRATION</span><b>✳</b><span>REUSABLE COMPONENTS</span><b>✳</b><span>PRODUCT THINKING</span></div>
        </section>

        <section className="section-wrap about-section" id="about">
          <div className="section-kicker">01 / ABOUT ME</div>
          <div className="about-grid">
            <div><h2>Good interfaces<br />start with <span className="gradient-text">good thinking.</span></h2></div>
            <div className="about-body">
              <p className="lead">I turn ideas and requirements into intuitive, responsive web experiences.</p>
              <p>With 2+ years of professional experience at CodeScriptors, I've contributed to products across healthcare, logistics, CRM, AI and education. My day-to-day work includes building reusable React components, integrating REST APIs, managing application state and solving frontend challenges.</p>
              <p>I care about the details that make an application feel right: clear interactions, consistent layouts, reliable states and code that's easy for a team to maintain.</p>
              <a className="text-link" href="#contact">More about working together <ArrowUpRight size={16} /></a>
            </div>
          </div>
          <div className="stats-row">
            <div className="stat"><strong>2<span>+</span></strong><small>Years of experience</small></div>
            <div className="stat"><strong>05</strong><small>Professional projects</small></div>
            <div className="stat"><strong>08</strong><small>Personal projects</small></div>
            <div className="stat"><strong>∞</strong><small>Curiosity to learn</small></div>
          </div>
        </section>

        <section className="work-section section-wrap" id="work">
          <div className="section-heading">
            <div><div className="section-kicker">02 / SELECTED WORK</div><h2>Projects with a<br /><span className="gradient-text">purpose.</span></h2></div>
            <p>Professional products I've contributed to — building frontend experiences, connecting APIs and bringing features to life.</p>
          </div>
          <div className="professional-list">
            {professionalProjects.map((project) => <article className="professional-card" key={project.number}>
              <div className={`project-visual ${project.visual}`}>
                <div className="visual-orbit" />

                <div className="project-image-wrapper">
                  <img
                    src={project.image}
                    alt={`${project.name} screenshot`}
                    className="project-image"
                    loading="lazy"
                  />
                </div>

                <span className="visual-index">
                  {project.number} / 05
                </span>
              </div>
              <div className="professional-info">
                <div className="project-meta"><span>{project.type}</span><span>PROFESSIONAL</span></div>
                <h3>{project.name}</h3><p>{project.description}</p>
                <ul>{project.points.map(point => <li key={point}><ChevronRight size={14} />{point}</li>)}</ul>
                <div className="tag-row">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
              </div>
            </article>)}
          </div>
        </section>

        <section className="personal-section section-wrap" id="personal">
          <div className="section-heading">
            <div><div className="section-kicker">03 / BEYOND THE DAY JOB</div><h2>Built out of<br /><span className="gradient-text">curiosity.</span></h2></div>
            <p>Personal builds and experiments where I explore ideas, learn new tools and sharpen my frontend skills.</p>
          </div>
          <div className="filter-row">{filters.map(f => <button key={f} className={activeFilter === f ? "filter active" : "filter"} onClick={() => setActiveFilter(f)}>{f}</button>)}</div>
          <div className="personal-grid">
            {visibleProjects.map((project, i) => (
              <article className="personal-card" key={project.name}>

                <div className={`personal-art art-${i % 6}`}>

                  {/* Automatic website screenshot */}
                  <WebsitePreview
                    url={project.demo}
                    title={project.name}
                  />

                  <span className="art-label">
                    {project.label}
                  </span>

                  <span className="art-number">
                    0{i + 1}
                  </span>

                </div>

                <div className="personal-card-body">

                  <div className="project-meta">
                    <span>{project.category}</span>
                    <span>PERSONAL</span>
                  </div>

                  <h3>{project.name}</h3>

                  <p>{project.description}</p>

                  <div className="tag-row">
                    {project.stack.map(tag => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="personal-project-links">

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="personal-demo-link"
                    >
                      Live Demo <ExternalLink size={14} />
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="personal-github-link"
                    >
                      GitHub <ExternalLink size={14} />
                    </a>

                  </div>

                </div>
              </article>
            ))}
          </div>
          <p className="project-note">Project descriptions are summaries of personal builds and learning projects.</p>
        </section>

        <section className="skills-section section-wrap" id="skills">
          <div className="section-heading">
            <div><div className="section-kicker">04 / TOOLKIT</div><h2>Tools of the<br /><span className="gradient-text">trade.</span></h2></div>
            <p>A practical frontend toolkit for building maintainable interfaces and delivering reliable user experiences.</p>
          </div>


          <div className="tech-showcase">
            {skills.map((group, i) => (
              <section className="tech-category" key={group.title}>
                <div className="tech-category-heading">
                  <span className="tech-category-number">0{i + 1}</span>
                  <h3>{group.title}</h3>
                  <span className="tech-category-line" />
                </div>

                <div className="tech-grid">
                  {group.items.map((item) => (
                    <div className="tech-item" key={item}>
                      
<div className="tech-icon">
  {skillIcons[item] ? (
    <img
      src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skillIcons[item]}`}
      alt={item}
      loading="lazy"
      onError={(e) => {
        e.currentTarget.style.display = "none";
        e.currentTarget.nextSibling.style.display = "flex";
      }}
    />
  ) : null}

  <span style={{ display: skillIcons[item] ? "none" : "flex" }}>
    {item.slice(0, 2).toUpperCase()}
  </span>
</div>

                      <span className="tech-name">{item}</span>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className="experience-section section-wrap">
          <div className="section-kicker">05 / EXPERIENCE & EDUCATION</div>
          <div className="timeline-grid">
            <div><h2>Where I've<br /><span className="gradient-text">grown.</span></h2></div>
            <div className="timeline">
              <div className="timeline-item"><span className="timeline-date">JUNE 2024 — PRESENT</span><h3>Frontend React Developer</h3><h4>CodeScriptors</h4><p>Building responsive interfaces, reusable React components and API-driven application features. Collaborating with teammates, debugging issues and improving frontend experiences.</p><span className="current-pill"><i /> CURRENT ROLE</span></div>
              <div className="timeline-item"><span className="timeline-date">MAY — DECEMBER 2023</span><h3>Frontend Development with React.js</h3><h4>KP Group of Institution / Vinu Education Group</h4><p>Completed a focused React.js frontend development course.</p></div>
              <div className="timeline-item education-item"><span className="timeline-date">2022 — 2024</span><h3>Master of Commerce (M.Com)</h3><h4>University of Allahabad</h4></div>
              <div className="timeline-item education-item"><span className="timeline-date">2019 — 2022</span><h3>Bachelor of Commerce (B.Com)</h3><h4>Allahabad State University</h4></div>
            </div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-card">
            <div className="contact-kicker"><span className="status-dot" /> OPEN TO NEW OPPORTUNITIES</div>
            <h2>Have a good idea?<br /><span className="gradient-text">Let's build it.</span></h2>
            <p>I'm interested in frontend opportunities where I can build useful products, solve meaningful problems and keep growing as a developer.</p>
            <a className="button button-primary contact-button" href="mailto:fahad.ansari.webdev@gmail.com">Start a conversation <ArrowUpRight size={17} /></a>
            <div className="contact-decoration">F.</div>
          </div>
          <div className="contact-details">
            <a href="mailto:fahad.ansari.webdev@gmail.com"><Mail size={17} /> fahad.ansari.webdev@gmail.com <ArrowUpRight size={15} /></a>
            <a href="tel:+918765440445">+91 87654 40445 <ArrowUpRight size={15} /></a>
            <a href="https://www.linkedin.com/in/fahad-ahamad-ansari-0403-f" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={15} /></a>
            <a href="https://fahad-webdev.vercel.app/" target="_blank" rel="noreferrer"><ExternalLink size={17} /> Existing portfolio <ArrowUpRight size={15} /></a>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand" href="#home"><span className="brand-mark">F<span>.</span></span><span>FAHAD ANSARI</span></a>
        <span>Designed & built with React.js <span className="footer-heart">✳</span></span>
        <span>© {new Date().getFullYear()} Fahad Ahamad Ansari</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App /></React.StrictMode>);