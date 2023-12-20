import Newsletter from "../../features/Newsletter/Newsletter";
import Contact from "../../features/Contact/Contact";
import styles from "./ContactSection.module.scss";
import { Row, Col } from "react-bootstrap";

const ContactSection = () => {
  return (
    <div className={styles.contactSection}>
      <Row>
        <Col lg={6} xs={12} className="order-lg-1 order-1">
          <div id="contact">
            <Contact />
          </div>
        </Col>
        <Col lg={6} xs={12} className="order-lg-2 order-2">
          <div id="newsletter">
            <Newsletter />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ContactSection;
