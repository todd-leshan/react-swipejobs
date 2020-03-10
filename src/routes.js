import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import rootReducer from "./redux/reducers";

import App from "./App";
import Cutup from "./views/Cutup";
import CutupLoading from "./views/CutupLoading";

const store = createStore(rootReducer);

const AllRoutes = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/cutup" component={Cutup} />
        <Route path="/loading" component={CutupLoading} />
      </Switch>
    </Router>
  </Provider>
);

export default AllRoutes;
