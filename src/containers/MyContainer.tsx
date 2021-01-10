import React, { Component } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import MyComponent from "../components/MyComponent";
import { AppState } from "../store/configureStore";

type StateProps = {};
type DispatchProps = {};

type Props = StateProps & DispatchProps;

export class MyContainer extends Component<Props> {
  render(): React.ReactNode {
    return <MyComponent />;
  }
}

const mapStateToProps = (state: AppState): StateProps => ({});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyContainer);
