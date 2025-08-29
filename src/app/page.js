import Hero from "../components/hero";
import Header from "../components/header";
import About from "../components/about";
import Carrosel from "../components/carrousel";
import Services from "../components/services";
import Projects from "../components/portfolio";
import CallToAction from "../components/callToAction";
import Footer from "../components/footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Carrosel />
      <Services />
      <Projects />
      <CallToAction />
      <Footer />
    </main>
  );
}
