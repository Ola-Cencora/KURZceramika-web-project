import SectionTitle from "../../common/SectionTitle/SectionTitle";
import Button from "../../common/Button/Button";
import SuccessInfo from "../../views/SuccessInfo/SuccessInfo";
import { Form } from "react-bootstrap";
import styles from "./Contact.module.scss";
import { Fade } from "react-awesome-reveal";
import { useForm } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xkndrpkl");

  return (
    <Fade cascade direction="up" triggerOnce>
      <SectionTitle title="kontakt" />
      {state.succeeded ? (
        <SuccessInfo />
      ) : (
        <Form onSubmit={handleSubmit} className={styles.form}>
          <Form.Group className="my-2">
            <Form.Control
              type="text"
              name="name"
              required
              placeholder="Twoje imię"
              autoComplete="off"
              className={styles.input}
            />
          </Form.Group>
          <Form.Group className="my-2">
            <Form.Control
              type="email"
              name="email"
              required
              placeholder="Twój email"
              autoComplete="off"
              className={styles.input}
            />
          </Form.Group>
          <Form.Group className="my-2">
            <Form.Control
              name="message"
              as="textarea"
              type="text"
              required
              rows={10}
              placeholder="Twoje pytanie"
              className={styles.input}
            />
          </Form.Group>
          <Button type="submit" content="wyślij" />
        </Form>
      )}
    </Fade>
  );
};

export default Contact;
