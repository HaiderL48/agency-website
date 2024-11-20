import HomePage from "./pages/HomePage/HomePage";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Works from "./pages/Works/Works";
function App() {
  return (
    <Router basename="/">
      <div className="App font-inter">
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Updated syntax */}
          <Route path="/works" element={<Works />} /> {/* Updated syntax */}
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
