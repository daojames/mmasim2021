import React, { useState } from "react";
import { render } from "react-dom";
import { Switch, Route, withRouter, useHistory, Link, BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import logo from './mmasim2021logo.png';
import './App.css';
import './AppCustomize.css';
import './AppHome.css';
import Start from './Start.js';
import Style from './Style.js';
import Customize from './Customize.js';

const Button = styled.button`
  background-color: transparent;
  color: white;
  padding: 30px 100px;
  font-size: 40px;
  border: 2px solid white;
  border-radius: 2px;
  outline: 0;
  transition: ease background-color 250ms;
  &:hover {
    background-color: #616161;
  }
`

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Start} />
          <Route path="/style" exact component={Style} />
          <Route path="/customize" exact component={Customize} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;