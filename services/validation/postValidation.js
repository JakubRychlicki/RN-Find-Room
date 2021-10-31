import * as yup from "yup";

export default validationSchema = yup.object().shape({
  title: yup.string().required("*Pole wymagane."),
  desc: yup.string().required("*Pole wymagane."),
  price: yup.string().required("*Pole wymagane."),
  city: yup.string().required("*Pole wymagane."),
  street: yup.string().required("*Pole wymagane."),
});
