import { Provider } from "react-redux";
import store from "./store/config";

import ButtonNumber from "./components/ButtonNumber";
import ButtonSign from "./components/ButtonSign";
import ButtonSignEqual from "./components/ButtonSignEqual";
import ButtonSignDot from "./components/ButtonSignDot";

// store.dispatch({type: "DEBUG", msg: "Working!"});

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <h1>javascript-calculator</h1>
        <div className="calculator">
          <ButtonSign sign="+" template="sign-add" />
          <ButtonSign sign="-" template="sign-sub" />
          <ButtonSign sign="*" template="sign-mult" />
          <ButtonSign sign="/" template="sign-div" />
          <ButtonSignEqual />
          <ButtonSignDot />
          
          { // Loop to create 10 button elements using a dummy empty array to map over
            [
              ...Array(10),
            ].map((value, index) => (
              <ButtonNumber num={index} key={index} />
            ))
          }
          
        </div>
      </div>
    </Provider>
  );
}

export default App;
