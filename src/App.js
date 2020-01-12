import React, { useState, lazy, Suspense } from "react";
import { Router } from "@reach/router";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import ThemeContext from "./ThemeContext";
import ThemeSelector from "./ThemeSelector";
import NavBar from "./NavBar";

const Details = lazy(() => import("./Details"));

const App = () => {
  const themeHook = useState("peru");
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div id="app-container">
          <NavBar />
          <ThemeSelector />
          <Suspense fallback={<h1>Loading Route…</h1>}>
            <Router>
              <SearchParams path="/" />
              <Details path="/details/:id" />
            </Router>
          </Suspense>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
