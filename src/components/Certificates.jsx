import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";
import { certificates } from "../data/misc";
import "./Certificates.css";

export default function Certificates() {
  return (
    <section id="certificates" className="section">
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Certificates</span>
          <h2 className="section-title">
            Continuous <span className="accent">learning</span>
          </h2>
        </motion.div>

        <div className="cert-grid">
          {certificates.map((c, i) => (
            <motion.div
              key={c.title}
              className="cert-card glass"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <FiAward className="cert-icon" />
              <h3>{c.title}</h3>
              <span>{c.issuer}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
