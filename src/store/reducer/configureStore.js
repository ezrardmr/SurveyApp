import { createStore, applyMiddleware } from "redux";
import rootReducer from "./index";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

const configureStore = () => {
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
};

export default configureStore;
