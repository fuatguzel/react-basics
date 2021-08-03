import React from "react";
import ReactDOM from "react-dom";
import MyComponent from "./MyComponent";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Hi React!</h1>
      <SearchParams />
      <MyComponent name="Ali" age="24" />
      <MyComponent name="Ayşe" age="12" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
