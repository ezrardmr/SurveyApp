import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import GoogleIcons from "react-native-vector-icons/MaterialIcons";
import Home from "../containers/BottomTabBar/Home";

const Tab = createBottomTabNavigator();
const Navi = () => {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
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
                          style={styles.inActiveButtonStyle}
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
            component={Home}
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
                      style={styles.activeButtonIconStyle}
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
                      style={styles.activeButtonIconStyle}
                    />
                    <Text style={styles.textButtonStyle}>Sohbet</Text>
                  </TouchableOpacity>
                ),
              title: "Profile",
            }}
            component={Home}
          />
        </Tab.Navigator>
      </NavigationContainer>
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
