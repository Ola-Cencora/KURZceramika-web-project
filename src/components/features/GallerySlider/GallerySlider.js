import Slider from "react-slick";
import styles from "./GallerySlider.module.scss";

const GallerySlider = () => {
  const settings = {
    infinite: true,
    speed: 5000,
    slidesToShow: 4,
    slidesToScroll: 0.5,
    autoplay: true,
    autoplaySpeed: -10,
    cssEase: "linear",
    pauseOnHover: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className={styles.photo}>
        <img
          src={`${process.env.PUBLIC_URL}/images/gallery/gallery-1.jpg`}
          alt="KURZ ceramika"
          className="w-100"
        />
      </div>
      <div className={styles.photo}>
        <img
          src={`${process.env.PUBLIC_URL}/images/gallery/gallery-2.jpg`}
          alt="KURZ ceramika"
          className="w-100"
        />
      </div>
      <div className={styles.photo}>
        <img
          src={`${process.env.PUBLIC_URL}/images/gallery/gallery-3.jpg`}
          alt="KURZ ceramika"
          className="w-100"
        />
      </div>
      <div className={styles.photo}>
        <img
          src={`${process.env.PUBLIC_URL}/images/gallery/gallery-4.jpg`}
          alt="KURZ ceramika"
          className="w-100"
        />
      </div>
      <div className={styles.photo}>
        <img
          src={`${process.env.PUBLIC_URL}/images/gallery/gallery-5.jpg`}
          alt="KURZ ceramika"
          className="w-100"
        />
      </div>
      <div className={styles.photo}>
        <img
          src={`${process.env.PUBLIC_URL}/images/gallery/gallery-6.jpg`}
          alt="KURZ ceramika"
          className="w-100"
        />
      </div>
      <div className={styles.photo}>
        <img
          src={`${process.env.PUBLIC_URL}/images/gallery/gallery-7.jpg`}
          alt="KURZ ceramika"
          className="w-100"
        />
      </div>
      <div className={styles.photo}>
        <img
          src={`${process.env.PUBLIC_URL}/images/gallery/gallery-8.jpg`}
          alt="KURZ ceramika"
          className="w-100"
        />
      </div>
      <div className={styles.photo}>
        <img
          src={`${process.env.PUBLIC_URL}/images/gallery/gallery-9.jpg`}
          alt="KURZ ceramika"
          className="w-100"
        />
      </div>
      <div className={styles.photo}>
        <img
          src={`${process.env.PUBLIC_URL}/images/gallery/gallery-10.jpg`}
          alt="KURZ ceramika"
          className="w-100"
        />
      </div>
      <div className={styles.photo}>
        <img
          src={`${process.env.PUBLIC_URL}/images/gallery/gallery-11.jpg`}
          alt="KURZ ceramika"
          className="w-100"
        />
      </div>
      <div className={styles.photo}>
        <img
          src={`${process.env.PUBLIC_URL}/images/gallery/gallery-12.jpg`}
          alt="KURZ ceramika"
          className="w-100"
        />
      </div>
      <div className={styles.photo}>
        <img
          src={`${process.env.PUBLIC_URL}/images/gallery/gallery-13.jpg`}
          alt="KURZ ceramika"
          className="w-100"
        />
      </div>
      <div className={styles.photo}>
        <img
          src={`${process.env.PUBLIC_URL}/images/gallery/gallery-14.jpg`}
          alt="KURZ ceramika"
          className="w-100"
        />
      </div>
      <div className={styles.photo}>
        <img
          src={`${process.env.PUBLIC_URL}/images/gallery/gallery-15.jpg`}
          alt="KURZ ceramika"
          className="w-100"
        />
      </div>
      <div className={styles.photo}>
        <img
          src={`${process.env.PUBLIC_URL}/images/gallery/gallery-16.jpg`}
          alt="KURZ ceramika"
          className="w-100"
        />
      </div>
      <div className={styles.photo}>
        <img
          src={`${process.env.PUBLIC_URL}/images/gallery/gallery-17.jpg`}
          alt="KURZ ceramika"
          className="w-100"
        />
      </div>
      <div className={styles.photo}>
        <img
          src={`${process.env.PUBLIC_URL}/images/gallery/gallery-18.jpg`}
          alt="KURZ ceramika"
          className="w-100"
        />
      </div>
      <div className={styles.photo}>
        <img
          src={`${process.env.PUBLIC_URL}/images/gallery/gallery-19.jpg`}
          alt="KURZ ceramika"
          className="w-100"
        />
      </div>
      <div className={styles.photo}>
        <img
          src={`${process.env.PUBLIC_URL}/images/gallery/gallery-20.jpg`}
          alt="KURZ ceramika"
          className="w-100"
        />
      </div>
      <div className={styles.photo}>
        <img
          src={`${process.env.PUBLIC_URL}/images/gallery/gallery-21.jpg`}
          alt="KURZ ceramika"
          className="w-100"
        />
      </div>
      <div className={styles.photo}>
        <img
          src={`${process.env.PUBLIC_URL}/images/gallery/gallery-22.jpg`}
          alt="KURZ ceramika"
          className="w-100"
        />
      </div>
      <div className={styles.photo}>
        <img
          src={`${process.env.PUBLIC_URL}/images/gallery/gallery-23.jpg`}
          alt="KURZ ceramika"
          className="w-100"
        />
      </div>
      <div className={styles.photo}>
        <img
          src={`${process.env.PUBLIC_URL}/images/gallery/gallery-24.jpg`}
          alt="KURZ ceramika"
          className="w-100"
        />
      </div>
      <div className={styles.photo}>
        <img
          src={`${process.env.PUBLIC_URL}/images/gallery/gallery-25.jpg`}
          alt="KURZ ceramika"
          className="w-100"
        />
      </div>
      <div className={styles.photo}>
        <img
          src={`${process.env.PUBLIC_URL}/images/gallery/gallery-26.jpg`}
          alt="KURZ ceramika"
          className="w-100"
        />
      </div>
      <div className={styles.photo}>
        <img
          src={`${process.env.PUBLIC_URL}/images/gallery/gallery-27.jpg`}
          alt="KURZ ceramika"
          className="w-100"
        />
      </div>
      <div className={styles.photo}>
        <img
          src={`${process.env.PUBLIC_URL}/images/gallery/gallery-28.jpg`}
          alt="KURZ ceramika"
          className="w-100"
        />
      </div>
      <div className={styles.photo}>
        <img
          src={`${process.env.PUBLIC_URL}/images/gallery/gallery-29.jpg`}
          alt="KURZ ceramika"
          className="w-100"
        />
      </div>
      <div className={styles.photo}>
        <img
          src={`${process.env.PUBLIC_URL}/images/gallery/gallery-30.jpg`}
          alt="KURZ ceramika"
          className="w-100"
        />
      </div>
      <div className={styles.photo}>
        <img
          src={`${process.env.PUBLIC_URL}/images/gallery/gallery-31.jpg`}
          alt="KURZ ceramika"
          className="w-100"
        />
      </div>
      <div className={styles.photo}>
        <img
          src={`${process.env.PUBLIC_URL}/images/gallery/gallery-32.jpg`}
          alt="KURZ ceramika"
          className="w-100"
        />
      </div>
      <div className={styles.photo}>
        <img
          src={`${process.env.PUBLIC_URL}/images/gallery/gallery-33.jpg`}
          alt="KURZ ceramika"
          className="w-100"
        />
      </div>
      <div className={styles.photo}>
        <img
          src={`${process.env.PUBLIC_URL}/images/gallery/gallery-34.jpg`}
          alt="KURZ ceramika"
          className="w-100"
        />
      </div>
      <div className={styles.photo}>
        <img
          src={`${process.env.PUBLIC_URL}/images/gallery/gallery-35.jpg`}
          alt="KURZ ceramika"
          className="w-100"
        />
      </div>
      <div className={styles.photo}>
        <img
          src={`${process.env.PUBLIC_URL}/images/gallery/gallery-36.jpg`}
          alt="KURZ ceramika"
          className="w-100"
        />
      </div>
      <div className={styles.photo}>
        <img
          src={`${process.env.PUBLIC_URL}/images/gallery/gallery-37.jpg`}
          alt="KURZ ceramika"
          className="w-100"
        />
      </div>
      <div className={styles.photo}>
        <img
          src={`${process.env.PUBLIC_URL}/images/gallery/gallery-38.jpg`}
          alt="KURZ ceramika"
          className="w-100"
        />
      </div>
      <div className={styles.photo}>
        <img
          src={`${process.env.PUBLIC_URL}/images/gallery/gallery-39.jpg`}
          alt="KURZ ceramika"
          className="w-100"
        />
      </div>
      <div className={styles.photo}>
        <img
          src={`${process.env.PUBLIC_URL}/images/gallery/gallery-40.jpg`}
          alt="KURZ ceramika"
          className="w-100"
        />
      </div>
      <div className={styles.photo}>
        <img
          src={`${process.env.PUBLIC_URL}/images/gallery/gallery-41.jpg`}
          alt="KURZ ceramika"
          className="w-100"
        />
      </div>
    </Slider>
  );
};

export default GallerySlider;
