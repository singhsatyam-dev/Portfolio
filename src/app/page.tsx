import Navbar from "../components/Navbar";
import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Hero from "../components/Hero";
import Journey from "../components/Journey";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Journey />
      <Contact />
      <Footer />
    </main>
  );
}
