import Newsletter from "../../features/Newsletter/Newsletter";
import Contact from "../../features/Contact/Contact";

const ContactSection = () => {
  return (
    <div>
      <div id="contact">
        <Contact />
      </div>
      <div id="newsletter">
        <Newsletter />
      </div>
    </div>
  );
};

export default ContactSection;
