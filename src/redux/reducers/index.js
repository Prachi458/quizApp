import { combineReducers } from "redux";
import quiz from "./quiz";
import user from "./user";
import result from "./result";

const rootReducer = combineReducers({
  user,
  quiz,
  result,
});

export default rootReducer;
