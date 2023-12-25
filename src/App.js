import ScrollToTop from "./components/features/ScrollToTop/ScrollToTop";
import Footer from "./components/views/Footer/Footer";
import HomePage from "./components/pages/HomePage/HomePage";
import AboutSubpage from "./components/pages/AboutSubpage/AboutSubpage";
import NotFound from "./components/views/NotFound/NotFound";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutSubpage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
