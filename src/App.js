const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

const App = () => {
  return React.createElement(
    "div",
    { id: "app-container" }, // attributes to pass into
    [
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Pet, {
        name: "Milo",
        animal: "Dog",
        breed: "Golden Retriever"
      }),
      React.createElement(Pet, {
        name: "Pepper",
        animal: "Bird",
        breed: "Cockatiel"
      }),
      React.createElement(Pet, { name: "Kitty", animal: "Cat", breed: "Mixed" })
    ] // childrens
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
