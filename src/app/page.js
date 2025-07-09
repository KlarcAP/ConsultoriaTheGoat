import Hero from "../components/hero";
import Header from "../components/header";
import About from "../components/about";
import Services from "../components/services";
import Projects from "../components/portfolio";
import CallToAction from "../components/callToAction";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <CallToAction />
    </main>
  );
}
