import SectionTitle from "../../common/SectionTitle/SectionTitle";
import Button from "../../common/Button/Button";
import { Form } from "react-bootstrap";
import { useState } from "react";
import styles from "./Newsletter.module.scss"

const Newsletter = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <SectionTitle title="newsletter" />
      <Form noValidate validated={validated} onSubmit={handleSubmit} className={styles.form}>
        <Form.Group className="my-2">
          <Form.Control required type="text" placeholder="Twoje imię" className={styles.input} />
          <Form.Control.Feedback type="invalid">
            Halo! Jak Ci na imię? :)
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="my-2">
          <Form.Control required type="email" placeholder="Twój email" className={styles.input} />
          <Form.Control.Feedback type="invalid">
            Halo! Pamiętaj o podaniu adresu email w formacie abc@xyz.com :)
          </Form.Control.Feedback>
        </Form.Group>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Button type="submit" content="zapisz się" />
      </Form>
    </>
  );
};

export default Newsletter;
