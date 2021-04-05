import actions from "./actions"

// State initial values
const appState = {
  isFloat: false, // Current value received a dot sign already?
  entries: [
    { value: "0", sign: null }, // Initial value
  ],
  result: null
};

const reducer = (state = appState, action) => {
  switch(action.type) {

    case actions.DEBUG:
      console.log("ACTION SENT. MESSAGE: " + action.msg);
      return state;

    case actions.REGISTER_OPERATION: { 
      if(state.entries[state.entries.length - 1].value !== "0" && state.entries[state.entries.length - 1].value !== "-") {
        let newState = JSON.parse(JSON.stringify(state));
        newState.entries.push({value: "0", sign: action.sign});
        newState.isFloat = false;
        return newState;
      } else if(state.result === null && action.sign === "-") {
        let newState = JSON.parse(JSON.stringify(state));
        let currentEntry = newState.entries.length - 1;
        newState.entries[currentEntry].value = "-";
        return newState;
      } else if(state.result !== null) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.entries[0].value = state.result.toString();
        newState.entries.push({value: "0", sign: action.sign});
        newState.result = null;
        return newState;
      } else if(state.entries.length > 1) {
        let newState = JSON.parse(JSON.stringify(state));
        let currentEntry = newState.entries.length - 1;
        newState.entries[currentEntry].sign = action.sign;
        if(newState.entries[currentEntry].value[0] === "-") {
          newState.entries[currentEntry].value = newState.entries[currentEntry].value.slice(1);
        }
        return newState;
      } else {
        return state;
      }
    }

    case actions.REGISTER_VALUE: {
      let newState = JSON.parse(JSON.stringify(state));
      let currentEntry = newState.entries.length - 1;
      if(
        newState.entries[currentEntry].value === "" || 
        (newState.entries[currentEntry].value[0] === "0" && newState.entries[currentEntry].value.length === 1) ||
        (newState.entries[currentEntry].value[0] === "-" && newState.entries[currentEntry].value.length === 2)) { 
        if(newState.entries[currentEntry].value[0] === "-") {
          newState.entries[currentEntry].value = "-" + action.value.toString(); 
        } else {
          newState.entries[currentEntry].value = action.value.toString(); 
        }       
      } else { 
        newState.entries[currentEntry].value = newState.entries[currentEntry].value + action.value.toString(); 
      }
      newState.result = null;
      return newState;
    }

    case actions.CALCULATE: {
      if(state.entries.length > 1) {
        let newState = JSON.parse(JSON.stringify(state));
        let finalValue = parseFloat(newState.entries[0].value);
        for(let i = 0; i < newState.entries.length; i++) {
          if(newState.entries[i].value !== "0") {
            switch(newState.entries[i].sign) { 
              case "+": {
                finalValue += parseFloat(newState.entries[i].value);
                break; 
              }
              case "-": {
                finalValue -= parseFloat(newState.entries[i].value);
                break; 
              }
              case "*": {
                finalValue *= parseFloat(newState.entries[i].value);
                break; 
              }
              case "/": {
                let zeroCheck = parseFloat(newState.entries[i].value);
                if(zeroCheck !== 0) {
                  finalValue /= zeroCheck;
                } else { finalValue = Number.POSITIVE_INFINITY }
                break; 
              }
              case null:
              default: continue;
            }
          } else { break; }
        }
        newState.entries = [{ value: "0", sign: null }];
        newState.isFloat = false;
        newState.result = finalValue;
        return newState;
      }
      else {
        return state;
      }
    }

    case actions.REGISTER_DECIMAL: {
      if(state.isFloat === false &&
        state.entries[state.entries.length - 1].value.length > 0) {
        let newState = JSON.parse(JSON.stringify(state));
        let currentEntry = newState.entries.length - 1;
        newState.entries[currentEntry].value = newState.entries[currentEntry].value + ".";
        newState.isFloat = true;
        return newState;
      }
      else {
        return state;
      }
    }

    case actions.CLEAN_GLOBAL: {
      let newState = JSON.parse(JSON.stringify(state));
      newState.entries = [{ value: "0", sign: null }];
      newState.isFloat = false;
      newState.result = null;
      return newState;
    }

    case actions.CLEAN_ENTRY: {
      let newState = JSON.parse(JSON.stringify(state));
      let currentEntry = newState.entries.length - 1;
      newState.entries[currentEntry].value = "0";
      newState.isFloat = false;
      return newState;
    }

    default:
      return state;
  }
};

export default reducer;