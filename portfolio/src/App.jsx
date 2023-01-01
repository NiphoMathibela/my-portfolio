import "./App.css";
import Hero from "./components/Hero";
import GetToKnow from "./components/GetToKnow";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App bg-back">
      <div className= "max-w-5xl m-auto">
        <Hero />
        <GetToKnow/>
        <Technologies/>
        <Projects/>
      </div>
    </div>
  );
}

export default App;
