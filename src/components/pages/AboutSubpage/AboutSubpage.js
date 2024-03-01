import { useEffect, useState } from "react";
import { AboutTextMore } from "./aboutMoreTxt";
import styles from "./AboutSubpage.module.scss";
import SectionTitle from "../../common/SectionTitle/SectionTitle";
import Button from "../../common/Button/Button";
import { Container } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";

const AboutSubpage = () => {
  const [paragraphs, setParagraphs] = useState([]);
  const navigate = useNavigate();

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
          <Fade cascade direction="up" triggerOnce>
            <SectionTitle title="o mnie" />
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </Fade>
        </div>
        <Button onClick={() => navigate(-1)} content="wróć do strony głównej" />
      </Container>
    </div>
  );
};

export default AboutSubpage;
