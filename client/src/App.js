import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            {/* <Route path="/Navbar" element={<Navbar/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
