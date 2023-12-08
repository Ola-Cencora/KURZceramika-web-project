import SectionTitle from "../../common/SectionTitle/SectionTitle";
import { Row, Col } from "react-bootstrap";
import styles from "./About.module.scss";
import clsx from "clsx";
import AboutText from "./about.txt";
import { useEffect, useState } from "react";

const About = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    fetch(AboutText)
      .then((response) => response.text())
      .then((data) => setText(data))
      .catch((error) => console.error("Error fetching about text:", error));
  }, []);

  return (
    <div className={clsx(styles.about, "container-fluid")}>
      <Row>
        <Col
          lg={6}
          xs={12}
          className={clsx(styles.aboutImg, "order-lg-1 order-1")}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/about.jpg`}
            alt="zdjęcie o mnie"
          />
        </Col>
        <Col
          lg={6}
          xs={12}
          className={clsx(styles.aboutTxt, "order-lg-2 order-2")}
        >
          <SectionTitle title="o mnie" />
          <p>{text}</p>
        </Col>
      </Row>
    </div>
  );
};

export default About;
