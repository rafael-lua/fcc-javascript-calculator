import { Provider } from "react-redux";
import store from "./store/config";

import Display from "./components/Display";
import ButtonNumber from "./components/ButtonNumber";
import ButtonSign from "./components/ButtonSign";
import ButtonSignEqual from "./components/ButtonSignEqual";
import ButtonSignDot from "./components/ButtonSignDot";
import ButtonClear from "./components/ButtonClear";

// store.dispatch({type: "DEBUG", msg: "Working!"});

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <h1 className="app-title">JavaScript Calculator</h1>
        <div className="calculator">
          <Display />
          <ButtonSign sign="+" template="sign-add" signId="add" />
          <ButtonSign sign="-" template="sign-sub" signId="subtract" />
          <ButtonSign sign="*" template="sign-mult" signId="multiply" />
          <ButtonSign sign="/" template="sign-div" signId="divide" />
          <ButtonSignEqual />
          <ButtonSignDot />
          <ButtonClear clearType="cg" />
          <ButtonClear clearType="ce" />

          {/* { // Loop to create 10 button elements using a dummy empty array to map over
            [
              ...Array(10),
            ].map((value, index) => (
              <ButtonNumber num={index} key={index} />
            ))
          } */}

          {
            [
              "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"
            ].map((value, index) => (
              <ButtonNumber numId={value} num={index} key={index} />
            ))
          }

        </div>
        <h3 className="app-copy">By <a href="https://github.com/rafael-lua">rafael-lua</a></h3>
      </div>
    </Provider>
  );
}

export default App;
