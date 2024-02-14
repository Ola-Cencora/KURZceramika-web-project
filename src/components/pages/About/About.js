import React, { useEffect, useState } from "react";
import SectionTitle from "../../common/SectionTitle/SectionTitle";
import Button from "../../common/Button/Button";
import { Row, Col } from "react-bootstrap";
import styles from "./About.module.scss";
import clsx from "clsx";
import { AboutText } from "./aboutTxt";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

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
          <Fade direction="up" triggerOnce>
            <img
              src={`${process.env.PUBLIC_URL}/images/about.jpg`}
              alt="zdjęcie o mnie"
            />
          </Fade>
        </Col>
        <Col
          lg={6}
          xs={12}
          className={clsx(styles.aboutTxt, "order-lg-2 order-2")}
        >
          <Fade cascade direction="up" triggerOnce>
            <SectionTitle title="o mnie" />
            <p>{text}</p>
            <Link to="/about">
              <Button variant="more" content="czytaj więcej" />
            </Link>
          </Fade>
        </Col>
      </Row>
    </div>
  );
};

export default About;
