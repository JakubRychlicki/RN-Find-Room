import firebase from "firebase";
import React, { useState, useCallback, createRef } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { Formik } from "formik";

import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import ErrorText from "../../components/UI/ErrorText";

import validationSchema from "../../services/validation/loginValidation";

import { AppStyles } from "../../constants/AppStyles";

const initialValues = { email: "", password: "" };

const Login = () => {
  const [loginError, setLoginError] = useState(false);
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
          const { email, password } = values;
          firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {})
            .catch((err) => setLoginError(true));
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
            {loginError ? (
              <ErrorText align="center">
                Nieprawidłowy email lub hasło.
              </ErrorText>
            ) : null}
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
    paddingBottom: 10,
  },
  submitBtn: {
    marginTop: 10,
    width: AppStyles.buttonWidth.half,
    alignSelf: "center",
  },
});

export default Login;
