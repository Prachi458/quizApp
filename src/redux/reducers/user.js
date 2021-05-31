import { ADD_USER } from "../actions/types";

const initialState = {
  name: "",
  category: "",
  difficulty: "",
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        name: action.name,
        category: action.category,
        difficulty: action.difficulty,
      };
    default:
      return state;
  }
};

export default user;
