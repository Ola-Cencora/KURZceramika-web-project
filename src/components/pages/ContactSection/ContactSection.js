import Contact from "../../features/Contact/Contact";
import styles from "./ContactSection.module.scss";
import clsx from "clsx";
import { Col } from "react-bootstrap";

const ContactSection = () => (
  <div className={clsx(styles.contactSection, "container-fluid")}>
    <Col xs={12} md={8} lg={6} id="contact" className={styles.contact}>
      <Contact />
    </Col>
  </div>
);

export default ContactSection;
