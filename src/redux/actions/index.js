export const CHANGE_NAVBAR = "CHANGE_NAVBAR";

/////////////////////////////////////////////////////////////////////////////////////////////////

export function changeNav(state) {
  return async function (dispatch) {
    dispatch({ type: CHANGE_NAVBAR, payload: state });
  };
}
