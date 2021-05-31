import { ADD_USER, QUIZ_LOAD, QUIZ_RESULT } from "./types";

export const addUser = (user) => ({
  type: ADD_USER,
  user,
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
