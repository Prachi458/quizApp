import { HISTORY } from "../actions/types";

const initialState = {
  usersData: [],
};

const history = (state = initialState, action) => {
  switch (action.type) {
    case HISTORY:
      return {
        ...state,
        usersData: [...state.usersData, action.message],
      };
    default:
      return state;
  }
};

export default history;
