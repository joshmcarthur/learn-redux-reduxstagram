import React from "react";
import App from "./components/App";
import Single from "./components/Single";
import PhotoGrid from "./components/PhotoGrid";

import { Router, Route, IndexRoute } from "react-router";
import { Provider } from "react-redux";
import store, { history } from "./store";

const Reduxstagram = props => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={PhotoGrid} />
          <Route path="/view/:postId" component={Single} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Reduxstagram;
