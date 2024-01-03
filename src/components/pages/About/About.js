import SectionTitle from "../../common/SectionTitle/SectionTitle";
import Button from "../../common/Button/Button";
import { Row, Col } from "react-bootstrap";
import styles from "./About.module.scss";
import clsx from "clsx";
import { AboutText } from "./aboutTxt";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const About = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    setText(AboutText);
  }, []);

  return (
    <div id="about" className={clsx(styles.about, "container-fluid")}>
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
          <Link to="/about">
            <Button variant="more" content="czytaj więcej" />
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default About;
