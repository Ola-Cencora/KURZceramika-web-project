import styles from './Navigation.module.scss';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Dot from '../../common/Dot/Dot';

const Navigation = ({ scrollToSection, aboutRef, galleryRef, contactRef, newsletterRef }) => {
    return (
        <Navbar className={styles.navigation}>
            <Navbar.Brand>logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav className="ml-auto">
                    <Nav.Link className={styles.link}>
                        <li onClick={() => scrollToSection(aboutRef)}>
                            <Dot />
                            O mnie
                        </li>
                    </Nav.Link>
                    <Nav.Link className={styles.link}>
                        <li onClick={() => scrollToSection(galleryRef)}>
                            <Dot />
                            Galeria
                        </li>
                    </Nav.Link>
                    <Nav.Link className={styles.link}>
                        <li onClick={() => scrollToSection(contactRef)}>
                            <Dot />
                            Kontakt
                        </li>
                    </Nav.Link>
                    <Nav.Link className={styles.link}>
                        <li onClick={() => scrollToSection(newsletterRef)}>
                            <Dot />
                            Newsletter
                        </li>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;