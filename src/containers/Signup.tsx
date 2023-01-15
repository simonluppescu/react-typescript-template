import React from "react";
import { connect } from "react-redux";

import { signupFormChange, signupUser } from "../actions";
import { AppState } from "../store/configureStore";
import { AppDispatch } from "../types/common";
import { signupFormType } from "../types/userAuthTypes";

type StateProps = {
  signupFormData: signupFormType;
};

type DispatchProps = {
  handleChange: (fieldName: string, value: string) => void;
  handleSignup: (signupFormData: signupFormType) => void;
};

type Props = StateProps & DispatchProps;

export class Signup extends React.Component<Props> {
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

    this.props.handleSignup(this.props.signupFormData);
  }

  render(): React.ReactNode {
    return (
      <div>
        <h1>Sign up</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Username"
            type="text"
            name="username"
            value={this.props.signupFormData.username}
            onChange={this.handleChange}
          />
          <input
            placeholder="Email"
            type="text"
            name="email"
            value={this.props.signupFormData.email}
            onChange={this.handleChange}
          />
          <input
            placeholder="Password"
            type="password"
            name="password"
            value={this.props.signupFormData.password}
            onChange={this.handleChange}
          />
          <input
            placeholder="Password confirmation"
            type="password"
            name="passwordConfirmation"
            value={this.props.signupFormData.passwordConfirmation}
            onChange={this.handleChange}
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState): StateProps => ({
  signupFormData: state.signupForm
});

const mapDispatchToProps = (dispatch: AppDispatch): DispatchProps => ({
  handleChange: (fieldName: string, value: string): void => {
    dispatch(signupFormChange(fieldName, value));
  },
  handleSignup: (signupFormData: signupFormType): void => {
    dispatch(signupUser(signupFormData));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
