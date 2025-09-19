import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
