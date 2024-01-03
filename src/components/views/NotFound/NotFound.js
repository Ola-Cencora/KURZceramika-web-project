import Button from "../../common/Button/Button";
import { Link } from "react-router-dom";
import styles from "./NotFound.module.scss";

const NotFound = () => (
  <div className={styles.notFound}>
    <p>Ups... nie ma takiej strony!</p>
    <Link to="/">
      <Button content="wróć do strony głównej" />
    </Link>
  </div>
);

export default NotFound;