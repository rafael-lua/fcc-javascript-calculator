// All action types will be listed here and can be imported as default by the reducers.
const actions = {
  DEBUG: "DEBUG", // For tests
};

// Debug testing function to log something to the console
export const debugMsg = (msg) => {
  return {
    type: actions.DEBUG,
    msg
  }
};

// Defaults to actions types
export default actions;