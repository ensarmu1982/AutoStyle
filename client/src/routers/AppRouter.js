import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import PageNotFound from '../components/PageNotFound';
import Location from "../components/Location";


const AppRouter = () => (
  <BrowserRouter>
        <Route path="/" component={Location} exact ={true} />
  </BrowserRouter>
);

export default AppRouter;
