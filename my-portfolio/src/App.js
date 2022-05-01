import About from "./components/about/About";
import "./App.css";
import Contact from "./components/Contact/Contact";
import Home from "./components/home/Home";
import Projects from "./components/Project/Projects";
import Skills from "./components/Skills/Skills";


function App() {
  return (
    <div className="App">
       <Home />
       <About />
       <Skills />
       <Projects />
       <Contact />
       
    </div>
  );
}

export default App;
