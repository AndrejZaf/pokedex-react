import { combineReducers } from "redux";
import counter from "./counterReducer";

const allReducers = combineReducers({
  counter,
});
export default allReducers;
