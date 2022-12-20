import { TouchableOpacity, View } from "react-native";
import React from "react";
import { Formik } from "formik";
import Button from "../components/Button";
import styles from "../styles/App.component.style";

import InputText from "../components/InputText";
import ErrorMsg from "../components/ErrorMsg";
import ClickAbleText from "../components/ClickAbleText";
import loginValidationSchema from "../formik/schemas/formikSchema";
import { ScrollView } from "react-native-gesture-handler";
import { theme } from "../utils/theme";
import { StatusBar } from "expo-status-bar";
import Background from "../components/Background";
import Header from "../components/Header";
import BackButton from "../components/BackButton";
const LoginScreen = ({ navigation }) => {
  const onSubmit = () => {
    console.log("object");

    navigation.navigate("RegisterScreen");
  };
  return (
    <>
      <ScrollView>
        <Background>
          <BackButton />

          <StatusBar />
          <Header>Login with your Email</Header>
          <Formik
            validationSchema={loginValidationSchema}
            initialValues={{ email: "", password: "" }}
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
                  <TouchableOpacity>
                    <ClickAbleText linkText="Forgot Password?" />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <ClickAbleText linkText="Don't have an account?" />
                  </TouchableOpacity>
                </View>
                <Button onPress={handleSubmit} mode={"contained"}>
                  Submit
                </Button>
              </>
            )}
          </Formik>
        </Background>
      </ScrollView>
    </>
  );
};
export default LoginScreen;
