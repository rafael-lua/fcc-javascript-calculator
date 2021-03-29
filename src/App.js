import { Provider } from "react-redux";
import store from "./store/config";

store.dispatch({type: "DEBUG", msg: "Working!"});

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <h1>javascript-calculator</h1>
      </div>
    </Provider>
  );
}

export default App;
