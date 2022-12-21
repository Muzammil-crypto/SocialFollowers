import { TouchableOpacity, View, Text } from "react-native";
import React from "react";
import { Formik } from "formik";
import Button from "../components/Button";
import styles from "../styles/App.component.style";

import InputText from "../components/InputText";
import ErrorMsg from "../components/ErrorMsg";
import ClickAbleText from "../components/ClickAbleText";
import { ScrollView } from "react-native-gesture-handler";
import { theme } from "../utils/theme";
import { StatusBar } from "expo-status-bar";
import Background from "../components/Background";
import Header from "../components/Header";
import BackButton from "../components/BackButton";
import GalleryImagecomp from "../components/GalleryImage";
import Seperator from "../components/Seperator";
import ThirdPartyButton from "../components/ThirdPartyButton";
import { Paragraph } from "react-native-paper";
import SignupValidationSchema from "../formik/schemas/signupValidationSchema";
const RegisterScreen = ({ navigation }) => {
  const onSubmit = () => {
    console.log("object");

    navigation.navigate("LoginScreen");
  };
  return (
    <>
      <ScrollView>
        <Background>
          <BackButton goBack={navigation.goBack} />
          <StatusBar />
          <Header>Create Account</Header>

          <Formik
            validationSchema={SignupValidationSchema}
            initialValues={{ fullName: "", email: "", password: "" }}
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
                  placeholder="Name"
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
                  <ClickAbleText linkText="By clicking this you agree to our terms and conditions and privacy policy of using this app" />
                </View>
                <Button onPress={handleSubmit} mode={"contained"}>
                  SIgnUp
                </Button>
              </>
            )}
          </Formik>
          <Seperator />
          <ThirdPartyButton title={"Login with Google    "} icon={"google"} />
          <ThirdPartyButton title={"Login with Facebook"} icon={"facebook"} />
          <View style={{ marginTop: 40, flexDirection: "row" }}>
            <Text
              style={{ marginLeft: 20, marginRight: -15, fontStyle: "italic" }}
            >
              I already have an account?
            </Text>
            <ClickAbleText linkText={"Click here"} />
          </View>
        </Background>
      </ScrollView>
    </>
  );
};
export default RegisterScreen;
