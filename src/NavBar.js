import React from "react";
import { Link } from "@reach/router";
import { css } from "@emotion/core";

const NavBar = () => {
  return (
    <header
      css={css`
        background: radial-gradient(
          circle,
          rgba(217, 193, 72, 1) 0%,
          rgba(217, 193, 72, 0.8) 35%,
          rgba(217, 193, 72, 0) 100%
        );
        background-color: transparent;
        &:hover {
          background-color: rgb(217, 193, 72);
        }
        transition: background-color 0.4s ease-in 0s;
        padding: 15px;
        border-radius: 2em;
        display: flex;
        align-items: center;
        font-size: xx-large;
      `}
    >
      <Link to="/">Adopt Me!</Link>
    </header>
  );
};

export default NavBar;
