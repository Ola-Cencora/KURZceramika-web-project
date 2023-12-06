import Button from "../../common/Button/Button";
import { Row, Col } from "react-bootstrap";
import clsx from "clsx";
import styles from './Gallery.module.scss'

const Gallery = () => {
    return (
        <div className={styles.gallery}>
            <Row>
                <Col lg={6} xs={12} className={clsx(styles.left, 'order-1')}>
                    <Button content="zobacz więcej na Instagramie" variant="gallery" className={styles.button} />
                </Col>
                <Col lg={6} xs={12} className={clsx(styles.right, 'd-none d-lg-block order-2')}></Col>
            </Row>
        </div>
    );
};

export default Gallery;