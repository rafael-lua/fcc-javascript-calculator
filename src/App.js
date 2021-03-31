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
          <ButtonNumber num="0" />
          <ButtonNumber num="1" />
          <ButtonNumber num="2" />
          <ButtonNumber num="3" />
          <ButtonNumber num="4" />
          <ButtonNumber num="5" />
          <ButtonNumber num="6" />
          <ButtonNumber num="7" />
          <ButtonNumber num="8" />
          <ButtonNumber num="9" />
        </div>
      </div>
    </Provider>
  );
}

export default App;
