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
import Styles from "../styles/Styles";
import GoogleIcons from "react-native-vector-icons/MaterialIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Questions = ({ navigation }) => {
  const dispatch = useDispatch();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedRating, setSelectedRating] = useState(0);
  const [points, setPoints] = useState([]);

  const surveyDate = new Date();
  const surveyTime = surveyDate.toLocaleTimeString();

  const surveyQuestions = [
    {
      id: 1,
      type: "multiple_choice",
      question: "Bugün kendini nasıl hissediyorsun?",
      options: ["Çok iyi", "İyi", "Normal", "Kötü", "Çok kötü"],
    },
    {
      id: 2,
      type: "yes_no",
      question: "Hemen modunuz düşer mi?",
      options: ["Evet", "Hayır"],
    },
    {
      id: 3,
      type: "rating",
      question: "Kendine ne kadar değer veriyorsun?",
      options: ["Çok İyi", "İyi", "Orta", "Kötü", "Çok Kötü"],
    },
    {
      id: 4,
      type: "multiple_choice",
      question: "İnsanlar sizi nasıl görüyor?",
      options: [
        "Asık suratlı",
        "Umursamaz",
        "Sakin",
        "Güler yüzlü",
        "Yardımsever",
      ],
    },
    {
      id: 5,
      type: "rating",
      question: "Şuanda nasıl hissediyorsunuz?",
      options: ["Çok İyi", "İyi", "Orta", "Kötü", "Çok Kötü"],
    },
  ];

  const handleNextQuestion = (userAnswer) => {
    // Kullanıcının cevabını answers dizisine ekle
    setAnswers([...answers, userAnswer]);
    setSelectedOption(null);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setPoints([...points, 10]);
  };

  const currentQuestion = surveyQuestions[currentQuestionIndex];
  const handleRate = (rating) => {
    console.log("Rated:", rating);
    setSelectedRating(rating);
  };

  const handleSelect = (option) => {
    console.log("Selected option:", option);
    setSelectedOption(option);
    // Burada seçilen seçeneği işleyebilirsiniz
  };

  const saveData = async () => {
    const surveyData = {
      currentQuestionIndex,
      answers,
      surveyDate,
      surveyTime,
      points,
    };
    console.log("Survey Data:", surveyData);
    try {
      await AsyncStorage.setItem("surveyData", JSON.stringify(surveyData));
    } catch (error) {
      console.error("Error saving data: ", error);
    }
  };

  useEffect(() => {
    saveData();
  }, [currentQuestionIndex, answers, surveyDate, surveyTime, points]);

  const renderQuestionView = (question) => {
    switch (question.type) {
      case "multiple_choice":
        return (
          <View key={question.id} style={{ flexDirection: "row" }}>
            {question.options.map((option, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleSelect(option)}
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  width: " 16%",
                  height: 40,
                  borderRadius: 5,
                  backgroundColor:
                    selectedOption === option ? "#bbdeea" : "#101090",
                  marginHorizontal: 8,
                }}
              >
                <View>
                  <Text style={{ color: "white", fontWeight: "bold" }}>
                    {option}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        );
      case "yes_no":
        return (
          <View key={question.id} style={{ flexDirection: "row" }}>
            {question.options.map((option, index) => (
              <TouchableOpacity
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  width: " 40%",
                  height: 40,
                  borderRadius: 5,
                  backgroundColor:
                    selectedOption === option ? "#bbdeea" : "#101090",
                  marginHorizontal: 20,
                }}
                key={index}
                onPress={() => handleSelect(option)}
              >
                <View style={{ paddingHorizontal: 15 }}>
                  <Text style={{ color: "white" }}>{option}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        );
      case "rating":
        return (
          <View key={question.id} style={{ flexDirection: "row" }}>
            {[1, 2, 3, 4, 5].map((rating) => (
              <TouchableOpacity key={rating} onPress={() => handleRate(rating)}>
                <View style={{ paddingHorizontal: 15 }}>
                  <GoogleIcons
                    name="star"
                    size={30}
                    color={selectedRating >= rating ? "#ffd700" : "#d3d3d3"}
                  />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        );
      default:
        return null;
    }
  };

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
              <Text
                style={{ color: "white", alignSelf: "flex-start", right: 25 }}
              >
                {" "}
                Anket Konu Başlığı
              </Text>
              <View
                style={{
                  width: "70%",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginVertical: 5,
                  position: "relative",
                  left: 18,
                }}
              >
                <View
                  style={{
                    width: "20%",
                    height: 4,
                    borderRadius: 2,
                    borderColor: "white",
                    backgroundColor: "#e0e1ec",
                  }}
                />
                <View
                  style={{
                    width: "20%",
                    height: 4,
                    borderRadius: 2,
                    borderColor: "white",
                    backgroundColor:
                      currentQuestionIndex > 1 ? "#e0e1ec" : "#aacbe9",
                  }}
                />
                <View
                  style={{
                    width: "20%",
                    height: 4,
                    borderRadius: 2,
                    backgroundColor:
                      currentQuestionIndex >= 2 ? "#e0e1ec" : "#aacbe9",
                  }}
                />
                <View
                  style={{
                    width: "20%",
                    height: 4,
                    borderRadius: 2,
                    backgroundColor:
                      currentQuestionIndex >= 3 ? "#e0e1ec" : "#aacbe9",
                  }}
                />
                <View
                  style={{
                    width: "20%",
                    height: 4,
                    borderRadius: 2,
                    backgroundColor:
                      currentQuestionIndex >= 4 ? "#e0e1ec" : "#aacbe9",
                  }}
                />
                <View
                  style={{
                    width: "20%",
                    height: 4,
                    borderRadius: 2,
                    backgroundColor:
                      currentQuestionIndex >= 5 ? "#e0e1ec" : "#aacbe9",
                  }}
                />

                <View style={{ flexDirection: "row", left: 5 }}>
                  <Text
                    style={{ fontWeight: "bold", color: "white", fontSize: 15 }}
                  >
                    1
                  </Text>
                  <Text style={{ color: "white", opacity: 0.5 }}>/5</Text>
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
              <View
                style={{
                  flex: 13,
                  justifyContent: "space-evenly",
                  width: "90%",
                }}
              >
                <View style={{ alignItems: "center" }}>
                  <Text style={{ fontSize: 20 }}>
                    {" "}
                    {currentQuestion.question}
                  </Text>
                </View>

                <View style={{ flexDirection: "row" }}>
                  {renderQuestionView(currentQuestion)}
                </View>
              </View>

              <View
                style={{
                  flex: 2,
                  flexDirection: "row",
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    setCurrentQuestionIndex(currentQuestionIndex - 1);
                  }}
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    width: 50,
                    height: 40,
                    borderRadius: 35,
                    backgroundColor: "#e4f2f7",
                    right: 20,
                  }}
                  disabled={currentQuestionIndex === 0}
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
                  onPress={() => {
                    if (currentQuestionIndex < surveyQuestions.length - 1) {
                      handleNextQuestion(null); // null, kullanıcının cevap vermediği anlamına gelir
                    } else {
                      navigation.navigate("Survey");
                      console.log("Anket tamamlandı!", answers);
                    }
                  }}
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#101090",
                    width: "40%",
                    height: 50,
                    borderRadius: 30,
                  }}
                >
                  <Text style={{ color: "white" }}>
                    {currentQuestionIndex < surveyQuestions.length - 1
                      ? "Sonraki Soru"
                      : "Bitir"}
                  </Text>
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
