import Dot from '../Dot/Dot';
import styles from './SectionTitle.module.scss'

const SectionTitle = ({ title }) => {
    return (
        <div className={styles.row}>
            <h1 className={styles.title}>{title}</h1>
            <Dot />
        </div>
    );
};

export default SectionTitle;