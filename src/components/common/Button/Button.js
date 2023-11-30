import styles from './Button.module.scss';

const Button = ({ title, color }) => {
    
    const buttonColor = color === 'gallery' ? styles.buttonGallery : styles.button;

    return (
        <button className={buttonColor}>
            {title}
        </button>
    );
};

export default Button;