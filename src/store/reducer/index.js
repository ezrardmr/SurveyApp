import { combineReducers } from "redux";
import securityReducer from "./securityReducer";

const rootReducer = combineReducers({
  securityReducer,
});

export default rootReducer;
