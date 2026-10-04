import { motion, Variants } from "framer-motion";
import {
    ArrowUpRight,
    Download,
    GitBranch,
    Link2,
    Mail,
    Moon,
    Sun,
    Code2,
    Database,
    Server,
    Shield,
    Container,
    BotMessageSquare,
    VectorPolygon,
    Package,
    Menu,
    X,
    Globe,
    Terminal,
    Cloud,
    Cpu,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import {
    personalInfo,
    skills,
    tech,
    notes,
    repos,
    experiences,
} from "./data/content";
import { projects } from "./data/projects";

const fade: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut" as const
    },
  },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

function App() {
    const [dark, setDark] = useState(true);
    const [menu, setMenu] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const sectionIds = ["home", "projects", "engineering", "about"];

    useEffect(() => {
        const sections = sectionIds
            .map((id) => document.getElementById(id))
            .filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.25 },
        );

        sections.forEach((sec) => {
            if (sec) observer.observe(sec);
        });

        return () => {
            sections.forEach((sec) => {
                if (sec) observer.unobserve(sec);
            });
        };
    }, []);

    const scroll = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setMenu(false);
    };

    const icons = [
        Code2,
        Server,
        Database,
        Container,
        BotMessageSquare,
        VectorPolygon,
        Shield,
        Package,
    ];

    return (
        <div className={dark ? "app dark" : "app light"}>
            <header className="nav">
                <div className="brand">
                    <img
                        src="https://avatars.githubusercontent.com/u/52451858"
                        alt="Om Prakash Sharma"
                        style={{
                            width: "32px",
                            height: "32px",
                            borderRadius: "50%",
                            objectFit: "cover",
                            border: "1px solid var(--line)",
                        }}
                    />
                    <b>{personalInfo.name}</b>
                </div>
                <nav className={menu ? "open" : ""}>
                    {sectionIds.map((x) => (
                        <button
                            key={x}
                            onClick={() =>
                                scroll(x === "engineering" ? "experience" : x)
                            }
                            className={activeSection === x ? "active-nav" : ""}
                        >
                            {x === "engineering"
                                ? "Experience"
                                : x[0].toUpperCase() + x.slice(1)}
                        </button>
                    ))}
                </nav>
                <div className="nav-actions">
                    <button className="icon-btn" onClick={() => setDark(!dark)}>
                        {dark ? <Sun size={16} /> : <Moon size={16} />}
                    </button>
                    <a
                        className="resume"
                        href="https://docs.google.com/document/d/1BiYntpSBSstm5DTf5eQ6aHAarsj-EY9f/view"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Resume <Download size={14} />
                    </a>
                    <button className="menu-btn" onClick={() => setMenu(!menu)}>
                        {menu ? <X /> : <Menu />}
                    </button>
                </div>
            </header>

            <main>
                <section id="home" className="hero section">
                    <motion.div
                        className="hero-copy"
                        initial="hidden"
                        animate="show"
                        variants={stagger}
                    >
                        <motion.div variants={fade} className="eyebrow">
                            <i /> {personalInfo.eyebrow}
                        </motion.div>
                        <motion.h1 variants={fade}>
                            {personalInfo.titlePrefix}
                            <em>{personalInfo.titleHighlight}</em>
                        </motion.h1>
                        <motion.p variants={fade}>
                            {personalInfo.description}
                        </motion.p>
                        <motion.div variants={fade} className="chips">
                            {personalInfo.chips.map((x) => (
                                <span key={x}>{x}</span>
                            ))}
                        </motion.div>
                        <motion.div variants={fade} className="hero-buttons">
                            <button
                                className="primary"
                                onClick={() => scroll("projects")}
                            >
                                View My Work <ArrowUpRight size={16} />
                            </button>
                            <a
                                href="https://github.com/om-prakash-sharma"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                                </svg>
                                GitHub
                            </a>
                            <a
                                href="https://docs.google.com/document/d/1BiYntpSBSstm5DTf5eQ6aHAarsj-EY9f/view"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Download /> Resume
                            </a>
                        </motion.div>
                        <motion.div variants={fade} className="stats">
                            {personalInfo.stats.map((stat, idx) => (
                                <div key={idx}>
                                    <b>{stat.value}</b>
                                    <span>{stat.label}</span>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                    <Architecture />
                </section>

                <ProjectsSection />

                <section id="engineering" className="section split">
                    <div className="engineering">
                        <SectionTitle
                            eyebrow="ENGINEERING"
                            title="Core Technologies & Concepts"
                        />
                        <motion.div
                            className="skill-grid"
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            {skills.map(([title, desc], i) => {
                                const IconComponent = icons[i];
                                return (
                                    <motion.div
                                        className="skill"
                                        variants={fade}
                                        key={`${title}-${i}`}
                                    >
                                        <div className="skill-icon">
                                            {IconComponent && <IconComponent />}
                                        </div>
                                        <h3>{title}</h3>
                                        <p>{desc}</p>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                    <Experience />
                </section>

                <section
                    style={{ display: "none" }}
                    className="section three-col"
                >
                    <div>
                        <SectionTitle
                            eyebrow="TECH STACK"
                            title="Tools & Technologies I Work With"
                            action="View All"
                        />
                        <div className="tech-grid">
                            {tech.map((t) => (
                                <div className="tech" key={t}>
                                    {t}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div id="notes">
                        <SectionTitle
                            eyebrow="TECHNICAL WRITING"
                            title="Notes & Learning"
                            action="View All"
                        />
                        <div className="notes">
                            {notes.map((n, i) => (
                                <a
                                    href="#"
                                    key={n.title}
                                    onClick={(e) => e.preventDefault()}
                                >
                                    <span>{i + 1}</span>
                                    <div>
                                        <b>{n.title}</b>
                                        <small>Technical note · {n.date}</small>
                                    </div>
                                    <ArrowUpRight size={14} />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div>
                        <SectionTitle
                            eyebrow="GITHUB"
                            title="My Repositories"
                            action="View All"
                        />
                        <div className="repos">
                            {repos.map((r) => (
                                <div key={r.name}>
                                    <GitBranch size={17} />
                                    <span>{r.name}</span>
                                    <b>★ {r.stars}</b>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="about" className="section about">
                    <div
                        className="avatar"
                        style={{ overflow: "hidden", padding: 0 }}
                    >
                        <img
                            src="https://om-prakash-sharma.github.io/images/about.jpg"
                            alt="Om Prakash Sharma"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                        />
                    </div>
                    <div>
                        <SectionTitle
                            eyebrow="ABOUT ME"
                            title={personalInfo.name}
                        />
                        <p>{personalInfo.aboutText}</p>
                    </div>
                    <div id="contact" className="connect">
                        <SectionTitle
                            eyebrow="LET’S CONNECT"
                            title="Got a project in mind?"
                        />
                        <p>{personalInfo.contactSubtext}</p>
                        <div className="social">
                            <a href="mailto:om.sharma@outlook.in">
                                <Mail /> Email Me
                            </a>
                            <a
                                href="https://www.linkedin.com/in/om-prakash-sharma-b73582b9"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Link2 /> LinkedIn
                            </a>
                            <a
                                href="https://github.com/om-prakash-sharma"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                                </svg>
                                Github
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <footer>
                <div>
                    <span style={{ fontSize: "10px", color: "var(--muted)" }}>
                        © 2026 Om Prakash Sharma. All rights reserved.
                    </span>
                </div>
                <div className="built-with-tag">
                    <span>Built with React + Motion</span>
                </div>
            </footer>
        </div>
    );
}

function SectionTitle({
    eyebrow,
    title,
    action,
}: {
    eyebrow: string;
    title: string;
    action?: string;
}) {
    return (
        <div className="section-title">
            <div>
                <small>{eyebrow}</small>
                <h2>{title}</h2>
            </div>
            {action && (
                <a href="#" onClick={(e) => e.preventDefault()}>
                    {action} <ArrowUpRight size={14} />
                </a>
            )}
        </div>
    );
}

function Architecture() {
    return (
        <motion.div
            className="arch-innovative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
        >
            <div className="flow-pipeline">
                <motion.div className="arch-box">
                    <div className="box-title">🌐 CLIENT APPLICATIONS</div>
                    <div className="box-content">
                        <small className="sub-txt">
                            Angular | React | PWA | Mobile Apps
                        </small>
                    </div>
                </motion.div>

                <div className="flow-arrow">↓</div>

                <motion.div className="arch-box">
                    <div className="box-title">🛡️ API GATEWAY & PROXY</div>
                    <div className="box-content">
                        <small className="sub-txt">
                            Nginx (Reverse Proxy & Load Balancer)
                        </small>
                    </div>
                </motion.div>

                <div className="flow-arrow">↓</div>

                <motion.div className="arch-box">
                    <div className="box-title">⚡ BACKEND SERVICES</div>
                    <div className="box-content">
                        Node.js (Express | NestJS) | Python (FastAPI) | Java
                    </div>
                </motion.div>

                <div className="flow-arrow">↓</div>

                <motion.div className="arch-box">
                    <div className="box-title">
                        🔀 DISTRIBUTED SYSTEMS & COMMUNICATION
                    </div>
                    <div className="box-content">
                        Redis | RabbitMQ | Kafka | WebSockets | SSE | gRPC
                    </div>
                </motion.div>

                <div className="flow-arrow">↓</div>

                <motion.div className="arch-box db-box">
                    <div className="box-title">🗄️ DATA LAYER & STORAGE</div>
                    <div className="box-content">
                        Relational (MySQL | MS-SQL | PostgreSQL) | NoSQL
                        (MongoDB)
                    </div>
                </motion.div>
            </div>

            <motion.div className="devops-panel">
                <div>
                    <div className="devops-title">DEVOPS & CLOUD</div>

                    <div className="devops-groups-container">
                        <div className="devops-group group-1">
                            <span className="devops-category">
                                <i className="status-dot" /> CONTAINERIZATION
                            </span>
                            <p>Docker & Kubernetes (K8s)</p>
                        </div>

                        <div className="devops-group group-2">
                            <span className="devops-category">
                                <i className="status-dot" /> CI/CD PIPELINE
                            </span>
                            <p>Jenkins & GitHub Actions</p>
                        </div>

                        <div className="devops-group group-3">
                            <span className="devops-category">
                                <i className="status-dot" /> MONITORING & QA
                            </span>
                            <p>SonarQube | Prometheus | Grafana</p>
                        </div>

                        <div className="devops-group group-4">
                            <span className="devops-category">
                                <i className="status-dot" /> MANAGEMENT
                            </span>
                            <p>Portainer | Ubuntu Server</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

function Experience() {
    return (
        <div id="experience" className="experience">
            <SectionTitle
                eyebrow="MY JOURNEY"
                title="Experience"
                // action="View All"
            />
            <div className="experience-scroll-container">
                <div className="timeline">
                    {experiences.map((exp, idx) => (
                        <article key={idx}>
                            <i />
                            <small>{exp.period}</small>
                            <b>
                                {exp.role}{" "}
                                {exp.place && (
                                    <span className="company-dash">
                                        - {exp.place}
                                    </span>
                                )}
                            </b>
                            {exp.highlight && <strong>{exp.highlight}</strong>}
                            <p>{exp.desc}</p>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}

function ProjectsSection() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(1);
    const [visibleCount, setVisibleCount] = useState(3);

    const updatePagination = () => {
        const el = scrollContainerRef.current;
        if (!el) return;

        const firstCard = el.querySelector(
            ".horizontal-project-card",
        ) as HTMLElement;
        if (!firstCard) return;

        const cardWidth = firstCard.offsetWidth + 20;
        const containerWidth = el.clientWidth;

        const visible = Math.max(Math.floor(containerWidth / cardWidth), 1);
        setVisibleCount(visible);

        const pages = Math.ceil(projects.length / visible);
        setTotalPages(pages);

        const pageIndex = Math.min(
            Math.max(Math.round(el.scrollLeft / (cardWidth * visible)), 0),
            pages - 1,
        );
        setCurrentPage(pageIndex);
    };

    useEffect(() => {
        updatePagination();
        window.addEventListener("resize", updatePagination);
        return () => window.removeEventListener("resize", updatePagination);
    }, []);

    const handleScroll = () => {
        const el = scrollContainerRef.current;
        if (!el) return;

        const firstCard = el.querySelector(
            ".horizontal-project-card",
        ) as HTMLElement;
        const cardWidth = firstCard ? firstCard.offsetWidth + 20 : 380;
        const pageStep = cardWidth * visibleCount;

        const pageIndex = Math.min(
            Math.max(Math.round(el.scrollLeft / pageStep), 0),
            totalPages - 1,
        );
        setCurrentPage(pageIndex);
    };

    const navigateToPage = (pageIdx: number) => {
        const el = scrollContainerRef.current;
        if (!el) return;

        const firstCard = el.querySelector(
            ".horizontal-project-card",
        ) as HTMLElement;
        const cardWidth = firstCard ? firstCard.offsetWidth + 20 : 380;
        const scrollTarget = pageIdx * (cardWidth * visibleCount);

        el.scrollTo({
            left: scrollTarget,
            behavior: "smooth",
        });

        setCurrentPage(pageIdx);
    };

    const scrollCarousel = (direction: "left" | "right") => {
        const targetPage =
            direction === "left" ? currentPage - 1 : currentPage + 1;
        if (targetPage >= 0 && targetPage < totalPages) {
            navigateToPage(targetPage);
        }
    };

    return (
        <section id="projects" className="section">
            <div className="projects-header-bar">
                <SectionTitle
                    eyebrow="MY EXPERIENCE"
                    title="Systems I've Helped Build"
                />

                <div className="carousel-nav-group">
                    {/* <div className="carousel-dots-wrap">
                        {Array.from({ length: totalPages }).map((_, idx) => (
                            <button
                                key={`page-dot-${idx}`}
                                className={`carousel-dot ${idx === currentPage ? "active" : ""}`}
                                onClick={() => navigateToPage(idx)}
                                aria-label={`Go to page ${idx + 1}`}
                            />
                        ))}
                    </div> */}

                    <div className="carousel-nav-btns">
                        <button
                            className="icon-btn"
                            aria-label="Previous Page"
                            onClick={() => scrollCarousel("left")}
                        >
                            ‹
                        </button>
                        <button
                            className="icon-btn"
                            aria-label="Next Page"
                            onClick={() => scrollCarousel("right")}
                        >
                            ›
                        </button>
                    </div>
                </div>
            </div>

            <div className="project-slider-wrapper">
                <motion.div
                    ref={scrollContainerRef}
                    onScroll={handleScroll}
                    id="horizontal-project-container"
                    className="project-horizontal-grid"
                    variants={stagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    {projects.map((p, idx) => (
                        <motion.article
                            className="project horizontal-project-card saas-project-card"
                            variants={fade}
                            key={idx}
                        >
                            <div className="card-top-header">
                                <div
                                    className={
                                        "tech-avatar " +
                                        (p.tone || "saas-tone-1")
                                    }
                                >
                                    {/* {p.tags[0]?.slice(0, 2).toUpperCase() || "PR"} */}
                                    {renderProjectIcon(p.icon)}
                                </div>
                                <div className="card-top-meta">
                                    <span className="card-index">
                                        #{String(idx + 1).padStart(2, "0")}
                                    </span>
                                    {p.period && (
                                        <span className="project-period-badge">
                                            {p.period}
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div className="project-role-badge">
                                Role: {p.role}
                            </div>
                            <h3>{p.title}</h3>
                            <p>{p.desc}</p>
                            <div className="tags">
                                {p.tags.map((t: string) => (
                                    <span key={t}>{t}</span>
                                ))}
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

const renderProjectIcon = (iconName?: string) => {
    switch (iconName) {
        case "react":
            return <Globe size={16} />;
        case "node":
            return <Server size={16} />;
        case "python":
            return <Terminal size={16} />;
        case "database":
            return <Database size={16} />;
        case "cloud":
            return <Cloud size={16} />;
        case "java":
            return <Cpu size={16} />;
        case "server":
            return <Server size={16} />;
        default:
            return <Code2 size={16} />;
    }
};

export default App;
