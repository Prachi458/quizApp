import { createStore } from "redux";
import rootReducer from "./reducers";

//const data = (state) => state.user.usersData;

// convert object to string and store in localStorage

function saveToLocalStorage(data) {
  try {
    const serialisedState = JSON.stringify(data);
    localStorage.setItem("persistantState", serialisedState);
  } catch (e) {
    console.log(e);
  }
}

// load string from localStarage and convert into an Object
// invalid output must be undefined
function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem("persistantState");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
}

const store = createStore(
  rootReducer,
  loadFromLocalStorage(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
