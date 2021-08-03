import React from "react";

const MyComponent = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <h3>{props.age}</h3>
    </div>
  );
};

export default MyComponent;
