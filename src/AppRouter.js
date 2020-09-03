import React from "react";
import { Route } from "react-router-dom";

import NavBar from "./components/utilities/NavBar";

import Home from "./components/pages/Home";
import Mission from "./components/pages/Mission";
import CodeOfConduct from "./components/pages/CodeOfConduct";
import Connect from "./components/pages/Connect";
import SingleBlog from "./components/pages/blogs/singleBlogPost";


import Content from "./components/pages/content";

const AppRouter = () => (
  <div>
    <NavBar />
    <Route exact path="/" component={Home} />
    <Route exact path="/mission" component={Mission} />
    <Route exact path="/codeofconduct" component={CodeOfConduct} />
    <Route exact path="/connect" component={Connect} />
    <Route exact path="/single_blog/:blogId" component={SingleBlog}/>



    {/* Test route for JSON*/}
    <Route exact path="/content" component={Content} />
  </div>
);

export default AppRouter;
