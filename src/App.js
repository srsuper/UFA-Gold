import React, { useState } from 'react';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import login from './component/login';
import { Container, Card, Button, Row } from 'reactstrap';

const App = () => {

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={login} />
        </Switch>
      </Router>

    </div>
  )
}

export default App;
