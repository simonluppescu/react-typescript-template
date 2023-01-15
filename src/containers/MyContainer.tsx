import React, { Component } from "react";
import { connect } from "react-redux";

import MyComponent from "../components/MyComponent";
import { doSomething, fetchData } from "../actions";
import { AppState } from "../store/configureStore";
import { AppDispatch } from "../types/common";

type StateProps = {
  example: string;
};
type DispatchProps = {
  handleAction: () => void;
  fetchData: () => void;
};

type Props = StateProps & DispatchProps;

export class MyContainer extends Component<Props> {
  render(): React.ReactNode {
    return <MyComponent name="Simon" />;
  }
}

const mapStateToProps = (state: AppState): StateProps => ({
  example: state.example
});

const mapDispatchToProps = (dispatch: AppDispatch): DispatchProps => ({
  handleAction: (): void => {
    dispatch(doSomething("something"));
  },
  fetchData: (): void => {
    dispatch(fetchData());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MyContainer);
