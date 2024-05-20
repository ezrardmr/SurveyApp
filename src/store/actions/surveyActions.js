import * as actionTypes from "./actionsTypes";
import axios from "../../libs/SurveyAppApi";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveSurveyData = (surveyData) => async (dispatch) => {
  dispatch({ type: actionTypes.SAVE_SURVEY_REQUESTED });
  try {
    console.log("actions", surveyData);
    const newSurveyData = {
      ...surveyData,
      timestamp: new Date().toISOString(),
    };

    //Mevcut anket verilerini kaydedelim
    await AsyncStorage.setItem("surveyData", JSON.stringify(surveyData));

    const existingSurveys = await AsyncStorage.getItem("surveyList");
    let surveys = existingSurveys ? JSON.parse(existingSurveys) : [];

    surveys.push(newSurveyData);
    await AsyncStorage.setItem("surveyList", JSON.stringify(surveys));

    dispatch({
      type: actionTypes.SAVE_SURVEY_SUCCESS,
      payload: surveyData,
    });
  } catch (error) {
    console.error("Error saving data: ", error);
    dispatch({ type: actionTypes.SAVE_SURVEY_FAILED });
  }
};

export const loadSurvey = () => async (dispatch) => {
  dispatch({ type: actionTypes.GET_SURVEYLIST_REQUESTED });
  try {
    const savedData = await AsyncStorage.getItem("surveyData");

    if (savedData) {
      const { currentQuestionIndex, answers, points } = JSON.parse(savedData);
      dispatch({
        type: actionTypes.GET_SURVEYLIST_SUCCESS,
        payload: {
          currentQuestionIndex,
          answers,
          points,
        },
      });
    } else {
      // If there's no saved data, use default values
      dispatch({
        type: actionTypes.GET_SURVEYLIST_SUCCESS,
        payload: {
          currentQuestionIndex: 0,
          answers: [],
          points: 0,
        },
      });
    }

    /* if (surveyList) {
      dispatch({
        type: actionTypes.GET_SURVEYLIST_SUCCESS,
        payload: JSON.parse(surveyList),
      });
    } else {
      dispatch({
        type: actionTypes.GET_SURVEYLIST_SUCCESS,
        payload: [],
      });
    }*/
  } catch (error) {
    console.error("Error loading data: ", error);
    dispatch({ type: actionTypes.GET_SURVEYLIST_FAILED });
  }
};
