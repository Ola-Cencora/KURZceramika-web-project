import styles from "./Button.module.scss";
import PropTypes from "prop-types";

const Button = ({ content, variant, onClick }) => {
  let buttonColor = styles.button;

  if (variant === "gallery") {
    buttonColor = styles.buttonGallery;
  } else if (variant === "top") {
    buttonColor = styles.buttonTop;
  } else if (variant === "more") {
    buttonColor = styles.buttonMore;
  }

  return <button className={buttonColor} onClick={onClick}>{content}</button>;
};

Button.propTypes = {
  content: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["gallery", "top", "more"]),
  onClick: PropTypes.func,
};

export default Button;
