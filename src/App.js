import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Results from "./pages/results";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results/:id" element={<Results />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
