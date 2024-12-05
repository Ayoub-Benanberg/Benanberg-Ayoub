import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import AllProjects from "./pages/allProjects"; // Make sure this path is correct

function App() {
  return (
    <Router>
      <div className="font-custom">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/all-projects" element={<AllProjects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
