import React, { Fragment } from "react";
// import {mount } from 'marketing/MarketingApp';
import MarketingApp from "./components/MarketingApp";

// console.log('mount', mount)

export default () => {
  return (
    <Fragment>
      <h1>Hi There!</h1>
      <hr />
      <MarketingApp />
    </Fragment>
  );
};
