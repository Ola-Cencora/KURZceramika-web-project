import React, { useEffect, useState, useRef } from "react";
import SectionTitle from "../../common/SectionTitle/SectionTitle";
import Button from "../../common/Button/Button";
import { Row, Col } from "react-bootstrap";
import styles from "./About.module.scss";
import clsx from "clsx";
import { AboutText } from "./aboutTxt";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const About = () => {
  const [paragraphs, setParagraphs] = useState([]);
  const aboutRef = useRef(null);

  useEffect(() => {
    setParagraphs(AboutText.split("\n"));
  }, []);

  useEffect(() => {
    if (aboutRef.current) {
      const yOffset = aboutRef.current.offsetTop;
      window.scrollTo(0, yOffset);
    }
  }, []);

  return (
    <div
      id="about"
      ref={aboutRef}
      className={clsx(styles.about, "container-fluid")}
    >
      <Row>
        <Col
          lg={6}
          xs={12}
          className={clsx(styles.aboutImg, "d-none d-lg-flex order-1")}
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
            {paragraphs.map((paragraph, index) => (
              <>
                <p key={index}>{paragraph}</p>
                <br />
              </>
            ))}
            <Link to="/omnie">
              <Button variant="more" content="czytaj więcej" />
            </Link>
          </Fade>
        </Col>
      </Row>
    </div>
  );
};

export default About;
