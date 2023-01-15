export type User = {
  email: string;
  username: string;
};

export type LoggedInUserType = {
  isLoggedIn: boolean;
  user: User | null;
};

export type signupFormType = {
  username: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  errors: string;
};

export type loginFormType = {
  usernameOrEmail: string;
  password: string;
};
