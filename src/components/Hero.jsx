import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from "react-icons/fi";
import { socials } from "../data/misc";
import ParticleField from "./ParticleField";
import profilePic from "../assets/images/profile.jpg";
import "./Hero.css";

export default function Hero() {
  const typedEl = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedEl.current, {
      strings: [
        "AI Engineer",
        "Generative AI Developer",
        "Full Stack Developer",
        "LangChain Developer",
        "Problem Solver",
      ],
      typeSpeed: 55,
      backSpeed: 30,
      backDelay: 1400,
      loop: true,
      smartBackspace: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <section id="home" className="hero">
      <ParticleField />
      <div className="hero-glow hero-glow-1" />
      <div className="hero-glow hero-glow-2" />

      <div className="container hero-inner">
        <motion.div
          className="hero-photo"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="hero-photo-ring" />
          <div className="hero-photo-frame" style={{ overflow: "hidden" }}>
            <img
              src={profilePic}
              alt="Hitesh Patil"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          </div>
        </motion.div>

        <div className="hero-content">
          <motion.p
            className="hero-eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            Hey, I'm
          </motion.p>

          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
          >
            Hitesh Patil
          </motion.h1>

          <motion.div
            className="hero-role"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <span ref={typedEl} />
            <span className="hero-cursor">|</span>
          </motion.div>

          <motion.p
            className="hero-desc"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            B.Tech student building intelligent, AI-powered applications with
            LangChain, LangGraph, RAG and modern full-stack tools.
          </motion.p>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <a href="/resume.pdf" download className="btn btn-primary cursor-hover">
              Download Resume
            </a>
            <a href="#projects" className="btn btn-outline cursor-hover">
              View Projects
            </a>
          </motion.div>

          <motion.div
            className="hero-socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.7 }}
          >
            <a href={socials.github} target="_blank" rel="noreferrer" className="cursor-hover" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href={socials.linkedin} target="_blank" rel="noreferrer" className="cursor-hover" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href={`mailto:${socials.email}`} className="cursor-hover" aria-label="Email">
              <FiMail />
            </a>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        className="hero-scroll cursor-hover"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        aria-label="Scroll down"
      >
        <FiArrowDown />
      </motion.a>
    </section>
  );
}
