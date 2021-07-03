import React from "react";

import "../styles/scss/someStyles.scss";

interface Props {
  // Some props
}

const MyComponent: React.FC<Props> = (props) => (
  <div>
    <h1 className="hello-world">Hello World</h1>
  </div>
);

export default MyComponent;
