import React from "react";
import { connect } from "react-redux";

import { logoutUser } from "../actions";
import { AppState } from "../store/configureStore";
import { AppDispatch } from "../types/common";
import { LoggedInUserType } from "../types/userAuthTypes";

type StateProps = {
  loggedInUser: LoggedInUserType;
};

type DispatchProps = {
  handleLogout: () => void;
};

type Props = StateProps & DispatchProps;

export const Logout: React.FC<Props> = (props) => {
  return <button onClick={(): void => props.handleLogout()}>Log out</button>;
};

const mapStateToProps = (state: AppState): StateProps => ({
  loggedInUser: state.loggedInUser
});

const mapDispatchToProps = (dispatch: AppDispatch): DispatchProps => ({
  handleLogout: (): void => {
    dispatch(logoutUser());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
