import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Skills from "./skills/Skills";
import Projects from "./Projects";
import Videos from "./Videos";

const App = () => {
  return (
    <div className="min-h-screen font-rubik text-text-dark bg-[linear-gradient(150.4deg,_#FFFFDD_-49.3%,_#FFD5E5_91%)]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Home />} />
            <Route path="skills" element={<Skills />} />
            <Route path="projects" element={<Projects />} />
            <Route path="videos" element={<Videos />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;