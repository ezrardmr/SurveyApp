import * as actionTypes from "../actions/actionsTypes";

const initialState = {
  allSurvey: [],
  allSurveyLoading: false,
  saveSurvey: [],
  saveSurveyLoading: false,
};

const surveyReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SURVEY_REQUESTED:
      return { ...state, allSurveyLoading: true };
    case actionTypes.FETCH_SURVEY_SUCCESS:
      return {
        ...state,
        allSurvey: action.payload,
        allSurveyLoading: false,
        //currentQuestionIndex: action.payload.currentQuestionIndex,
        //answers: action.payload.answers,
        //points: action.payload.points,
      };
    case actionTypes.FETCH_SURVEY_FAILED:
      return { ...state, allSurveyLoading: false, errors: action.payload };
    //save
    case actionTypes.SAVE_SURVEY_REQUESTED:
      return { ...state, saveSurveyLoading: true };
    case actionTypes.SAVE_SURVEY_SUCCESS:
      return {
        ...state,
        saveSurvey: action.payload,
        saveSurveyLoading: false,
      };
    case actionTypes.SAVE_SURVEY_FAILED:
      return { ...state, allSurveyLoading: false, errors: action.payload };
    //GetList
    case actionTypes.GET_SURVEYLIST_REQUESTED:
      return { ...state, saveSurveyLoading: true };
    case actionTypes.GET_SURVEYLIST_SUCCESS:
      return {
        ...state,
        allSurvey: action.payload,
        allSurveyLoading: false,
      };
    case actionTypes.GET_SURVEYLIST_FAILED:
      return { ...state, allSurveyLoading: false, errors: action.payload };

    default:
      return state;
  }
};

export default surveyReducer;
