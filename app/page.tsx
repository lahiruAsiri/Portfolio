import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import About from "@/components/About";
import Stack from "@/components/Stack";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import DesignSkills from "@/components/DesignSkills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Stack />
        <Experience />
        <Projects />
        <Certifications />
        <DesignSkills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
