import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import EyeCamps from "./pages/EyeCamps";
import SewaRasoi from "./pages/SewaRasoi";
import NaiPehal from "./pages/NaiPehal";
import Impact from "./pages/Impact";
import Media from "./pages/Media";
import Team from "./pages/Team";
import Documents from "./pages/Documents";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import FAQ from "./pages/FAQ";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/eye-camps" element={<EyeCamps />} />
        <Route path="/sewa-rasoi" element={<SewaRasoi />} />
        <Route path="/nai-pehal" element={<NaiPehal />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/media" element={<Media />} />
        <Route path="/team" element={<Team />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        
        {/* Secondary / Helper Routes */}
        <Route path="/gallery" element={<Navigate to="/media#gallery" replace />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;