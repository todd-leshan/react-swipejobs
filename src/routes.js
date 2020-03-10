import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import App from "./App";
import Cutup from "./views/Cutup";
import CutupLoading from "./views/CutupLoading";

const AllRoutes = () => (
  <Router>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/cutup" component={Cutup} />
      <Route path="/loading" component={CutupLoading} />
    </Switch>
  </Router>
);

export default AllRoutes;
