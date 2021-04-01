// All action types will be listed here and can be imported as default by the reducers.
const actions = {
  DEBUG: "DEBUG", // For tests
  REGISTER_VALUE: "REGISTER_VALUE",
  REGISTER_OPERATION: "REGISTER_OPERATION",
  CALCULATE: "CALCULATE",
};

// Debug testing function to log something to the console
export const debugMsg = (msg) => {
  return {
    type: actions.DEBUG,
    msg
  }
};

// Register a entry value to the state and display, so it can be operated on.
export const registerValue = (value) => {
  return {
    type: actions.REGISTER_VALUE,
    value
  }
};

// Register an operation by binding the sign into the entry value
export const registerOperation = (sign) => {
  return {
    type: actions.REGISTER_OPERATION,
    sign
  }
};

// Calculate the entries
export const calculate = () => {
  return {
    type: actions.CALCULATE,
  }
};

// Defaults to actions types
export default actions;