import React from "react";
import { Formik } from "formik";
import Button from "../components/Button";
import styles from "../styles/App.component.style";

import InputText from "../components/InputText";
import ErrorMsg from "../components/ErrorMsg";
import ClickAbleText from "../components/ClickAbleText";
import loginValidationSchema from "../formik/schemas/formikSchema";
import { ScrollView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import Background from "../components/Background";
import Header from "../components/Header";
import BackButton from "../components/BackButton";
import GalleryImagecomp from "../components/GalleryImage";
import Seperator from "../components/Seperator";
import ThirdPartyButton from "../components/ThirdPartyButton";
import { Paragraph } from "react-native-paper";
const LoginScreen = ({ navigation }) => {
  const onSubmit = () => {
    console.log("object");

    navigation.navigate("RegisterScreen");
  };
  return (
    <>
      <ScrollView>
        <Background>
          <BackButton goBack={navigation.goBack} />
          <StatusBar />
          <GalleryImagecomp address={require("../assets/images/mg.png")} />
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
                <View>
                  <InputText
                    name="email"
                    placeholder="Email "
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
                    <ClickAbleText
                      // navigate={navigation}
                      route={"RecoverAccount"}
                      linkText="Forgot Password?"
                    />
                  </View>
                  <Button onPress={handleSubmit} mode={"contained"}>
                    Login
                  </Button>
                </View>
              </>
            )}
          </Formik>
          <Seperator />
          <ThirdPartyButton title={"Login with Google    "} icon={"google"} />
          <ThirdPartyButton title={"Login with Facebook"} icon={"facebook"} />
          <View style={{ marginTop: 40, flexDirection: "row" }}>
            <Paragraph>Don't have an account?</Paragraph>
            <ClickAbleText linkText={"Click here"} />
          </View>
        </Background>
      </ScrollView>
    </>
  );
};
export default LoginScreen;
