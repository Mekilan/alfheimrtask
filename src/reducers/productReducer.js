import { PRO_LIST } from "./../actions";

export default (state = {}, action) => {
  switch (action.type) {
    case PRO_LIST:
      return { ...state, state: action.payload };
    default:
      return state;
  }
};
