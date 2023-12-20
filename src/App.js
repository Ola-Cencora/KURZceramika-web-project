import About from "./components/pages/About/About";
import Gallery from "./components/pages/Gallery/Gallery";
import ScrollToTop from "./components/features/ScrollToTop/ScrollToTop";
import Header from "./components/views/Header/Header";
import ContactSection from "./components/pages/ContactSection/ContactSection";

function App() {

  return (
    <div>
      <ScrollToTop />
      <Header />
      <div id="about">
        <About />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <ContactSection />
    </div>
  );
}

export default App;
