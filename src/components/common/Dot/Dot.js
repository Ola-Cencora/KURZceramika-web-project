import styles from './Dot.module.scss';
import clsx from 'clsx';

const Dot = ({ isActive }) => {
    return (
        <span className={clsx(styles.dot, isActive ? styles.active : '')}></span>
    );
};

export default Dot;