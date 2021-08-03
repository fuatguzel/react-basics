import React from "react";
import ReactDOM from "react-dom";
import MyComponent from "./MyComponent";

const App = () => {
  return (
    <div>
      <h1>Hi React!</h1>
      <MyComponent name="Ali" age="24" />
      <MyComponent name="Ayşe" age="12" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
