import About from "./components/pages/About/About";
import Gallery from "./components/pages/Gallery/Gallery";
import Contact from "./components/pages/Contact/Contact";
import Newsletter from "./components/pages/Newsletter/Newsletter";
import ScrollToTop from "./components/features/ScrollToTop/ScrollToTop";
import Header from "./components/views/Header/Header";
import { useRef } from "react";

function App() {
  
  const aboutRef = useRef(null);
  const galleryRef = useRef(null);
  const contactRef = useRef(null);
  const newsletterRef = useRef(null);

  return (
    <div>
      <ScrollToTop />
      <Header 
        aboutRef={aboutRef}
        galleryRef={galleryRef}
        contactRef={contactRef}
        newsletterRef={newsletterRef}
      />
      <div ref={aboutRef}><About /></div>
      <div ref={galleryRef}><Gallery /></div>
      <div ref={contactRef}><Contact /></div>
      <div ref={newsletterRef}><Newsletter /></div>
    </div>
  );
}

export default App;
