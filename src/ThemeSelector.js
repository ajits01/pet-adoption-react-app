import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

export default function ThemeSelector() {
  const [theme, setTheme] = useContext(ThemeContext);

  return (
    <div
      style={{
        display: "flex",
        alignSelf: "flex-end",
        flexDirection: "row-reverse",
        padding: "15px 35px"
      }}
    >
      <label htmlFor="theme" style={{ display: "flex" }}>
        <span style={{ backgroundColor: theme, padding: "0 5px" }}>Theme</span>
        <select
          id="theme"
          value={theme}
          onChange={e => setTheme(e.target.value)}
          onBlur={e => setTheme(e.target.value)}
        >
          <option value="peru">Peru</option>
          <option value="teal">Teal</option>
          <option value="chartreuse">Chartreuse</option>
          <option value="mediumorchid">Medium Orchid</option>
        </select>
      </label>
    </div>
  );
}
