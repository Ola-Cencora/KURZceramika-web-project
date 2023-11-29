import styles from './Navigation.module.scss';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Dot from '../../common/Dot/Dot';
import { useState, useEffect } from 'react';

const Navigation = ({ scrollToSection, aboutRef, galleryRef, contactRef, newsletterRef }) => {
    const [activeLink, setActiveLink] = useState('');

    const handleScroll = () => {
        const scrollPosition = window.scrollY;

        if (
        scrollPosition >= newsletterRef.current.offsetTop &&
        scrollPosition < newsletterRef.current.offsetTop + newsletterRef.current.offsetHeight
        ) {
        setActiveLink('newsletter');
        } else if (
        scrollPosition >= contactRef.current.offsetTop &&
        scrollPosition < contactRef.current.offsetTop + contactRef.current.offsetHeight
        ) {
        setActiveLink('contact');
        } else if (
        scrollPosition >= galleryRef.current.offsetTop &&
        scrollPosition < galleryRef.current.offsetTop + galleryRef.current.offsetHeight
        ) {
        setActiveLink('gallery');
        } else if (
        scrollPosition >= aboutRef.current.offsetTop &&
        scrollPosition < aboutRef.current.offsetTop + aboutRef.current.offsetHeight
        ) {
        setActiveLink('about');
        } else {
        setActiveLink('');
        }
    };

    const handleLinkClick = (linkName, sectionRef) => {
        setActiveLink(linkName);
        if (sectionRef && scrollToSection) {
            scrollToSection(sectionRef);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Navbar className={styles.navigation} fixed="top">
            <Navbar.Brand>logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav className="ml-auto">
                    <Nav.Link className={styles.link}>
                        <li onClick={() => handleLinkClick('about', aboutRef)}>
                            <Dot isActive={activeLink === 'about'} />
                            O mnie
                        </li>
                    </Nav.Link>
                    <Nav.Link className={styles.link}>
                        <li onClick={() => handleLinkClick('gallery', galleryRef)}>
                            <Dot isActive={activeLink === 'gallery'} />
                            Galeria
                        </li>
                    </Nav.Link>
                    <Nav.Link className={styles.link}>
                        <li onClick={() => handleLinkClick('contact', contactRef)}>
                            <Dot isActive={activeLink === 'contact'} />
                            Kontakt
                        </li>
                    </Nav.Link>
                    <Nav.Link className={styles.link}>
                        <li onClick={() => handleLinkClick('newsletter', newsletterRef)}>
                            <Dot isActive={activeLink === 'newsletter'} />
                            Newsletter
                        </li>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;