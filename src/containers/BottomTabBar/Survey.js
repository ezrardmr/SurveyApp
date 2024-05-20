import {
  Animated,
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Styles from "../../styles/Styles";
import GoogleIcons from "react-native-vector-icons/MaterialIcons";
import * as Yup from "yup";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";

const Survey = ({}) => {
  const dispatch = useDispatch();
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [isPressed, setIsPressed] = useState(false);
  const [contentHeight, setContentHeight] = useState(new Animated.Value(80));
  const [surveyData, setSurveyData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const savedData = await AsyncStorage.getItem("surveyData");
        if (savedData !== null) {
          const parsedData = JSON.parse(savedData);
          console.log("parsed", parsedData);
          setSurveyData(parsedData);
        }
      } catch (error) {
        console.error("Error loading data: ", error);
      }
    };

    loadData();
  }, []);

  /* useEffect(() => {
    dispatch(loadSurvey()).then(() => {});
  }, []);

  const allSurvey = useSelector((state) => state.surveyReducer.allSurvey);
  const allSurveyLoading = useSelector(
    (state) => state.surveyReducer.allSurveyLoading
  );*/

  useEffect(() => {
    if (selectedItemId) {
      Animated.timing(contentHeight, {
        toValue: 100,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(contentHeight, {
        toValue: 80,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  }, [selectedItemId]);

  const handlePress = (item) => {
    setSelectedItemId((prevId) => (prevId === item.id ? null : item.id));
    setIsPressed(!isPressed);
    console.log("Icon pressed");
    console.log("Selected item:", item);
  };

  const DATA = [
    {
      id: "1",
      title: "First Item",
    },
    {
      id: "2",
      title: "Second Item",
    },
    {
      id: "3",
      title: "Third Item",
    },
  ];

  const Row = ({ item }) => {
    console.log("survey", surveyData);
    const isSelected = selectedItemId === item.id;
    return (
      <Animated.View style={[styles.rowStyle, { height: contentHeight }]}>
        <View
          style={{ flexDirection: "column", justifyContent: "space-between" }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ color: "#101090", fontSize: 15 }}>Anket</Text>
            <TouchableOpacity onPress={() => handlePress(item)}>
              <GoogleIcons
                name={
                  isSelected ? "keyboard-arrow-down" : "keyboard-arrow-right"
                }
                size={30}
                color="#101090"
              />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flexDirection: "row" }}>
              <GoogleIcons
                name={"date-range"}
                style={{ fontSize: 20, color: "#101090" }}
              />
              <Text>{moment(surveyData.surveyDate).format("DD-MM-YYYY")}</Text>
            </View>
            <View style={{ flexDirection: "row", left: 10 }}>
              <GoogleIcons
                name={"access-time"}
                style={{ fontSize: 20, color: "#101090" }}
              />
              <Text>
                {moment(surveyData.surveyTime, ["h:mm:ss A", "H:mm:ss"]).format(
                  "H:mm"
                )}
              </Text>
            </View>
          </View>
          {isSelected && (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#101090",
                width: "30%",
                height: "40%",
                borderRadius: 30,
                left: "70%",
                bottom: 10,
              }}
            >
              <Text style={{ color: "white" }}>Modunuz: 30</Text>
            </View>
          )}
        </View>
      </Animated.View>
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled={false}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={Styles.ViewStyle}>
          <View
            style={{
              flex: 20,
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flex: 15,
                marginTop: 40,
              }}
            >
              <Text style={{ color: "black", fontSize: 20, left: "25%" }}>
                {" "}
                Tamamlanan Anketler{" "}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  top: 5,
                }}
              >
                <View style={{ flexDirection: "column", alignItems: "center" }}>
                  <Text style={styles.result}> 30</Text>
                  <Text style={{ color: "black", fontSize: 18 }}> Puan </Text>
                </View>
                <View
                  style={{
                    //  position: "absolute",
                    backgroundColor: "gray",
                    width: 2,
                    height: "100%",
                    left: "14%",
                    top: 0,
                    opacity: 0.5,
                  }}
                />
                <View style={{ flexDirection: "column", alignItems: "center" }}>
                  <Text style={styles.result}> 7</Text>
                  <Text style={{ color: "black", fontSize: 18 }}> Toplam </Text>
                </View>
                <View
                  style={{
                    // position: "absolute",
                    backgroundColor: "gray",
                    width: 2,
                    height: "100%",
                    left: "20%",
                    top: 0,
                    opacity: 0.5,
                  }}
                />
                <View style={{ flexDirection: "column", alignItems: "center" }}>
                  <Text style={styles.result}> 2</Text>
                  <Text style={{ color: "black", fontSize: 18 }}> Bugün </Text>
                </View>
              </View>

              <View style={{ width: "92%", top: 50, width: "90%", left: 20 }}>
                <View style={{ flexDirection: "column" }}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <GoogleIcons name={"list"} style={styles.icon} />
                    <Text style={{ opacity: 0.5, top: 18, fontSize: 18 }}>
                      {" "}
                      Liste
                    </Text>
                  </View>
                  <View>
                    <FlatList
                      data={DATA}
                      style={{ marginTop: 10 }}
                      contentContainerStyle={{
                        justifyContent: "center",
                      }}
                      renderItem={({ item, index }) => (
                        <Row item={item} index={index} />
                      )}
                      keyExtractor={(item, index) => `message ${index}`}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Survey;

const styles = StyleSheet.create({
  menuTextStyle: {
    position: "absolute",
    bottom: "15%",
    fontSize: 19,
    fontWeight: "bold",
    color: "white",
  },
  header: {
    flex: 2,
    alignItems: "center",
    justifyContent: "flex-end",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  icon: {
    top: 20,
    fontSize: 30,
    color: "#101090",
  },
  result: {
    color: "#101090",
    fontSize: 30,
    fontWeight: "bold",
  },
  rowStyle: {
    width: "100%",
    height: 80,
    backgroundColor: "#dcdcdc",
    borderRadius: 3,
    marginTop: 10,
    marginLeft: "auto",
    marginRight: "auto",
    padding: 15,
    justifyContent: "space-between",
  },
});
