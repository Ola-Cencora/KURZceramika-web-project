import SectionTitle from "../../common/SectionTitle/SectionTitle";
import Button from "../../common/Button/Button";
import { Form } from "react-bootstrap";
import styles from "./Contact.module.scss";
import { useFormik } from "formik";
import * as yup from "yup";

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      request: "",
    },

    validationSchema: yup.object({
      name: yup.string().required("Halo! Jak Ci na imię? :)"),
      email: yup
        .string()
        .email("Halo! Pamiętaj o prawidłowym adresie email :)")
        .required("Halo! Pamiętaj o prawidłowym adresie email :)"),
      request: yup.string().required("Halo! Jakie masz pytanie? :)"),
    }),

    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <SectionTitle title="kontakt" />
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
        <Form.Group className="my-2">
          <Form.Control
            name="request"
            value={formik.values.request}
            onChange={formik.handleChange}
            as="textarea"
            rows={10}
            placeholder={
              formik.touched.request && formik.errors.request
                ? formik.errors.request
                : "Twoje pytanie"
            }
            className={
              formik.touched.request && formik.errors.request
                ? styles.inputInvalid
                : styles.input
            }
            onBlur={formik.handleBlur}
          />
        </Form.Group>
        <Button type="submit" content="wyślij" />
      </Form>
    </>
  );
};

export default Contact;
