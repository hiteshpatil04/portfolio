import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiDownload } from "react-icons/fi";
import { socials } from "../data/misc";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Contact</span>
          <h2 className="section-title">
            Let's build something <span className="accent">together</span>
          </h2>
          <p className="section-sub">
            Have a role, project, or idea in mind? My inbox is open.
          </p>
        </motion.div>

        <div className="contact-grid">
          <motion.div
            className="contact-info glass"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a href={`mailto:${socials.email}`} className="contact-row cursor-hover">
              <FiMail /> {socials.email}
            </a>
            <a href={`tel:${socials.phone}`} className="contact-row cursor-hover">
              <FiPhone /> {socials.phone}
            </a>
            <a href={socials.linkedin} target="_blank" rel="noreferrer" className="contact-row cursor-hover">
              <FiLinkedin /> LinkedIn
            </a>
            <a href={socials.github} target="_blank" rel="noreferrer" className="contact-row cursor-hover">
              <FiGithub /> GitHub
            </a>
            <a href="/resume.pdf" download="Hitesh_Patil_Resume_offcam_soft.pdf" target="_blank" rel="noreferrer" className="contact-row cursor-hover accent-row">
              <FiDownload /> Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
