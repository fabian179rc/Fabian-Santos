import { CHANGE_NAVBAR } from "../actions";

const initialState = {
  render: "about",
};

export default function userReducer(state = initialState, { type, payload }) {
  switch (type) {
    case CHANGE_NAVBAR:
      return { ...state, render: payload };

    default:
      return state;
  }
}
