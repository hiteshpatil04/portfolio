import { motion } from "framer-motion";
import {
  FiCode,
  FiLayout,
  FiServer,
  FiCpu,
  FiDatabase,
  FiTool,
} from "react-icons/fi";
import { skillCategories } from "../data/skills";
import "./Skills.css";

const ICONS = {
  code: <FiCode />,
  layout: <FiLayout />,
  server: <FiServer />,
  brain: <FiCpu />,
  database: <FiDatabase />,
  tool: <FiTool />,
};

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Skills</span>
          <h2 className="section-title">
            My <span className="accent">technical toolkit</span>
          </h2>
          <p className="section-sub">
            Languages, frameworks and AI tooling I use to design, build and ship
            full-stack, AI-powered products.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              className="skill-card glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.1 }}
            >
              <div className="skill-card-icon">{ICONS[cat.icon]}</div>
              <h3>{cat.title}</h3>
              <div className="skill-chips">
                {cat.skills.map((s) => (
                  <span key={s} className="tag">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
