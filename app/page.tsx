import ClickRipple from "@/components/ClickRipple";
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

// Re-render daily so "years in industry" / role duration stay current
// (otherwise they freeze at the date of the last deploy).
export const revalidate = 86400;

export default function Home() {
  return (
    <>
      <ClickRipple />
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
