import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import CustomCursor from "./components/CustomCursor";
import { ScrollProgress, ScrollToTop } from "./components/ScrollUtils";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Certificates from "./components/Certificates";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Loader show={loading} />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Certificates />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
