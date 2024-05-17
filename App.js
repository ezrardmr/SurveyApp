import { Platform, StatusBar, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import configureStore from "./src/store/reducer/configureStore";
import Navi from "./src/components/Navi";

const store = configureStore();

const STATUS_BAR_HEIGHT = Platform.OS === "ios" ? 60 : 0;
function StatusBarPlaceHolder() {
  return (
    <View
      style={{
        width: "100%",
        height: STATUS_BAR_HEIGHT,
        backgroundColor: "#1c2536",
      }}
    >
      <StatusBar barStyle="light-content" backgroundColor="#1c2536" />
    </View>
  );
}

const App = () => {
  return (
    <Provider store={store}>
      <StatusBarPlaceHolder />
      <Navi />
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
