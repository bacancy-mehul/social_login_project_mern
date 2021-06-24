import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Post from "./components/Post/Post";
import User from "./components/User/User";

const App = () => (
  <BrowserRouter>
    {/* <Container maxWidth="lg"> */}
    <Navbar />
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/post" exact component={Post} />
        <Route path="/user" exact component={User} />
      </Switch>
    {/* </Container> */}
  </BrowserRouter>
);

export default App;
