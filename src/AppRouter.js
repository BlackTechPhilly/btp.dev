import React from "react";
import { Route, Switch } from "react-router-dom";

import NavBar from "./components/utilities/NavBar";

import Home from "./components/pages/Home";
import Mission from "./components/pages/Mission";
import CodeOfConduct from "./components/pages/CodeOfConduct";
import Connect from "./components/pages/Connect";
import SingleBlog from "./components/pages/blogs/Item";

const AppRouter = () => (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/item/:blogId" component={SingleBlog} />
      <Route exact path="/mission" component={Mission} />
      <Route exact path="/codeofconduct" component={CodeOfConduct} />
      <Route exact path="/connect" component={Connect} />
    </Switch>
  </div>
);

export default AppRouter;
