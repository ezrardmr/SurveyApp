import React, { useState } from "react";
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
} from "react-native";
import { useDispatch } from "react-redux";
import Styles from "../styles/Styles";
import GoogleIcons from "react-native-vector-icons/MaterialIcons";

const Questions = ({ navigation }) => {
  const dispatch = useDispatch();

  return (
    <KeyboardAvoidingView
      behaviour="padding"
      enabled={false}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={Styles.ViewStyle}>
          <View style={styles.viewStyle}>
            <View
              style={{
                flex: 2,
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
                style={styles.activeButtonStyle}
              >
                <GoogleIcons
                  name={"home"}
                  style={styles.activeButtonIconStyle}
                />
              </TouchableOpacity>
              <Text style={{ top: 20, left: 100 }}>Sayac</Text>
            </View>
            <View
              style={{
                flex: 2,
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white", alignSelf: "flex-start" }}>
                {" "}
                Anket Konu Başlığı
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginVertical: 5,
                  position: "relative",
                }}
              >
                <View
                  style={{
                    width: "20%",
                    height: 4,
                    borderRadius: 2,
                    backgroundColor: "#4568e0",
                  }}
                />
                <View
                  style={{
                    width: "20%",
                    height: 4,
                    borderRadius: 2,
                    backgroundColor: "#4568e0",
                  }}
                />
                <View
                  style={{
                    width: "20%",
                    height: 4,
                    borderRadius: 2,
                    backgroundColor: "#e0e1ec",
                  }}
                />
                <View
                  style={{
                    width: "20%",
                    height: 4,
                    borderRadius: 2,
                    backgroundColor: "#e0e1ec",
                  }}
                />
                <View style={{ flexDirection: "row", left: 5 }}>
                  <Text
                    style={{ fontWeight: "bold", color: "white", fontSize: 15 }}
                  >
                    1
                  </Text>
                  <Text style={{ color: "white", opacity: 0.5 }}>/10</Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 15,
              alignItems: "center",
            }}
          >
            <View style={{ alignItems: "center" }}>
              <View style={{ flex: 13, justifyContent: "center" }}>
                <Text> SORULAR</Text>
              </View>

              <View
                style={{
                  flex: 2,
                  flexDirection: "row",
                }}
              >
                <TouchableOpacity
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    width: 50,
                    height: 40,
                    borderRadius: 35,
                    backgroundColor: "#e4f2f7",
                    right: 20,
                  }}
                >
                  <GoogleIcons
                    name={"keyboard-arrow-left"}
                    style={{
                      color: "#bbdeea",
                      fontSize: 30,
                      fontWeight: "bold",
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#101090",
                    width: "40%",
                    height: 50,
                    borderRadius: 30,
                  }}
                >
                  <Text style={{ color: "white" }}>Sonraki Soru</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Questions;

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
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Yarı şeffaf bir arka plan
    justifyContent: "flex-end",
    padding: 10,
  },
  activeButtonOutStyle: {
    width: 40,
    height: 40,
    borderRadius: 35,
    backgroundColor: "white",
    position: "absolute",
    bottom: "90%",
    right: "40%",
  },
  activeButtonStyle: {
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    borderRadius: 35,
    backgroundColor: "white",
    right: 150,
    top: 15,
  },
  activeButtonIconStyle: {
    color: "#101090",
    fontSize: 20,
  },
  viewStyle: {
    flex: 4,
    alignItems: "center",
    justifyContent: "flex-end",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: "#101090",
  },
});
