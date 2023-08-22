import characterReducer from "./characterReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ characterReducer });

export default rootReducer;
