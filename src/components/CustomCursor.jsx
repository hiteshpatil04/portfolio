import { useEffect, useRef, useState } from "react";
import "./CustomCursor.css";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) {
      setEnabled(false);
      return;
    }

    const pos = { x: 0, y: 0 };
    const ring = { x: 0, y: 0 };

    const move = (e) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
      }
    };

    let raf;
    const animate = () => {
      ring.x += (pos.x - ring.x) * 0.18;
      ring.y += (pos.y - ring.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.x}px, ${ring.y}px)`;
      }
      raf = requestAnimationFrame(animate);
    };

    const onOver = (e) => {
      const interactive = e.target.closest("a, button, .cursor-hover");
      ringRef.current?.classList.toggle("is-active", !!interactive);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", onOver);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
}
