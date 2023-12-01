import Navigation from "../../features/Navigation/Navigation";
import styles from './Header.module.scss';

const Header = ({ aboutRef, galleryRef, contactRef, newsletterRef }) => {
    
    return (
        <div className={styles.header}>
            <Navigation
                aboutRef={aboutRef}
                galleryRef={galleryRef}
                contactRef={contactRef}
                newsletterRef={newsletterRef}
            />
        </div>
    );
};

export default Header;