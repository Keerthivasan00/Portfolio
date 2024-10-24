import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Components/Landing";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Landing/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
