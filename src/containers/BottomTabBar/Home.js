import React, { useEffect, useState } from "react";
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
import Styles from "../../styles/Styles";
import { getUser } from "../../store/actions/securityActions";

const Home = ({ navigation }) => {
  const [currentUser, setCurrentUser] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser()).then((response) => {
      console.log("res", response);
      setCurrentUser(response);
    });
  }, []);

  return (
    <KeyboardAvoidingView
      behaviour="padding"
      enabled={false}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={Styles.ViewStyle}>
          <View style={{ flex: 1, justifyContent: "flex-start" }}>
            <Image
              style={{
                position: "absolute",
                width: Dimensions.get("window").width,
                height: Dimensions.get("window").width - 100,
              }}
              resizeMode="cover"
              source={require("../../../assets/home.jpg")}
            />
          </View>
          <View style={styles.LoginFooter}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Text style={{ fontSize: 20 }}> Merhaba </Text>
              <Text style={{ fontSize: 20, color: "#0000c8" }}>
                {currentUser.username}
              </Text>
            </View>

            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate("Questions")}
              >
                <Text
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#101090",
                    borderRadius: 50,
                    marginTop: 20,
                    color: "white",
                    padding: 10,
                    paddingHorizontal: 30,
                  }}
                >
                  {" "}
                  ANKETE BAŞLA
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Home;

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
});
