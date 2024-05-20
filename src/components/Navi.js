import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import GoogleIcons from "react-native-vector-icons/MaterialIcons";
import Profile from "../containers/BottomTabBar/Profile";
import Survey from "../containers/BottomTabBar/Survey";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../containers/BottomTabBar/Home";
import Questions from "../containers/Questions";
import Login from "../containers/Login";
import Register from "../containers/Register";
import { useSelector } from "react-redux";
import Kvkk from "../containers/Kvkk";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Navi = () => {
  const isAuthenticated = useSelector(
    (state) => state.securityReducer.isAuthenticated
  );
  console.log("is", isAuthenticated);
  function BottomTabNavigator() {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            position: "absolute",
            backgroundColor: "black",
            height: "8%",
            borderRadius: 30,
            bottom: 30,
            margin: 20,
          },
        }}
      >
        <Tab.Screen
          name="Survey"
          options={{
            tabBarButton: (props) =>
              props.accessibilityState.selected == true ? (
                <View style={{ flex: 1, alignItems: "center" }}>
                  <View style={styles.activeButtonOutStyle}>
                    <TouchableOpacity
                      {...props}
                      style={styles.activeButtonStyle}
                    >
                      <GoogleIcons
                        name={"timeline"}
                        style={styles.activeButtonIconStyle}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              ) : (
                <TouchableOpacity {...props}>
                  <GoogleIcons
                    name={"timeline"}
                    style={styles.inActiveButtonStyle}
                  />
                  <Text style={styles.textButtonStyle}>Anket</Text>
                </TouchableOpacity>
              ),
            title: "Survey",
          }}
          component={Survey}
        />
        <Tab.Screen
          name="Home"
          options={{
            tabBarButton: (props) =>
              props.accessibilityState.selected == true ? (
                <View style={{ flex: 1, alignItems: "center" }}>
                  <View style={styles.activeButtonOutStyle}>
                    <TouchableOpacity
                      {...props}
                      style={styles.activeButtonStyle}
                    >
                      <GoogleIcons
                        name={"home"}
                        style={styles.activeButtonIconStyle}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              ) : (
                <TouchableOpacity {...props}>
                  <GoogleIcons
                    name={"home"}
                    style={styles.inActiveButtonStyle}
                  />
                  <Text style={styles.textButtonStyle}>Anasayfa</Text>
                </TouchableOpacity>
              ),
            title: "Home",
          }}
          component={Home}
        />
        <Tab.Screen
          name="Profile"
          options={{
            tabBarButton: (props) =>
              props.accessibilityState.selected == true ? (
                <View style={{ flex: 1, alignItems: "center" }}>
                  <View style={styles.activeButtonOutStyle}>
                    <TouchableOpacity
                      {...props}
                      style={styles.activeButtonStyle}
                    >
                      <GoogleIcons
                        name={"person"}
                        style={styles.activeButtonIconStyle}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              ) : (
                <TouchableOpacity {...props}>
                  <GoogleIcons
                    name={"person"}
                    style={styles.inActiveButtonStyle}
                  />
                  <Text style={styles.textButtonStyle}>Profil</Text>
                </TouchableOpacity>
              ),
            title: "Profile",
          }}
          component={Profile}
        />
      </Tab.Navigator>
    );
  }

  return !isAuthenticated ? (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="Login"
            options={{
              headerShown: false,
            }}
            component={Login}
          />
          <Stack.Screen
            name="Register"
            options={{
              headerShown: false,
            }}
            component={Register}
          />
          <Stack.Screen
            name="Kvkk"
            options={{
              headerShown: false,
            }}
            component={Kvkk}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  ) : (
    <View style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        enabled
      >
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen
              name="BottomTabNavigator"
              component={BottomTabNavigator}
              options={{
                headerShown: false,
                drawerItemStyle: { display: "none" },
              }}
            />
            <Stack.Screen
              name="Questions"
              options={{
                headerShown: false,
              }}
              component={Questions}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Navi;

const styles = StyleSheet.create({
  tabBarStyle: {
    color: "white",
    fontSize: 13,
  },
  activeButtonIconStyle: {
    color: "white",
    fontSize: 30,
  },
  activeButtonStyle: {
    backgroundColor: "#101090",
    borderRadius: 60 / 2,
    width: 50,
    height: 50,
    flex: 1,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  activeButtonOutStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    borderRadius: 35,
    backgroundColor: "#101090",
    position: "absolute",
    top: -35,
  },
  inActiveButtonStyle: {
    color: "white",
    fontSize: 30,
  },
  textButtonStyle: {
    color: "white",
  },
});
