import React, { Fragment, useState } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Login from "./component/login";
import ScrollToTop from "./component/ScrollToTop";
import menubanner from "./img/menubar.png";
import headermin from "./img/header-min.jpg";
import { Row, Col, Navbar, Nav, NavLink, Container, Button } from "reactstrap";
import Media from "react-media";

const App = () => {
  return (
    <div>
      <Router>
        <Media
          queries={{
            small: { maxWidth: 990 },
            nomal: { minWidth: 991 },
          }}
        >
          {(matches) => (
            <Fragment>
              {matches.nomal && (
                <div
                  class="sticky"
                  style={{
                    backgroundColor: "black",
                  }}
                >
                  <ScrollToTop />
                  <Nav
                    style={{
                      width: "100%",
                      backgroundColor: "white",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <NavLink
                      href="#"
                      style={{
                        padding: "0px",
                        margin: "0px",
                        marginRight: "18px",
                        color: "black",
                      }}
                    >
                      UFABET
                    </NavLink>
                    <NavLink
                      href="#"
                      style={{
                        padding: "0px",
                        margin: "0px",
                        marginRight: "18px",
                        color: "black",
                      }}
                    >
                      สมัคร UFABET
                    </NavLink>
                    <NavLink
                      href="#"
                      style={{
                        padding: "0px",
                        margin: "0px",
                        marginRight: "18px",
                        color: "black",
                      }}
                    >
                      ทางเข้า ufabet & betufa
                    </NavLink>
                  </Nav>
                  <div class="menu-banner">
                    <div
                      style={{
                        height: "320px",
                        maxHeight: "305px",
                        minHeight: "35px",
                      }}
                    ></div>
                    <Row
                      style={{
                        padding: "0px",
                        margin: "0px",
                        flex: "dispaly",
                        flexWrap: "wrap",
                      }}
                    >
                      <Nav
                        style={{
                          justifyContent: "center",
                        }}
                      >
                        <Button
                          outline
                          color="warning"
                          href="#"
                          style={{
                            color: "white",
                            border: "0px solid gray",
                            padding: "0.4rem 0.4rem",
                            borderRadius: "0px",
                            fontFamily: "Mitr",
                            fontSize: "15px",
                          }}
                        >
                          ยูฟ่าเบท
                        </Button>
                        <Button
                          outline
                          color="warning"
                          href="#"
                          style={{
                            color: "white",
                            border: "0px solid gray",
                            padding: "0.4rem 0.4rem",
                            borderRadius: "0px",
                            fontFamily: "Mitr",
                            fontSize: "15px",
                          }}
                        >
                          สมัคร UFABET
                        </Button>
                        <Button
                          outline
                          color="warning"
                          href="#"
                          style={{
                            color: "white",
                            border: "0px solid gray",
                            padding: "0.4rem 0.4rem",
                            borderRadius: "0px",
                            fontFamily: "Mitr",
                            fontSize: "15px",
                          }}
                        >
                          โปรโมชั่น
                        </Button>
                        <Button
                          outline
                          color="warning"
                          href="#"
                          style={{
                            color: "white",
                            border: "0px solid gray",
                            padding: "0.4rem 0.4rem",
                            borderRadius: "0px",
                            fontFamily: "Mitr",
                            fontSize: "15px",
                          }}
                        >
                          แทงบอลออนไลน์
                        </Button>
                        <Button
                          outline
                          color="warning"
                          href="#"
                          style={{
                            color: "white",
                            border: "0px solid gray",
                            padding: "0.4rem 0.4rem",
                            borderRadius: "0px",
                            fontFamily: "Mitr",
                            fontSize: "15px",
                          }}
                        >
                          คาสิโนออนไลน์
                        </Button>
                        <Button
                          outline
                          color="warning"
                          href="#"
                          style={{
                            color: "white",
                            border: "0px solid gray",
                            padding: "0.4rem 0.4rem",
                            borderRadius: "0px",
                            fontFamily: "Mitr",
                            fontSize: "15px",
                          }}
                        >
                          บาคาร่า
                        </Button>
                        <Button
                          outline
                          color="warning"
                          href="#"
                          style={{
                            color: "white",
                            border: "0px solid gray",
                            padding: "0.4rem 0.4rem",
                            borderRadius: "0px",
                            fontFamily: "Mitr",
                            fontSize: "15px",
                          }}
                        >
                          สล็อต
                        </Button>
                        <Button
                          outline
                          color="warning"
                          href="#"
                          style={{
                            color: "white",
                            border: "0px solid gray",
                            padding: "0.4rem 0.4rem",
                            borderRadius: "0px",
                            fontFamily: "Mitr",
                            fontSize: "15px",
                          }}
                        >
                          ไฮโล
                        </Button>
                        <Button
                          outline
                          color="warning"
                          href="#"
                          style={{
                            color: "white",
                            border: "0px solid gray",
                            padding: "0.4rem 0.4rem",
                            borderRadius: "0px",
                            fontFamily: "Mitr",
                            fontSize: "15px",
                          }}
                        >
                          สูตรแทงบอล
                        </Button>
                        <Button
                          outline
                          color="warning"
                          href="#"
                          style={{
                            color: "white",
                            border: "0px solid gray",
                            padding: "0.4rem 0.4rem",
                            borderRadius: "0px",
                            fontFamily: "Mitr",
                            fontSize: "15px",
                          }}
                        >
                          สูตรคาสิโน
                        </Button>
                        <Button
                          outline
                          color="warning"
                          href="#"
                          style={{
                            color: "white",
                            border: "0px solid gray",
                            padding: "0.4rem 0.4rem",
                            borderRadius: "0px",
                            fontFamily: "Mitr",
                            fontSize: "15px",
                          }}
                        >
                          ทายผลบอล
                        </Button>
                        <Button
                          outline
                          color="warning"
                          href="#"
                          style={{
                            color: "white",
                            border: "0px solid gray",
                            padding: "0.4rem 0.4rem",
                            borderRadius: "0px",
                            fontFamily: "Mitr",
                            fontSize: "15px",
                          }}
                        >
                          ติดต่อ ยูฟ่าเบท
                        </Button>
                      </Nav>
                    </Row>
                  </div>
                </div>
              )}
              {matches.small && (
                <Container fluid={true} style={{ padding: "0px" }}>
                  <Col
                    style={{
                      width: "100%",
                      padding: "0px",
                      maigin: "0px",
                      flex: "display",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img src={headermin} style={{ width: "100%" }}></img>
                  </Col>
                  <Nav
                    style={{
                      width: "100%",
                      backgroundColor: "white",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <NavLink
                      href="#"
                      style={{
                        padding: "0px",
                        margin: "0px",
                        marginRight: "18px",
                        color: "black",
                      }}
                    >
                      UFABET
                    </NavLink>
                    <NavLink
                      href="#"
                      style={{
                        padding: "0px",
                        margin: "0px",
                        marginRight: "18px",
                        color: "black",
                      }}
                    >
                      สมัคร UFABET
                    </NavLink>
                    <NavLink
                      href="#"
                      style={{
                        padding: "0px",
                        margin: "0px",
                        marginRight: "18px",
                        color: "black",
                      }}
                    >
                      ทางเข้า ufabet & betufa
                    </NavLink>
                  </Nav>
                  <Nav
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "gray",
                      width: "100%",
                    }}
                  >
                    <Col
                      style={{
                        padding: "0px",
                      }}
                    >
                      <img
                        src={menubanner}
                        style={{
                          width: "100%",
                        }}
                      ></img>
                      <Row
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                          margin: "0px",
                          margin: "0px",
                        }}
                      >
                        <Button
                          color="warning"
                          href="#"
                          style={{
                            borderRadius: "0px",
                            border: "1px solid black",
                            width: "33.33%",
                            color: "black",
                            fontFamily: "Mitr",
                            fontSize: "14px",
                            height: "36px",
                          }}
                        >
                          ยูฟ่าเบท
                        </Button>
                        <Button
                          color="warning"
                          href="#"
                          style={{
                            borderRadius: "0px",
                            border: "1px solid black",
                            width: "33.33%",
                            color: "black",
                            fontFamily: "Mitr",
                            fontSize: "14px",
                            height: "36px",
                          }}
                        >
                          สมัคร UFABET
                        </Button>
                        <Button
                          color="warning"
                          href="#"
                          style={{
                            borderRadius: "0px",
                            border: "1px solid black",
                            width: "33.33%",
                            color: "black",
                            fontFamily: "Mitr",
                            fontSize: "14px",
                            height: "36px",
                          }}
                        >
                          โปรโมชั่น
                        </Button>
                      </Row>
                      <Row
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                          margin: "0px",
                        }}
                      >
                        <Button
                          color="warning"
                          href="#"
                          style={{
                            borderRadius: "0px",
                            border: "1px solid black",
                            width: "33.33%",
                            color: "black",
                            fontFamily: "Mitr",
                            fontSize: "14px",
                            height: "36px",
                          }}
                        >
                          แทงบอลออนไลน์
                        </Button>
                        <Button
                          color="warning"
                          href="#"
                          style={{
                            borderRadius: "0px",
                            border: "1px solid black",
                            width: "33.33%",
                            color: "black",
                            fontFamily: "Mitr",
                            fontSize: "14px",
                            height: "36px",
                          }}
                        >
                          คาสิโนออนไลน์
                        </Button>
                        <Button
                          color="warning"
                          href="#"
                          style={{
                            borderRadius: "0px",
                            border: "1px solid black",
                            width: "33.33%",
                            color: "black",
                            fontFamily: "Mitr",
                            fontSize: "14px",
                            height: "36px",
                          }}
                        >
                          บาคาร่า
                        </Button>
                      </Row>
                      <Row
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                          margin: "0px",
                        }}
                      >
                        <Button
                          color="warning"
                          href="#"
                          style={{
                            borderRadius: "0px",
                            border: "1px solid black",
                            width: "33.33%",
                            color: "black",
                            fontFamily: "Mitr",
                            fontSize: "14px",
                            height: "36px",
                          }}
                        >
                          สล็อต
                        </Button>
                        <Button
                          color="warning"
                          href="#"
                          style={{
                            borderRadius: "0px",
                            border: "1px solid black",
                            width: "33.33%",
                            color: "black",
                            fontFamily: "Mitr",
                            fontSize: "14px",
                            height: "36px",
                          }}
                        >
                          ไฮโล
                        </Button>
                        <Button
                          color="warning"
                          href="#"
                          style={{
                            borderRadius: "0px",
                            border: "1px solid black",
                            width: "33.33%",
                            color: "black",
                            fontFamily: "Mitr",
                            fontSize: "14px",
                            height: "36px",
                          }}
                        >
                          สูตรแทงบอล
                        </Button>
                      </Row>
                      <Row
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                          margin: "0px",
                        }}
                      >
                        <Button
                          color="warning"
                          href="#"
                          style={{
                            borderRadius: "0px",
                            border: "1px solid black",
                            width: "33.33%",
                            color: "black",
                            fontFamily: "Mitr",
                            fontSize: "14px",
                            height: "36px",
                          }}
                        >
                          สูตรคาสิโน
                        </Button>
                        <Button
                          color="warning"
                          href="#"
                          style={{
                            borderRadius: "0px",
                            border: "1px solid black",
                            width: "33.33%",
                            color: "black",
                            fontFamily: "Mitr",
                            fontSize: "14px",
                            height: "36px",
                          }}
                        >
                          ทายผลบอล
                        </Button>
                        <Button
                          color="warning"
                          href="#"
                          style={{
                            borderRadius: "0px",
                            border: "1px solid black",
                            width: "33.33%",
                            color: "black",
                            fontFamily: "Mitr",
                            fontSize: "14px",
                            height: "36px",
                          }}
                        >
                          ติดต่อ ยูฟ่าเบท
                        </Button>
                      </Row>
                    </Col>
                  </Nav>
                </Container>
              )}
            </Fragment>
          )}
        </Media>

        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
