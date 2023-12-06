import styles from './Button.module.scss';

const Button = ({ content, variant }) => {
    
    let buttonColor = styles.button;

    if(variant === 'gallery') {
        buttonColor = styles.buttonGallery;
    } else if (variant === 'top') {
        buttonColor = styles.buttonTop;
    }

    return (
        <button className={buttonColor}>
            {content}
        </button>
    );
};

export default Button;