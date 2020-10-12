import React, { Fragment, useState } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Login from "./component/login";
import Promotion from "./component/promotion";
import Sport from "./component/sport";
import Slot from "./component/slot";
import Casino from "./component/casino";
import Aicasino from "./component/aicasino";
import Aiball from "./component/aiball";
import Game from "./component/game";
import ScrollToTop from "./component/ScrollToTop";
import menubanner from "./img/menubar.png";
import headermin from "./img/header-min.jpg";
import { Row, Col, Navbar, Nav, NavLink, Container, Button } from "reactstrap";
import Media from "react-media";
import { IconButton } from "@material-ui/core";

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
                      href="https://lin.ee/9gF9r1T"
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
                          href="/"
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
                          href="https://lin.ee/9gF9r1T"
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
                          href="/promotion"
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
                          href="/casino"
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
                          href="/slot"
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
                          href="/aiball"
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
                          href="/aicasino"
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
                          href="https://www.xn--l3cmpqi1c5c0a.com/"
                          style={{
                            color: "white",
                            border: "0px solid gray",
                            padding: "0.4rem 0.4rem",
                            borderRadius: "0px",
                            fontFamily: "Mitr",
                            fontSize: "15px",
                          }}
                        >
                          ดูบอลออนไลน์
                        </Button>
                        <Button
                          outline
                          color="warning"
                          href="https://lin.ee/9gF9r1T"
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
                    <a href="https://lin.ee/9gF9r1T">
                      <img src={headermin} style={{ width: "100%" }}></img>
                    </a>
                  </Col>
                  <Nav
                    style={{
                      width: "100%",
                      backgroundColor: "white",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <NavLink
                      href="https://www.ufabet.com/"
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
                      href="https://lin.ee/9gF9r1T"
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
                      href="/"
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
                      <a href="https://www.ufabet.com/">
                        <img
                          src={menubanner}
                          style={{
                            width: "100%",
                          }}
                        ></img>
                      </a>
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
                          href="/"
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
                          href="https://lin.ee/9gF9r1T"
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
                          href="/promotion"
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
                          href="/casino"
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
                          href="/slot"
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
                          href="/aiball"
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
                          href="/aicasino"
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
                          href="https://www.xn--l3cmpqi1c5c0a.com/"
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
                          ดูบอลออนไลน์
                        </Button>
                        <Button
                          color="warning"
                          href="https://lin.ee/9gF9r1T"
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
          <Route exact path="/promotion" component={Promotion} />
          <Route exact path="/sport" component={Sport} />
          <Route exact path="/slot" component={Slot} />
          <Route exact path="/casino" component={Casino} />
          <Route exact path="/game" component={Game} />
          <Route exact path="/aicasino" component={Aicasino} />
          <Route exact path="/aiball" component={Aiball} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
