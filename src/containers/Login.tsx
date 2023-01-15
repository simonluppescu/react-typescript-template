import React from "react";
import { connect } from "react-redux";

import { loginFormChange, loginUser } from "../actions";
import { AppState } from "../store/configureStore";
import { AppDispatch } from "../types/common";
import { loginFormType } from "../types/userAuthTypes";

type StateProps = {
  loginFormData: loginFormType;
};

type DispatchProps = {
  handleChange: (fieldName: string, value: string) => void;
  handleLogin: (usernameOrEmail: string, password: string) => void;
};

type Props = StateProps & DispatchProps;

export class Login extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const fieldName = event.target.getAttribute("name") || "";
    const value = event.target.value;

    this.props.handleChange(fieldName, value);
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const { usernameOrEmail, password } = this.props.loginFormData;

    this.props.handleLogin(usernameOrEmail, password);
  }

  render(): React.ReactNode {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Username or email"
            type="text"
            name="usernameOrEmail"
            value={this.props.loginFormData.usernameOrEmail}
            onChange={this.handleChange}
          />
          <input
            placeholder="Password"
            type="password"
            name="password"
            value={this.props.loginFormData.password}
            onChange={this.handleChange}
          />
          <button type="submit">Log in</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState): StateProps => ({
  loginFormData: state.loginForm
});

const mapDispatchToProps = (dispatch: AppDispatch): DispatchProps => ({
  handleChange: (fieldName: string, value: string): void => {
    dispatch(loginFormChange(fieldName, value));
  },
  handleLogin: (usernameOrEmail: string, password: string): void => {
    dispatch(loginUser(usernameOrEmail, password));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
