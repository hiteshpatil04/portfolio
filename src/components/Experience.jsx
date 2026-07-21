import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";
import { experience } from "../data/misc";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Journey</span>
          <h2 className="section-title">
            Work <span className="accent">experience</span>
          </h2>
        </motion.div>

        <div className="exp-timeline">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.role}
              className="exp-item"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
            >
              <div className="exp-dot" />
              <div className="exp-card glass">
                <div className="exp-header">
                  <span className="exp-period">{exp.period}</span>
                  <span className="exp-badge">Developer: {exp.developer}</span>
                </div>
                <h3>{exp.role}</h3>
                <h4 className="exp-company">{exp.company}</h4>
                {exp.project && (
                  <p className="exp-project">
                    <strong>Project:</strong> {exp.project}
                  </p>
                )}
                <p className="exp-desc">{exp.description}</p>
                {exp.certificateLink && (
                  <div className="exp-actions">
                    <a
                      href="https://www.linkedin.com/in/hitesh-patil-1326842a8/"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline btn-sm cursor-hover exp-cert-btn"
                    >
                      <FiAward /> View Certificate
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
