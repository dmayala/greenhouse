import React from 'react';
import Router from 'react-router';
import MainApp from 'components/MainApp.react';
import Home from 'components/Home.react';
import ProductList from 'components/ProductList.react';
import ProductDetails from 'components/ProductDetails.react';
const { Route, DefaultRoute, RouteHandler, Link } = Router;

let routes = (
  <Route handler={MainApp} path="/">
    <DefaultRoute handler={Home} />
    <Route name="products" path="products">
      <DefaultRoute handler={ProductList} />
      <Route name="productDetails" path=":id" handler={ProductDetails} />
    </Route>
  </Route>
);

export default routes; 
