import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { achievements } from "../data/misc";
import "./Achievements.css";

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Achievements</span>
          <h2 className="section-title">
            Numbers that <span className="accent">tell the story</span>
          </h2>
        </motion.div>

        <div className="achievements-grid">
          {achievements.map((a, i) => (
            <motion.div
              key={a.label}
              className="achievement-card glass"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <span className="achievement-stat">{a.stat}</span>
              <span className="achievement-label">{a.label}</span>
              {a.label.toLowerCase().includes("leetcode") && (
                <a
                  href="https://leetcode.com/u/iv5q8Rkq7f/"
                  target="_blank"
                  rel="noreferrer"
                  className="leetcode-btn cursor-hover"
                >
                  View Profile <FiExternalLink />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
