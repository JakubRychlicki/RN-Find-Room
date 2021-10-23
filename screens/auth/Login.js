import React, { useCallback, createRef } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";

import { AppStyles } from "../../constants/AppStyles";

const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(5).required(),
});

const initialValues = { email: "", password: "" };

const Login = () => {
  const formikRef = createRef();

  useFocusEffect(
    useCallback(() => {
      if (formikRef.current) {
        formikRef.current?.setValues(initialValues);
      }
    })
  );

  return (
    <View style={styles.screen}>
      <Formik
        innerRef={formikRef}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleChange, handleSubmit, values, isValid, dirty }) => (
          <View style={styles.formContainer}>
            <Input
              styles={styles.input}
              width={AppStyles.textInputWidth.main}
              keyboardType="email-address"
              title="E-mail"
              onChangeText={handleChange("email")}
              value={values.email}
            />
            <Input
              styles={styles.input}
              width={AppStyles.textInputWidth.main}
              title="Twoje hasło"
              onChangeText={handleChange("password")}
              value={values.password}
              secureTextEntry={true}
            />
            <Button
              title="Zaloguj się"
              disabled={!(isValid && dirty)}
              onPress={handleSubmit}
              styles={styles.submitBtn}
              size={18}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  formContainer: {
    paddingTop: 20,
  },
  input: {
    paddingBottom: 20,
  },
  submitBtn: {
    width: AppStyles.buttonWidth.auth,
    alignSelf: "center",
  },
});
