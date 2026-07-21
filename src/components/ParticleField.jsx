import { useEffect, useRef } from "react";
import "./ParticleField.css";

export default function ParticleField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width, height, particles, raf;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const init = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      const count = Math.min(70, Math.floor((width * height) / 22000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.6 + 0.4,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        hue: Math.random() > 0.5 ? "79,124,255" : "148,87,255",
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.hue}, 0.5)`;
        ctx.fill();
      });
      if (!reduceMotion) raf = requestAnimationFrame(draw);
    };

    init();
    draw();
    window.addEventListener("resize", init);
    return () => {
      window.removeEventListener("resize", init);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-field" aria-hidden="true" />;
}
