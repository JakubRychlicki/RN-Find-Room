import * as yup from "yup";

export default validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(5).required(),
});
