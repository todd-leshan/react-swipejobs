import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

import rootReducer from "./redux/reducers";

import App from "./App";
import Cutup from "./views/Cutup";
import CutupLoading from "./views/CutupLoading";

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

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
