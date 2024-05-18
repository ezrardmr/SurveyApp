import * as actionTypes from "./actionsTypes";
import axios from "../../libs/SurveyAppApi";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const login = (loginCred) => async (dispatch) => {
  dispatch({ type: actionTypes.LOGIN_REQUESTED });
  try {
    console.log("login", loginCred);
    const response = await axios.post(`/auth/login`, loginCred);
    AsyncStorage.setItem("token", response.data.token);
    // const decoded = jwt_decode(response.token);
    dispatch({ type: actionTypes.LOGIN_SUCCESS, payload: response.data });
  } catch (e) {
    console.log("e", e);
    dispatch({
      type: actionTypes.LOGIN_FAILED,
      payload: "Invalid Login Credantials",
    });

    return e.response.data;
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: actionTypes.LOGOUT_REQUESTED });
  try {
    AsyncStorage.removeItem("token");
    //AsyncStorage.removeItem('user')
    dispatch({ type: actionTypes.LOGOUT_SUCCESS, payload: "" });
  } catch (e) {
    dispatch({ type: actionTypes.LOGOUT_FAILED, payload: "Logout Problem" });
  }
};
