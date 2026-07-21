import { motion } from "framer-motion";
import { education } from "../data/misc";
import "./Education.css";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Education</span>
          <h2 className="section-title">
            Academic <span className="accent">timeline</span>
          </h2>
        </motion.div>

        <div className="edu-timeline">
          {education.map((e, i) => (
            <motion.div
              key={e.degree}
              className="edu-item"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
            >
              <div className="edu-dot" />
              <div className="edu-card glass">
                <span className="edu-period">{e.period}</span>
                <h3>{e.degree}</h3>
                <p>{e.school}</p>
                <span className="edu-detail">{e.detail}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
