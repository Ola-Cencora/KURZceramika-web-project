import styles from "./Navigation.module.scss";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Offcanvas } from "react-bootstrap";
import Dot from "../../common/Dot/Dot";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const [activeLink, setActiveLink] = useState('');
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleLinkClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveLink(id);
      setShowOffcanvas(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'gallery', 'contact', 'newsletter'];
      const scrollPosition = window.scrollY;

      if (scrollPosition <= window.innerHeight * 0.5) {
        setActiveLink('');
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

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* on screens bigger than medium */}
      <Navbar className={styles.navigation} fixed="top" expand="md">
        <Navbar.Brand>
          <img
            src={`${process.env.PUBLIC_URL}/images/kurz-logo.svg`}
            alt="KURZ ceramika logo"
            className={styles.logo}
          />
        </Navbar.Brand>
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
            <Nav.Link className={styles.link}>
              <li onClick={() => handleLinkClick('about')}>
                <Dot isActive={activeLink === 'about'} />O mnie
              </li>
            </Nav.Link>
            <Nav.Link className={styles.link}>
              <li onClick={() => handleLinkClick('gallery')}>
                <Dot isActive={activeLink === 'gallery'} />
                Galeria
              </li>
            </Nav.Link>
            <Nav.Link className={styles.link}>
              <li onClick={() => handleLinkClick('contact')}>
                <Dot isActive={activeLink === 'contact'} />
                Kontakt
              </li>
            </Nav.Link>
            <Nav.Link className={styles.link}>
              <li onClick={() => handleLinkClick('newsletter')}>
                <Dot isActive={activeLink === 'contact'} />
                Newsletter
              </li>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* on screens smaller than medium */}
      <Offcanvas className={styles.offCanvasNavigation} placement="end" show={showOffcanvas} onHide={() => setShowOffcanvas(false)}>
        <Offcanvas.Header closeButton={false} className={styles.offcanvasHeader}>
          <FontAwesomeIcon icon={faX} onClick={() => setShowOffcanvas(false)} className={styles.closeIcon} />
        </Offcanvas.Header>
        <Offcanvas.Body className={styles.offcanvasBody}>
          <Nav className="flex-column">
            <Nav.Link className={styles.link}>
              <li onClick={() => handleLinkClick('about')}>
                <Dot isActive={activeLink === 'about'} />O mnie
              </li>
            </Nav.Link>
            <Nav.Link className={styles.link}>
              <li onClick={() => handleLinkClick('gallery')}>
                <Dot isActive={activeLink === 'gallery'} />
                Galeria
              </li>
            </Nav.Link>
            <Nav.Link className={styles.link}>
              <li onClick={() => handleLinkClick('contact')}>
                <Dot isActive={activeLink === 'contact'} />
                Kontakt
              </li>
            </Nav.Link>
            <Nav.Link className={styles.link}>
              <li onClick={() => handleLinkClick('newsletter')}>
                <Dot isActive={activeLink === 'contact'} />
                Newsletter
              </li>
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Navigation;