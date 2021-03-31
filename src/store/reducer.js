import actions from "./actions"

// State initial values
const appState = {
  currentValue: "", // Value being inserted
  isFloat: false, // Current value received a dot sign already?
  entries: [], // Array with objects like: { value: "", sign: null};  Null is the last value, ending the calculation
  result: ""
};

const reducer = (state = appState, action) => {
  switch(action.type) {

    case actions.DEBUG:
      console.log("ACTION SENT. MESSAGE: " + action.msg);
      return state;

    case actions.REGISTER_OPERATION:
      if(state.currentValue !== "") {
        let newState = JSON.parse(JSON.stringify(state));
        newState.entries.push({value: state.currentValue, sign: action.sign});
        newState.currentValue = "";
        newState.isFloat = false;
        console.log(state, newState);
        return newState;
      } else {
        console.log("Nothing changed!");
        return state;
      }

    case actions.REGISTER_VALUE:
      let newState = JSON.parse(JSON.stringify(state));
      newState.currentValue = newState.currentValue + action.value;
      return newState;

    default:
      return state;
  }
};

export default reducer;