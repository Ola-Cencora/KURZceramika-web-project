import ScrollToTop from "./components/features/ScrollToTop/ScrollToTop";
import Footer from "./components/views/Footer/Footer";
import HomePage from "./components/pages/HomePage/HomePage";
import AboutSubpage from "./components/pages/AboutSubpage/AboutSubpage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutSubpage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
