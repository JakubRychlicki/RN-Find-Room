import firebase from "firebase";
import React, { createRef, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { Formik, ErrorMessage } from "formik";

import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import ErrorText from "../../components/UI/ErrorText";

import validationSchema from "../../services/validation/registerValidation";

import { AppStyles } from "../../constants/AppStyles";

const initialValues = {
  name: "",
  email: "",
  password: "",
  phoneNumber: "",
};

const Register = () => {
  const formikRef = createRef();

  useFocusEffect(
    useCallback(() => {
      if (formikRef.current) {
        formikRef.current?.setValues(initialValues);
      }
    })
  );

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={{ alignItems: "center" }}
    >
      <KeyboardAvoidingView behavior="height">
        <Formik
          innerRef={formikRef}
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            const { email, password, name, phoneNumber } = values;
            firebase
              .auth()
              .createUserWithEmailAndPassword(email, password)
              .then((result) => {
                firebase
                  .firestore()
                  .collection("users")
                  .doc(firebase.auth().currentUser.uid)
                  .set({
                    name,
                    email,
                    phoneNumber,
                  });
              });
          }}
        >
          {({ handleChange, handleSubmit, values, isValid, dirty }) => (
            <View style={styles.formContainer}>
              <Input
                styles={styles.input}
                width={AppStyles.textInputWidth.main}
                title="Pseudonim"
                onChangeText={handleChange("name")}
                value={values.name}
              />
              <ErrorMessage component={ErrorText} name="name" />
              <Input
                styles={styles.input}
                width={AppStyles.textInputWidth.main}
                keyboardType="email-address"
                title="E-mail"
                onChangeText={handleChange("email")}
                value={values.email}
              />
              <ErrorMessage component={ErrorText} name="email" />
              <Input
                styles={styles.input}
                width={AppStyles.textInputWidth.main}
                title="Twoje hasło"
                onChangeText={handleChange("password")}
                value={values.password}
                secureTextEntry={true}
              />
              <ErrorMessage component={ErrorText} name="password" />
              <Input
                styles={styles.input}
                width={AppStyles.textInputWidth.main}
                keyboardType="numeric"
                title="Numer telefonu"
                onChangeText={handleChange("phoneNumber")}
                value={values.phoneNumber}
              />
              <ErrorMessage component={ErrorText} name="phoneNumber" />
              <Button
                title="Załóż konto"
                disabled={!(isValid && dirty)}
                onPress={handleSubmit}
                styles={styles.submitBtn}
                size={18}
              />
            </View>
          )}
        </Formik>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
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
