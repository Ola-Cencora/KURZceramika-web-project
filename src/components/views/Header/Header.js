import Navigation from "../../features/Navigation/Navigation";
import styles from "./Header.module.scss";

const Header = () => (
  <div className={styles.header}>
    <Navigation />
  </div>
);

export default Header;
