import Navigation from "../../features/Navigation/Navigation";
import styles from "./Header.module.scss";
import PropTypes from "prop-types";

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

Header.propTypes = {
  aboutRef: PropTypes.object.isRequired,
  galleryRef: PropTypes.object.isRequired,
  contactRef: PropTypes.object.isRequired,
  newsletterRef: PropTypes.object.isRequired,
};

export default Header;
