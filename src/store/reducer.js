import actions from "./actions"

// State initial values
const appState = {
  currentValue: "", // Valuen being inserted
  isFloat: false, // Current value received a dot sign already?
  entries: [
    {
      value: "",
      sign: null // Null is the last value, ending the calculation
    }
  ],
  result: ""
};

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