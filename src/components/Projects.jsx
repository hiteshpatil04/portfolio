import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import { projects } from "../data/projects";
import "./Projects.css";

const FILTERS = ["All", "Featured", "AI / ML", "Full Stack"];

function matchesFilter(project, filter) {
  if (filter === "All") return true;
  if (filter === "Featured") return project.featured;

  if (filter === "AI / ML")
    return project.tech.some((t) =>
      [
        "LangChain",
        "LangGraph",
        "RAG",
        "ChromaDB",
        "AI/ML",
        "Gemini/OpenAI API",
      ].includes(t)
    );

  if (filter === "Full Stack")
    return project.tech.some((t) =>
      ["Node.js", "Express.js", "React.js", "FastAPI"].includes(t)
    );

  return true;
}

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(
    () => projects.filter((p) => matchesFilter(p, filter)),
    [filter]
  );

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Projects</span>

          <h2 className="section-title">
            Things I've <span className="accent">built</span>
          </h2>

          <p className="section-sub">
            AI platforms and full-stack systems, from multi-agent analysis tools
            to real-world industry projects.
          </p>
        </motion.div>

        <div className="project-filters">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`filter-btn cursor-hover ${
                filter === f ? "active" : ""
              }`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.article
                key={p.id}
                layout
                className="project-card glass"
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
              >
                <div className="project-thumb">
                  <span>{p.title.charAt(0)}</span>
                </div>

                <div className="project-body">
                  {p.featured && (
                    <span className="project-badge">Featured</span>
                  )}

                  <h3>{p.title}</h3>

                  <p className="project-subtitle">{p.subtitle}</p>

                  <p className="project-desc">{p.description}</p>

                  <ul className="project-features">
                    {p.features.slice(0, 3).map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>

                  <div className="project-tech">
                    {p.tech.map((tech) => (
                      <span key={tech} className="tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a
                      href="https://github.com/hiteshpatil04"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline cursor-hover"
                    >
                      <FiGithub />
                      <span style={{ marginLeft: "8px" }}>View on GitHub</span>
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}