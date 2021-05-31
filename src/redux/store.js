import { createStore } from "redux";
import rootReducer from "./reducers";

function saveToLocalStorage(state) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("state", serialisedState);
  } catch (e) {
    console.log(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem("state");
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

store.subscribe(() => {
  saveToLocalStorage({
    history: store.getState().history,
  });
});

export default store;
