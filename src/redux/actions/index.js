import { ADD_USER, QUIZ_LOAD, QUIZ_RESULT, HISTORY } from "./types";

export const addUser = (name, category, difficulty) => ({
  type: ADD_USER,
  name,
  category,
  difficulty,
});

export const quizLoad = (quiz) => ({
  type: QUIZ_LOAD,
  quiz,
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
