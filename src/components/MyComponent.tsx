import React from "react";
import { Link } from "react-router-dom";

import "../styles/scss/someStyles.scss";

import Logout from "../containers/Logout";

type Props = {
  name: string;
};

const MyComponent: React.FC<Props> = (props) => (
  <div>
    <h1 className="hello-world">Hello {props.name}!</h1>
    <Link to="/login">Log In</Link>
    <br />
    <Link to="/signup">Sign Up</Link>
    <br />
    <Logout />
  </div>
);

export default MyComponent;
