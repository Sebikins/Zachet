import "./styles/main.css";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from "./components/nav/navbar";
import Footer from "./components/footer/footer";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Contacts from "./pages/contacts";
import Project from "./pages/project";
import Weather from "./pages/forApi";


import ScrollToTop from "./utils/scrollToTop"


function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop/>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Weather" element={<Weather />} />
          <Route path="/Project/:id" element={<Project />} />
          <Route path="/Contacts" element={<Contacts />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
