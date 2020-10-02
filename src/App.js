import React, { useState } from 'react';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import login from './component/login';
import ScrollToTop from './component/ScrollToTop';
import { Navbar, Nav, NavItem, NavLink, Container, Col } from 'reactstrap';

const App = () => {

  return (
    <div>
      <Router>
        <ScrollToTop />
        <Navbar fixed="top" style={{ margin: '0px', padding: '0px' }}>
          <Col style={{ flex: 'display', alignSelf: 'baseline', margin: '0px', padding: '0px', backgroundColor: "white", height: '24px' }}>
            <Container fluid={true} style={{ padding: '0px', maxWidth: '100vh', height: '100%' }}>
              <Nav>
                <NavLink style={{ padding: '0px', margin: '0px', marginRight: '18px', color: 'black' }}>UFABET</NavLink>
                <NavLink style={{ padding: '0px', margin: '0px', marginRight: '18px', color: 'black' }}>สมัคร UFABET</NavLink>
                <NavLink style={{ padding: '0px', margin: '0px', marginRight: '18px', color: 'black' }}>ทางเข้า ufabet & betufa</NavLink>
              </Nav>
            </Container>
          </Col>
        </Navbar>
        <Switch>
          <Route exact path="/" component={login} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
