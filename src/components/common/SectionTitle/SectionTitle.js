import Dot from "../Dot/Dot";
import styles from "./SectionTitle.module.scss";
import PropTypes from "prop-types";

const SectionTitle = ({ title }) => {
  return (
    <div className={styles.row}>
      <h1 className={styles.title}>{title}</h1>
      <Dot />
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionTitle;
