import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import home from "./screens/home/Home"


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={home} />


      </Switch>
  </BrowserRouter>
  ,
  document.getElementById('root')
);
