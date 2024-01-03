import styles from "./Dot.module.scss";
import clsx from "clsx";
import PropTypes from "prop-types";

const Dot = ({ isActive }) => (
  <span className={clsx(styles.dot, isActive ? styles.active : "")}></span>
);

Dot.propTypes = {
  isActive: PropTypes.bool,
};

export default Dot;
