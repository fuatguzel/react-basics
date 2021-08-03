const MyComponent = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.age),
  ]);
};

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
