import * as yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export default validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(4, "*Pole musi się składać z min.4 znaków.")
    .required("*Pole wymagane."),
  email: yup
    .string()
    .email("*Nieprawidłowy adres email.")
    .required("*Pole wymagane."),
  password: yup
    .string()
    .min(5, "*Pole musi się składać z min.5 znaków.")
    .required("*Pole wymagane."),
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, "*Nieprawidłowy numer telefonu.")
    .min(9)
    .max(9)
    .required("*Pole wymagane."),
});
