import "./App.css";
import Hero from "./components/Hero";
import GetToKnow from "./components/GetToKnow";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App bg-[#F8FBF8]">
      <div className="max-w-5xl m-auto">
        <Hero />
        <GetToKnow />
        <Technologies />
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default App;
