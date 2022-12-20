import { TouchableOpacity, View } from "react-native";
import React from "react";
import { Formik } from "formik";
import Button from "../components/Button";
import styles from "../styles/App.component.style";

import InputText from "../components/InputText";
import ErrorMsg from "../components/ErrorMsg";
import ClickAbleText from "../components/ClickAbleText";
import { ScrollView } from "react-native-gesture-handler";
import SignupValidationSchema from "../formik/schemas/signupValidationSchema";
const RegisterScreen = ({ navigation }) => {
  const onSubmit = () => {
    console.log("object");

    navigation.navigate("LoginScreen");
  };
  const goToScreen = () => {
    //  console.log("object");

    navigation.navigate("LoginScreen");
  };
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.loginContainer}>
            <Formik
              validationSchema={SignupValidationSchema}
              initialValues={{
                fullName: "",
                email: "",
                phoneNumber: "",
                password: "",
                confirmPassword: "",
              }}
              onSubmit={onSubmit}
            >
              {({
                handleChange,
                handleBlur,
                values,
                errors,

                handleSubmit,
              }) => (
                <>
                  <InputText
                    name="fullName"
                    placeholder="Full Name"
                    style={styles.textInputs}
                    onChangeText={handleChange("fullName")}
                    onBlur={handleBlur("fullName")}
                    value={values.fullName}
                    keyboardType="default"
                  />

                  {errors.fullName && <ErrorMsg value={errors.fullName} />}
                  <InputText
                    name="email"
                    placeholder="Email Address"
                    style={styles.textInputs}
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                    keyboardType="email-address"
                  />

                  {errors.email && <ErrorMsg value={errors.email} />}
                  <InputText
                    name="phoneNumber"
                    placeholder="Mobile Number"
                    style={styles.textInputs}
                    onChangeText={handleChange("phoneNumber")}
                    onBlur={handleBlur("phoneNumber")}
                    value={values.phoneNumber}
                    keyboardType="phone-pad"
                  />

                  {errors.phoneNumber && (
                    <ErrorMsg value={errors.phoneNumber} />
                  )}
                  <InputText
                    name="password"
                    placeholder="Password"
                    style={styles.textInputs}
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                    secureTextEntry
                  />
                  {errors.password && <ErrorMsg value={errors.password} />}

                  <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity onPress={goToScreen}>
                      <ClickAbleText linkText="Already have an account?" />
                    </TouchableOpacity>
                  </View>
                  <Button mode={"outlined"}>Submit</Button>
                </>
              )}
            </Formik>
          </View>
        </View>
      </ScrollView>
    </>
  );
};
export default RegisterScreen;
