import React from "react";
import App from "./components/App";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";

const Reduxstagram = props => {
  return (
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  );
};

export default Reduxstagram;
