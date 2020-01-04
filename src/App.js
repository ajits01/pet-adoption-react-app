import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div id="app-container">
      <h1>Adopt Me!</h1>
      <Pet name="Milo" animal="Dog" breed="Golden Retriever"></Pet>
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Kitty" animal="Cat" breed="Mixed" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
