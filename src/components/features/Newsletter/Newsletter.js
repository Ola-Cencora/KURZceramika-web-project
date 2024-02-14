import SectionTitle from "../../common/SectionTitle/SectionTitle";
import Button from "../../common/Button/Button";
import { Form } from "react-bootstrap";
import styles from "./Newsletter.module.scss";
import { useFormik } from "formik";
import * as yup from "yup";
import { Fade } from "react-awesome-reveal";

const Newsletter = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },

    validationSchema: yup.object({
      name: yup.string().required("Halo! Jak Ci na imię? :)"),
      email: yup
        .string()
        .email("Halo! Pamiętaj o prawidłowym adresie email :)")
        .required("Halo! Pamiętaj o prawidłowym adresie email :)"),
    }),

    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Fade cascade direction="up" triggerOnce>
      <SectionTitle title="newsletter" />
      <Form noValidate onSubmit={formik.handleSubmit} className={styles.form}>
        <Form.Group className="my-2">
          <Form.Control
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            placeholder={
              formik.touched.name && formik.errors.name
                ? formik.errors.name
                : "Twoje imię"
            }
            className={
              formik.touched.name && formik.errors.name
                ? styles.inputInvalid
                : styles.input
            }
            onBlur={formik.handleBlur}
          />
        </Form.Group>
        <Form.Group className="my-2">
          <Form.Control
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder={
              formik.touched.email && formik.errors.email
                ? formik.errors.email
                : "Twój email"
            }
            className={
              formik.touched.email && formik.errors.email
                ? styles.inputInvalid
                : styles.input
            }
            onBlur={formik.handleBlur}
          />
        </Form.Group>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Button type="submit" content="zapisz się" />
      </Form>
    </Fade>
  );
};

export default Newsletter;
