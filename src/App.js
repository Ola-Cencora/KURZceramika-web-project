import About from "./components/pages/About/About";
import Gallery from "./components/pages/Gallery/Gallery";
import Contact from "./components/pages/Contact/Contact";
import Newsletter from "./components/pages/Newsletter/Newsletter";
import ScrollToTop from "./components/features/ScrollToTop/ScrollToTop";
import { useRef } from "react";

function App() {
  const aboutRef = useRef(null);
  const galleryRef = useRef(null);
  const contactRef = useRef(null);
  const newsletterRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    window.scrollTo({
      top: sectionRef.current.offsetTop,
      behavior: 'smooth',
    })
  };

  return (
    <div>
      <ScrollToTop />
      <ul>
        <li onClick={() => scrollToSection(aboutRef)}>O mnie</li>
        <li onClick={() => scrollToSection(galleryRef)}>Galeria</li>
        <li onClick={() => scrollToSection(contactRef)}>Kontakt</li>
        <li onClick={() => scrollToSection(newsletterRef)}>Newsletter</li>
      </ul>
      <div ref={aboutRef}><About /></div>
      <div ref={galleryRef}><Gallery /></div>
      <div ref={contactRef}><Contact /></div>
      <div ref={newsletterRef}><Newsletter /></div>
    </div>
  );
}

export default App;
