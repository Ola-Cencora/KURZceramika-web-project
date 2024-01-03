import Button from "../../common/Button/Button";
import GallerySlider from "../../features/GallerySlider/GallerySlider";
import { Row, Col } from "react-bootstrap";
import clsx from "clsx";
import styles from "./Gallery.module.scss";

const Gallery = () => (
  <div id="gallery">
    <div className={clsx(styles.gallery, "container-fluid")}>
      <Row>
        <Col
          lg={6}
          xs={12}
          className={clsx(styles.left, "order-1 container-fluid")}
        >
          <a href="https://www.instagram.com/kurz.ceramika/">
            <Button
              content="zobacz więcej zdjęć na Instagramie"
              variant="gallery"
              className={styles.button}
            />
          </a>
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

export default Gallery;
