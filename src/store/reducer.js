import actions from "./actions"

// State initial values
const appState = {};

const reducer = (state = appState, action) => {
  switch(action.type) {

    case actions.DEBUG:
      console.log("ACTION SENT. MESSAGE: " + action.msg);
      return state;

    default:
      return state;
  }
};

export default reducer;