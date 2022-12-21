import React from "react";
import { Formik } from "formik";
import Button from "../components/Button";
import styles from "../styles/App.component.style";
import InputText from "../components/InputText";
import ErrorMsg from "../components/ErrorMsg";
import loginValidationSchema from "../formik/schemas/formikSchema";
import { ScrollView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import Background from "../components/Background";
import Header from "../components/Header";
import BackButton from "../components/BackButton";
const RecoverAccount = ({ navigation }) => {
  const onSubmit = () => {
    navigation.navigate("LoginScreen");
  };
  return (
    <>
      <ScrollView>
        <Background>
          <BackButton goBack={navigation.goBack} />
          <StatusBar />

          <Header style={{ fontSize: 32 }}>Recover Your Account</Header>
          <Formik
            validationSchema={loginValidationSchema}
            initialValues={{ email: "" }}
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
                  placeholder="Enter Your Email Here!"
                  style={styles.textInputs}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  keyboardType="email-address"
                />

                {errors.email && <ErrorMsg value={errors.email} />}

                <Button onPress={handleSubmit} mode={"outlined"}>
                  Next
                </Button>
              </>
            )}
          </Formik>
        </Background>
      </ScrollView>
    </>
  );
};
export default RecoverAccount;
