import { motion } from "framer-motion";
import { FiCpu, FiAward, FiTarget } from "react-icons/fi";
import "./About.css";

const points = [
  {
    icon: <FiCpu />,
    title: "AI & Full-Stack Builder",
    text: "I build intelligent applications using Python, LangChain, LangGraph, RAG, FastAPI and React — turning AI research into real, usable products.",
  },
  {
    icon: <FiAward />,
    title: "Hackathon-Tested",
    text: "10+ hackathons under my belt, including Smart India Hackathon (SIH), sharpening my ability to ship working products under pressure.",
  },
  {
    icon: <FiTarget />,
    title: "Problem-First Mindset",
    text: "I enjoy solving real-world problems by building scalable, AI-powered applications rather than just following tutorials.",
  },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">About Me</span>
          <h2 className="section-title">
            Engineering student, <span className="accent">AI builder</span> at heart
          </h2>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-text glass"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p>
              I'm a <strong>B.Tech Mechanical Engineering</strong> student at{" "}
              <strong>Vishwakarma Institute of Information Technology (VIIT), Pune</strong>,
              with a strong passion for Artificial Intelligence, Generative AI, Large
              Language Models, and Full Stack Development.
            </p>
            <p>
              I enjoy building intelligent AI applications using{" "}
              <strong>Python, LangChain, LangGraph, RAG, FastAPI, React</strong> and other
              modern AI technologies — bridging the gap between research-grade AI and
              production-ready software.
            </p>
            <p>
              Along the way I've participated in <strong>10+ hackathons</strong>, including
              the <strong>Smart India Hackathon (SIH)</strong>, and I genuinely enjoy solving
              real-world problems by building scalable, AI-powered applications.
            </p>
          </motion.div>

          <div className="about-points">
            {points.map((p, i) => (
              <motion.div
                key={p.title}
                className="about-point glass"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
              >
                <div className="about-point-icon">{p.icon}</div>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
