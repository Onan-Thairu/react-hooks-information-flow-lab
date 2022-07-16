import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  const mode = isDarkMode ? "Dark" : "Light"

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header modeClick={ handleDarkModeClick } mode={ mode } />
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
