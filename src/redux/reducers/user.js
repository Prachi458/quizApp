import { ADD_USER } from "../actions/types";

const initialState = {
  usersData: [],
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        usersData: [...state.usersData, action.user],
      };
    default:
      return state;
  }
};
export default user;
