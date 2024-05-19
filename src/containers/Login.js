import React, { useRef, useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Image,
  ScrollView,
  Platform,
  Alert,
} from "react-native";
import { useDispatch } from "react-redux";
import Styles from "../styles/Styles";
import GoogleIcons from "react-native-vector-icons/MaterialIcons";
import LoginForm from "../components/Form/LoginForm";
import { Formik } from "formik";
import * as Yup from "yup";
import { login } from "../store/actions/securityActions";

const Login = ({ navigation }) => {
  const scrollRef = useRef();
  const dispatch = useDispatch();

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().label("username").required(""),
    password: Yup.string().label("password").required(""),
  });

  const handleSubmit = (formProps) => {
    console.log("formProps", formProps);
    const { username, password } = formProps;
    if (username === "johnd" && password === "m38rmF$") {
      dispatch(login(formProps)).then((value) => {
        console.log("gelen", value);
        if (value) {
          // navigation.navigate("Home");
        }
      });
    } else {
      Alert.alert(
        "Hata",
        "Geçersiz kullanıcı adı veya şifre girdiniz 1 id'li kullanıcı ile giriş yapmayı deneyin.",
        [
          {
            text: "Ok",
          },
        ]
      );
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      enabled={false}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={Styles.ViewStyle}>
          <View style={{ flex: 1 }}>
            <Image
              style={{
                position: "absolute",
                width: Dimensions.get("window").width,
                height: Dimensions.get("window").width - 100,
              }}
              resizeMode="cover"
              source={require("../../assets/home.jpg")}
            />
          </View>
          <View style={styles.loginStyle}>
            <View style={{}}>
              <GoogleIcons
                name={"remove"}
                style={{
                  color: "gray",
                  fontSize: 30,
                }}
              />
            </View>
            <ScrollView
              ref={scrollRef}
              style={{
                width: "85%",
                flexDirection: "column",
              }}
              contentContainerStyle={{
                flexGrow: 1,
              }}
              keyboardShouldPersistTaps="handled"
            >
              <View style={{ flex: 1, justifyContent: "space-evenly" }}>
                <View style={{ alignItems: "center" }}>
                  <Text style={{ fontSize: 20 }}>HOŞGELDİNİZ</Text>
                </View>

                <View style={{ alignItems: "center" }}>
                  <Formik
                    enableReinitialize={true}
                    initialValues={initialValues}
                    onSubmit={(values) => {
                      handleSubmit(values);
                    }}
                    validationSchema={validationSchema}
                  >
                    {({
                      handleChange,
                      values,
                      handleSubmit,
                      errors,
                      isValid,
                      isSubmitting,
                      touched,
                      handleBlur,
                      setFieldValue,
                    }) => (
                      <>
                        <View style={{}}>
                          <LoginForm
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            setFieldValue={setFieldValue}
                            values={values}
                          />
                        </View>
                        <View
                          style={{
                            alignItems: "center",
                            justifyContent: "center",
                            marginBottom: 20,
                            color: "white",
                            padding: 10,
                            width: "100%",
                            top: 30,
                          }}
                        >
                          <TouchableOpacity
                            onPress={handleSubmit}
                            style={{
                              width: "50%",
                              height: 40,
                              backgroundColor: "#101090",
                              borderRadius: 50,
                            }}
                          >
                            <Text
                              style={{
                                color: "white",
                                fontSize: 20,
                                alignSelf: "center",
                                top: 3,
                              }}
                            >
                              {" "}
                              Giriş Yap
                            </Text>
                          </TouchableOpacity>
                          <View
                            style={{
                              flexDirection: "row",
                              justifyContent: "center",
                              top: 5,
                            }}
                          >
                            <Text>Üye değil misiniz?</Text>
                            <TouchableOpacity
                              onPress={() => navigation.navigate("Register")}
                            >
                              <Text
                                style={{
                                  color: "#101090",
                                  left: 10,
                                  fontWeight: "bold",
                                }}
                              >
                                Hesap Oluştur
                              </Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            marginVertical: 5,
                            position: "relative",
                            top: 30,
                          }}
                        >
                          <View
                            style={{
                              width: "5%",
                              height: 4,
                              borderRadius: 2,
                              backgroundColor: "#101090",
                            }}
                          />
                          <View
                            style={{
                              width: "5%",
                              height: 4,
                              borderRadius: 2,
                              backgroundColor: "gray",
                            }}
                          />
                          <View
                            style={{
                              width: "5%",
                              height: 4,
                              borderRadius: 2,
                              backgroundColor: "gray",
                            }}
                          />
                        </View>
                      </>
                    )}
                  </Formik>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  LoginFooter: {
    flex: 1,
    marginTop: 70,
    alignItems: "center",
  },

  LoginButtonStyle: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: "#4568e0",
    height: "100%",
  },
  ButtonContainerStyle: {
    height: 48,
    marginTop: 20,
  },
  loginStyle: {
    flex: 5,
    alignItems: "center",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: "white",
    opacity: 0.9,
  },
});
