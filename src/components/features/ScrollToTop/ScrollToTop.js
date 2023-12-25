import { useState, useEffect } from "react";
import Button from "../../common/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpLong } from "@fortawesome/free-solid-svg-icons";
import styles from "./ScrollToTop.module.scss";

const ScrollToTop = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.scroll}>
      {showScrollTopButton && (
        <div onClick={scrollTop}>
          <Button content={<FontAwesomeIcon icon={faUpLong} />} variant="top" />
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
