import * as actionTypes from "../actions/actionsTypes";

const initialState = {
  isAuthenticated: true,
  token: "",
  currentUser: {},
  errors: "",
};

const securityReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_REQUESTED:
      return { ...state };
    case actionTypes.LOGIN_SUCCESS:
      return {
        isAuthenticated: true,
        currentUser: action.payload.user,
        token: action.payload.token,
      };
    case actionTypes.LOGIN_FAILED:
      return { ...state, isAuthenticated: false, errors: action.payload };
    case actionTypes.LOGOUT_REQUESTED:
      return { ...state };
    case actionTypes.LOGOUT_SUCCESS:
      return { ...state, isAuthenticated: false, token: "", user: {} };
    case actionTypes.LOGOUT_FAILED:
      return { ...state, errors: action.payload };

    default:
      return state;
  }
};

export default securityReducer;
