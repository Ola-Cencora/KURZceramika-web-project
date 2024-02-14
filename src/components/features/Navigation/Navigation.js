import styles from "./Navigation.module.scss";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Offcanvas } from "react-bootstrap";
import Dot from "../../common/Dot/Dot";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";
import { Fade } from "react-awesome-reveal";

const Navigation = () => {
  const [activeLink, setActiveLink] = useState("");
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleLinkClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveLink(id);
      setShowOffcanvas(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "gallery", "contact", "newsletter"];
      const scrollPosition = window.scrollY;

      if (scrollPosition <= window.innerHeight * 0.5) {
        setActiveLink("");
      }

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const { top, bottom } = section.getBoundingClientRect();

          if (top - 100 <= 0 && bottom >= 100) {
            setActiveLink(sectionId);
          }
        }
      });
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
    <>
      {/* on screens bigger than medium */}
      <Navbar className={styles.navigation} fixed="top" expand="md">
        <Fade direction="up" triggerOnce>
          <Navbar.Brand>
            <img
              src={`${process.env.PUBLIC_URL}/images/kurz-logo.svg`}
              alt="KURZ ceramika logo"
              className={styles.logo}
              onClick={scrollTop}
            />
          </Navbar.Brand>
        </Fade>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className={styles.icon}
        >
          <FontAwesomeIcon
            icon={faBars}
            className={styles.burgerMenu}
            onClick={() => setShowOffcanvas(true)}
          />
        </Navbar.Toggle>
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end d-none d-md-block"
        >
          <Nav className="ml-auto">
            <Fade cascade damping={0.1} direction="up" triggerOnce>
              <Nav.Link className={styles.link}>
                <li onClick={() => handleLinkClick("about")}>
                  <Dot isActive={activeLink === "about"} />O mnie
                </li>
              </Nav.Link>
              <Nav.Link className={styles.link}>
                <li onClick={() => handleLinkClick("gallery")}>
                  <Dot isActive={activeLink === "gallery"} />
                  Galeria
                </li>
              </Nav.Link>
              <Nav.Link className={styles.link}>
                <li onClick={() => handleLinkClick("contact")}>
                  <Dot isActive={activeLink === "contact"} />
                  Kontakt
                </li>
              </Nav.Link>
              <Nav.Link className={styles.link}>
                <li onClick={() => handleLinkClick("newsletter")}>
                  <Dot isActive={activeLink === "contact"} />
                  Newsletter
                </li>
              </Nav.Link>
            </Fade>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* on screens smaller than medium */}
      <Offcanvas
        className={styles.offCanvasNavigation}
        placement="end"
        show={showOffcanvas}
        onHide={() => setShowOffcanvas(false)}
      >
        <Offcanvas.Header
          closeButton={false}
          className={styles.offcanvasHeader}
        >
          <FontAwesomeIcon
            icon={faX}
            onClick={() => setShowOffcanvas(false)}
            className={styles.closeIcon}
          />
        </Offcanvas.Header>
        <Offcanvas.Body className={styles.offcanvasBody}>
          <Nav className="flex-column">
            <Fade cascade damping={0.01} direction="up" triggerOnce>
              <Nav.Link className={styles.link}>
                <li onClick={() => handleLinkClick("about")}>
                  <Dot isActive={activeLink === "about"} />O mnie
                </li>
              </Nav.Link>
              <Nav.Link className={styles.link}>
                <li onClick={() => handleLinkClick("gallery")}>
                  <Dot isActive={activeLink === "gallery"} />
                  Galeria
                </li>
              </Nav.Link>
              <Nav.Link className={styles.link}>
                <li onClick={() => handleLinkClick("contact")}>
                  <Dot isActive={activeLink === "contact"} />
                  Kontakt
                </li>
              </Nav.Link>
              <Nav.Link className={styles.link}>
                <li onClick={() => handleLinkClick("newsletter")}>
                  <Dot isActive={activeLink === "contact"} />
                  Newsletter
                </li>
              </Nav.Link>
              <div>
                <ul className={styles.iconsList}>
                  <li>
                    <a href="https://www.instagram.com/kurz.ceramika/">
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className={styles.icon}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/kurz.ceramika/">
                      <FontAwesomeIcon
                        icon={faFacebookSquare}
                        className={styles.icon}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </Fade>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Navigation;
