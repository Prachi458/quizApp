import { QUIZ_RESULT } from "../actions/types";

const initialState = {
  score: 0,
};

const result = (state = initialState, action) => {
  switch (action.type) {
    case QUIZ_RESULT:
      return {
        ...state,
        score:
          action.answer === action.correct_answer
            ? state.score + 1
            : state.score,
      };
    default:
      return state;
  }
};

export default result;
