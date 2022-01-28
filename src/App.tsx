import React, { FC } from "react";
import { Provider } from "react-redux";

import MyContainer from "./containers/MyContainer";
import { store } from "./store/configureStore";

const App: FC = () => {
  return (
    <Provider store={store}>
      <MyContainer />
    </Provider>
  );
};

export default App;
