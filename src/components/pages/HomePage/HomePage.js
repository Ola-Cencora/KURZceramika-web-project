import About from "../About/About";
import Gallery from "../Gallery/Gallery";
import ContactSection from "../ContactSection/ContactSection";
import Header from "../../views/Header/Header";

const HomePage = () => {
  return (
    <>
      <Header />
      <div id="about">
        <About />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <ContactSection />
    </>
  );
};

export default HomePage;
