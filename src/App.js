import React from "react";
import MainLayout from "./components/Layout/Layouts";

import { GlobalStyle } from "./lib/styles";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <MainLayout />
    </div>
  );
}

export default App;
