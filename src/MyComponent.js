import React from "react";

const MyComponent = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.age),
  ]);
};

export default MyComponent;
