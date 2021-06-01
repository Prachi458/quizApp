import { QUIZ_LOAD } from "../actions/types";

const initialState = {
  questionBank: [],
};

const quiz = (state = initialState, action) => {
  switch (action.type) {
    case QUIZ_LOAD:
      return {
        ...state,
        questionBank: action.payload,
      };
    default:
      return state;
  }
};

export default quiz;
