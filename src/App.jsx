import HomePage from "./pages/HomePage/HomePage";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Works from "./pages/Works/Works";
function App() {
  return (
    <Router>
      <div className="App font-inter">
        <Routes>
          <Route path="/works" element={<Works />} /> {/* Updated syntax */}
          <Route path="/" element={<HomePage />} /> {/* Updated syntax */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
