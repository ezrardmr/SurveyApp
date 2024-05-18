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
} from "react-native";
import { useDispatch } from "react-redux";
import Styles from "../styles/Styles";
import GoogleIcons from "react-native-vector-icons/MaterialIcons";
import { Formik } from "formik";
import * as Yup from "yup";
import RegisterForm from "../components/Form/RegisterForm";

const Register = ({ navigation }) => {
  const scrollRef = useRef();
  const dispatch = useDispatch();

  const initialValues = {
    nickName: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    nickName: Yup.string().label("nickName").required(""),
    password: Yup.string().label("password").required(""),
  });

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
          <View
            style={{
              flex: 6,
              alignItems: "center",
              justifyContent: "center",
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
              backgroundColor: "white",
              opacity: 0.9,
            }}
          >
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
              <View style={{ alignItems: "flex-start" }}>
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                  Cinsiyetinizi Seçiniz
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                }}
              >
                <TouchableOpacity
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    borderColor: "white",
                    borderWidth: 1,
                    borderRadius: 8,
                    width: 60,
                    height: 50,
                    backgroundColor: "white",
                    marginBottom: 10,
                  }}
                >
                  <Text style={{ color: "black" }}>Kadın</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    borderColor: "white",
                    borderWidth: 1,
                    borderRadius: 8,
                    width: 60,
                    height: 50,
                    backgroundColor: "white",
                    marginBottom: 10,
                  }}
                >
                  <Text style={{ color: "black" }}>Erkek</Text>
                </TouchableOpacity>
              </View>

              <View style={{ flex: 5, alignItems: "center" }}>
                <View style={{ flex: 1 }}>
                  <Formik
                    enableReinitialize={true}
                    initialValues={initialValues}
                    onSubmit={(values) => {
                      handleSubmit(values);
                    }}
                    validator={validationSchema}
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
                        <RegisterForm
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                          setFieldValue={setFieldValue}
                          values={values}
                        />
                        <View>
                          <TouchableOpacity
                            onPress={() => navigation.navigate("Kvkk")}
                            style={{
                              alignItems: "center",
                              justifyContent: "center",
                              width: "50%",
                              backgroundColor: "#101090",
                              borderRadius: 50,
                              color: "white",
                              padding: 10,
                              left: "25%",
                            }}
                          >
                            <Text style={{ color: "white", fontSize: 20 }}>
                              {" "}
                              İLERLE
                            </Text>
                          </TouchableOpacity>
                          <View
                            style={{
                              flexDirection: "row",
                              justifyContent: "center",
                              top: 5,
                            }}
                          >
                            <Text>Hesabınız var mı?</Text>
                            <TouchableOpacity
                              onPress={() => navigation.navigate("Login")}
                            >
                              <Text
                                style={{
                                  color: "#101090",
                                  left: 10,
                                  fontWeight: "bold",
                                }}
                              >
                                Giriş Yap
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
                            top: 5,
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

export default Register;

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
    justifyContent: "center",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: "white",
    opacity: 0.9,
  },
});
