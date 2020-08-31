import React from "react";
import AppRouter from "./AppRouter";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/utilities/Footer";

// changes
const App = () => (
  <div style={{ fontFamily: "DINCondensed-Bold" }}>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
    <Footer />
  </div>
);

export default App;
