import React from "react";
import ReactDOM from "react-dom";
import MyComponent from "./MyComponent";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Hi React!"),
    React.createElement(MyComponent, {
      name: "Ali",
      age: 24,
    }),
    React.createElement(MyComponent, {
      name: "Ayşe",
      age: 12,
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
