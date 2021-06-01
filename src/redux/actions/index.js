import { ADD_USER, QUIZ_LOAD, QUIZ_RESULT, HISTORY } from "./types";

export const addUser = (name, category, difficulty) => ({
  type: ADD_USER,
  name,
  category,
  difficulty,
});

export const quizLoad = (questionBank) => ({
  type: QUIZ_LOAD,
  payload: questionBank,
});

export const quizResult = (answer, correct_answer) => ({
  type: QUIZ_RESULT,
  answer,
  correct_answer,
});

export const history = (message) => ({
  type: HISTORY,
  message,
});

export const fetchData = () => {
  return async function (dispatch, getState) {
    const response = await fetch(
      `https://opentdb.com/api.php?amount=10&category=${
        getState().user.category
      }&difficulty=${getState().user.difficulty}&type=multiple`
    );
    const json = await response.json();
    dispatch(quizLoad(json.results));
  };
};
