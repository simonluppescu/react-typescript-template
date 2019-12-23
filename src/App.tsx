import React, { FC } from "react";
import { Provider } from "react-redux";

import "./App.css";

import { store } from "./store/configureStore";

const App: FC = () => {
  return (
    <Provider store={store}>
      <div>Hello World!</div>
    </Provider>
  );
};

export default App;
