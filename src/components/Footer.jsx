import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { socials } from "../data/misc";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a href="#home" className="footer-logo">
          Hitesh<span className="accent-dot">.</span>
        </a>

        <div className="footer-socials">
          <a href={socials.github} target="_blank" rel="noreferrer" className="cursor-hover" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href={socials.linkedin} target="_blank" rel="noreferrer" className="cursor-hover" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href={`mailto:${socials.email}`} className="cursor-hover" aria-label="Email">
            <FiMail />
          </a>
        </div>

        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Hitesh Patil. Built with React & a lot of coffee.
        </p>
      </div>
    </footer>
  );
}
