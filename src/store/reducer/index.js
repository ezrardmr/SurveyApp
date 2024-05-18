import { combineReducers } from "redux";
import securityReducer from "./securityReducer";
import surveyReducer from "./surveyReducer";

const rootReducer = combineReducers({
  securityReducer,
  surveyReducer,
});

export default rootReducer;
