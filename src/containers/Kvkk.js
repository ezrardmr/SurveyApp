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
import LoginForm from "../components/Form/LoginForm";
import { Formik } from "formik";
import { login } from "../store/actions/securityActions";

const Kvkk = ({ navigation }) => {
  const scrollRef = useRef();
  const dispatch = useDispatch();

  const handleSubmit = (formProps) => {
    console.log("formProps", formProps);
    const { username, password } = formProps;

    dispatch(login(formProps)).then((value) => {
      console.log("gelen", value);
      if (value) {
      }
    });
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
                width: "90%",
                flexDirection: "column",
              }}
              contentContainerStyle={{
                flexGrow: 1,
              }}
              keyboardShouldPersistTaps="handled"
            >
              <View
                style={{
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <View style={{ flex: 2, alignItems: "center", top: 20 }}>
                  <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    Hassas Veriler Hakkında
                  </Text>
                  <Text style={{ fontSize: 18 }}>
                    Lorem Impsum is simply dummy text of the printing and
                    typesetting industry Lorem Ipsum has been teh industry's
                  </Text>
                </View>

                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    width: "70%",
                    justifyContent: "space-around",
                    bottom: 40,
                    top: 60,
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity
                      style={{
                        elevation: 10,
                        shadowColor: "#101090",
                        shadowOpacity: 0.5,
                        shadowRadius: 5,
                      }}
                    >
                      <GoogleIcons
                        name={"toggle-on"}
                        style={{
                          color: "#101090",
                          fontSize: 50,
                          right: 25,
                        }}
                      />
                    </TouchableOpacity>
                    <View style={{}}>
                      <Text style={{ fontSize: 14 }}>
                        *Lorem Ipmsum is simply dummy text of the printing and
                        typesetting industry. Lorem Impsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and?
                      </Text>
                      <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                        {" "}
                        Kabul Ediyorum:
                      </Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity
                      style={{
                        elevation: 10,
                        shadowColor: "#101090",
                        shadowOpacity: 0.5,
                        shadowRadius: 5,
                      }}
                    >
                      <GoogleIcons
                        name={"toggle-on"}
                        style={{
                          color: "#101090",
                          fontSize: 50,
                          right: 20,
                        }}
                      />
                    </TouchableOpacity>
                    <View>
                      <Text style={{ fontSize: 14 }}>
                        *Lorem Ipmsum is simply dummy text of the printing and
                        typesetting industry.
                      </Text>
                      <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                        {" "}
                        Kabul Ediyorum:
                      </Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity
                      style={{
                        elevation: 10,
                        shadowColor: "black",
                        shadowOpacity: 0.5,
                        shadowRadius: 5,
                      }}
                    >
                      <GoogleIcons
                        name={"toggle-off"}
                        style={{
                          color: "#99badd",
                          fontSize: 50,
                          right: 25,
                        }}
                      />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 14 }}>
                      *Lorem Ipmsum is simply dummy text of the printing and
                      typesetting industry. Lorem Impsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </Text>
                  </View>
                </View>
                <View style={{ flex: 2, top: 70, alignItems: "center" }}>
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
                    }}
                  >
                    <Text style={{ color: "white", fontSize: 20 }}>
                      {" "}
                      İLERLE
                    </Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    marginVertical: 5,
                    position: "relative",
                    top: 85,
                  }}
                >
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
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Kvkk;

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
