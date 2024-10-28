import About from "./components/About";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

const App = () => (
  <main className="relative">
    <Heading />
    <section>
      <Hero />
    </section>
    <section>
      <Projects />
    </section>
    <section>
      <About />
    </section>
    <section>
      <Footer />
    </section>
  </main>
);

export default App;
