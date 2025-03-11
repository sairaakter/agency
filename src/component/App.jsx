import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Layout from "./Layout";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Service from "./pages/Service";
function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Service" element={<Service />} />
            <Route path="/Project" element={<Project />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
