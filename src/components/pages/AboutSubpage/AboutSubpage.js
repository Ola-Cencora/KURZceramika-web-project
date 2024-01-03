import { useEffect, useState } from "react";
import { AboutTextMore } from "./aboutMoreTxt";
import styles from "./AboutSubpage.module.scss";
import SectionTitle from "../../common/SectionTitle/SectionTitle";
import Button from "../../common/Button/Button";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const AboutSubpage = () => {
  const [paragraphs, setParagraphs] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setParagraphs(AboutTextMore.split("\n"));
  }, []);

  return (
    <div className={styles.aboutSubpage}>
      <Container>
        <div className={styles.aboutTxt}>
          <SectionTitle title="o mnie" />
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <Link to="/">
          <Button content="wróć do strony głównej" />
        </Link>
      </Container>
    </div>
  );
};

export default AboutSubpage;
