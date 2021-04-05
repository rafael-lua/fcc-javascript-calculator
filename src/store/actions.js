// All action types will be listed here and can be imported as default by the reducers.
const actions = {
  DEBUG: "DEBUG", // For tests
  REGISTER_VALUE: "REGISTER_VALUE",
  REGISTER_OPERATION: "REGISTER_OPERATION",
  REGISTER_DECIMAL: "REGISTER_DECIMAL",
  CALCULATE: "CALCULATE",
  CLEAN_GLOBAL: "CLEAN_GLOBAL",
  CLEAN_ENTRY: "CLEAN_ENTRY",
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

// Register decimal point
export const registerDecimal = () => {
  return {
    type: actions.REGISTER_DECIMAL,
  }
};

// Calculate the entries
export const calculate = () => {
  return {
    type: actions.CALCULATE,
  }
};

// Clear the calculator. cg = Clear Global. ce = Clear Entry.
export const clear = (t) => {
  return {
    type: t === "cg" ? actions.CLEAN_GLOBAL : actions.CLEAN_ENTRY,
  }
};

// Defaults to actions types
export default actions;