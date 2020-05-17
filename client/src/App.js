import React from "react";
import AppRouter from "./AppRouter";
import { BrowserRouter } from "react-router-dom";

const App = () => (
  <div style={{ fontFamily: "DINCondensed-Bold" }}>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </div>
);

export default App;
