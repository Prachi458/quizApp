import { combineReducers } from "redux";
import quiz from "./quiz";
import user from "./user";
import result from "./result";
import history from "./history";

const rootReducer = combineReducers({
  user,
  quiz,
  result,
  history,
});

export default rootReducer;
