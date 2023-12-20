import styles from "./Navigation.module.scss";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Dot from "../../common/Dot/Dot";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleScroll = () => {
    const scrollPosition = window.scrollY + 100;
    const aboutSection = document.getElementById("about");
    const gallerySection = document.getElementById("gallery");
    const contactSection = document.getElementById("contact");
    const newsletterSection = document.getElementById("newsletter");

    const sections = [
      { id: "about", ref: aboutSection },
      { id: "gallery", ref: gallerySection },
      { id: "contact", ref: contactSection },
      { id: "newsletter", ref: newsletterSection },
    ];

    let activeSection = "";

    sections.forEach((section) => {
      if (section.ref && section.ref.offsetTop <= scrollPosition) {
        activeSection = section.id;
      }
    });

    setActiveLink(activeSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveLink(id);
    }
  };

  return (
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
        <FontAwesomeIcon icon={faBars} className={styles.burgerMenu} />
      </Navbar.Toggle>
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Nav className="ml-auto">
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
              <Dot isActive={activeLink === "newsletter"} />
              Newsletter
            </li>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
