import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
// import Card from "./Components/Card";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Skills" element={<Skills/>}/>
            <Route path="/Project" element={<Project/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            {/* <Route path="/Card" element={<Card/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
