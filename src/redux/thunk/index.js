import { quizLoad } from "../actions";

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
