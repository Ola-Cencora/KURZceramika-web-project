import styles from "./Button.module.scss";
import PropTypes from "prop-types";

const Button = ({ content, variant }) => {
  let buttonColor = styles.button;

  if (variant === "gallery") {
    buttonColor = styles.buttonGallery;
  } else if (variant === "top") {
    buttonColor = styles.buttonTop;
  }

  return <button className={buttonColor}>{content}</button>;
};

Button.propTypes = {
  content: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["gallery", "top"]).isRequired,
};

export default Button;
