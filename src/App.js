import React, { useState } from "react";
import { Router } from "@reach/router";
import SearchParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from "./ThemeContext";
import ThemeSelector from "./ThemeSelector";
import NavBar from "./NavBar";

const App = () => {
  const themeHook = useState("peru");
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div id="app-container">
          <NavBar />
          <ThemeSelector />
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

export default App;
