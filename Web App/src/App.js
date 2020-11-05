import React from "react";

//Redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import RootReducer from "./Reducers/RootReducer"; //Reducer
import Routes from "./Router";

function App() {
  let store = createStore(RootReducer, {}, applyMiddleware(ReduxThunk));
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
