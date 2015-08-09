import React from 'react';
import Router from 'react-router';
import {MainApp} from './components/MainApp.react';
import {Home} from './components/Home.react';
const { Route, DefaultRoute, RouteHandler, Link } = Router;

let routes = (
  <Route handler={MainApp} path="/">
    <DefaultRoute handler={Home} />
  </Route>
);

export default routes; 
