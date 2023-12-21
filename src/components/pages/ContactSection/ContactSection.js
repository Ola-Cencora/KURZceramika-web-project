import Newsletter from "../../features/Newsletter/Newsletter";
import Contact from "../../features/Contact/Contact";
import styles from "./ContactSection.module.scss";
import { Row, Col } from "react-bootstrap";
import clsx from "clsx";

const ContactSection = () => {
  return (
    <div className={clsx(styles.contactSection, "container-fluid")}>
      <Row className="d-flex align-items-center">
        <Col lg={6} xs={12} className={clsx("order-lg-1 order-1", styles.col)}>
          <div id="contact" className={styles.contact}>
            <Contact />
          </div>
        </Col>
        <Col lg={6} xs={12} className={clsx("order-lg-2 order-2", styles.col)}>
          <div id="newsletter" className={styles.newsletter}>
            <Newsletter />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ContactSection;
