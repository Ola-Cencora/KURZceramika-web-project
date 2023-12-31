import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
  <footer className={styles.footer}>
    <div>
      <ul className={styles.iconsList}>
        <li>
          <a href="https://www.instagram.com/kurz.ceramika/">
            <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/kurz.ceramika/">
            <FontAwesomeIcon icon={faFacebookSquare} className={styles.icon} />
          </a>
        </li>
      </ul>
    </div>
    <div className={styles.copyright}>
      <p>design & code by Ola Cencora</p>
    </div>
  </footer>
);

export default Footer;
