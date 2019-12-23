import React, { Component } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { AppState } from "../store/configureStore";

type StateProps = {};
type DispatchProps = {};
type State = {};

type Props = StateProps & DispatchProps;

export class MyContainer extends Component<Props, State> {
  state = {};

  render(): React.ReactNode {
    return <div></div>;
  }
}

const mapStateToProps = (state: AppState): StateProps => ({});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyContainer);
