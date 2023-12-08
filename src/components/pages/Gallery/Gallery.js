import Button from "../../common/Button/Button";
import GallerySlider from "../../features/GallerySlider/GallerySlider";
import { Row, Col } from "react-bootstrap";
import clsx from "clsx";
import styles from "./Gallery.module.scss";

const Gallery = () => {
  return (
    <div>
      <div className={clsx(styles.gallery, "container-fluid")}>
        <Row>
          <Col
            lg={6}
            xs={12}
            className={clsx(styles.left, "order-1 container-fluid")}
          >
            <Button
              content="zobacz więcej na Instagramie"
              variant="gallery"
              className={styles.button}
            />
          </Col>
          <Col
            lg={6}
            xs={12}
            className={clsx(
              styles.right,
              "d-none d-lg-block order-2 container-fluid"
            )}
          ></Col>
        </Row>
      </div>
      <GallerySlider />
    </div>
  );
};

export default Gallery;
