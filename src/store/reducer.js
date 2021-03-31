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

    case actions.REGISTER_OPERATION:
      console.log("SIGN SENT, IT IS: " + action.sign);
      return state;

    case actions.REGISTER_VALUE:
      console.log("VALUE SENT, IT IS: " + action.value);
      return state;

    default:
      return state;
  }
};

export default reducer;