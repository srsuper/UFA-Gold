import React, { Fragment, useEffect, useState } from "react";
import {
  Col,
  Row,
  Container,
  Button,
  Card,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  CardImg,
  Navbar,
} from "reactstrap";
import LoginCard from "./logincard";
import BannerF from "../img/banner-footer.jpg";
import BannerHow from "../img/how.jpg";
import game1pix from "../img/game1.jpg";
import game2pix from "../img/game2.jpg";
import game3pix from "../img/game3.jpg";
import promotion1 from "../img/Promotion1.png";
import promotion2 from "../img/Promotion2.png";
import promotion3 from "../img/Promotion3.png";
import sidepro1 from "../img/sidepro1.png";
import sidepro2 from "../img/sidepro2.png";
import sidepro3 from "../img/sidepro3.png";
import IconButton from "@material-ui/core/IconButton";
import Media from "react-media";

const aicasino = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Media
        queries={{
          small: { maxWidth: 800 },
          nomal: { minWidth: 801 },
        }}
      >
        {(macthes) => (
          <Fragment>
            {macthes.small && (
              <Container
                fluid={true}
                style={{
                  maxWidth: "100%",
                  backgroundColor: "black",
                  paddingTop: "5px",
                }}
              >
                <LoginCard />

                <Row>
                  <Col style={{ backgroundColor: "black", height: "100%" }}>
                    <Row
                      style={{
                        backgroundColor: "gold",
                        paddingTop: "5px",
                        paddingBottom: "5px",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Row
                        style={{
                          width: "100%",
                          backgroundColor: "darkgoldenrod",
                          flex: "display",
                          flexDirection: "row",
                          flexWrap: "wrap",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <IconButton
                          href="/casino"
                          style={{
                            padding: "0px",
                            margin: "2px",
                            border: "1px solid #555",
                            width: "100%",
                          }}
                        >
                          <CardImg
                            onClick={() => {
                              console.log("ClickFromIMGGame1");
                            }}
                            src={game1pix}
                          ></CardImg>
                        </IconButton>

                        <IconButton
                          href="/sport"
                          style={{
                            padding: "0px",
                            margin: "2px",
                            border: "1px solid #555",
                            width: "100%",
                          }}
                        >
                          <CardImg
                            onClick={() => {
                              console.log("ClickFromIMGGame2");
                            }}
                            src={game2pix}
                          ></CardImg>
                        </IconButton>
                        <IconButton
                          href="/game"
                          style={{
                            padding: "0px",
                            margin: "2px",
                            border: "1px solid #555",
                            width: "100%",
                          }}
                        >
                          <CardImg
                            onClick={() => {
                              console.log("ClickFromIMGGame3");
                            }}
                            src={game3pix}
                          ></CardImg>
                        </IconButton>
                      </Row>
                    </Row>

                    <Row
                      style={{
                        justifyItems: "center",
                        flex: "display",
                        flexWrap: "wrap-reverse",
                      }}
                    >
                      <Col style={{ backgroundColor: "black", padding: "2px" }}>
                        <Card
                          style={{
                            border: "1px solid #555",
                            marginTop: "10px",
                            marginBottom: "10px",
                            backgroundColor: "black",
                            width: "100%",
                          }}
                        >
                          <Row
                            style={{
                              marginBottom: "5px",
                              padding: "0px",
                              margin: "0px",
                            }}
                          >
                            <span
                              style={{
                                width: "1%",
                                backgroundColor: "gold",
                              }}
                            ></span>
                            <span
                              style={{
                                width: "99%",
                                backgroundColor: "whitesmoke",
                                fontFamily: "Mitr",
                                fontSize: "30px",
                                fontWeight: "bold",
                                color: "black",
                              }}
                            >
                              สูตรคาสิโนออนไลน์
                            </span>
                          </Row>

                          <span
                            style={{
                              margin: "20px",
                              marginBottom: "5px",
                              fontFamily: "Mitr",
                              fontSize: "20px",
                              fontWeight: "bold",
                              color: "#d6b318",
                            }}
                          >
                            สูตรบาคาร่าออนไลน์ / แนวทางการเล่น บาคาร่าออนไลน์
                          </span>
                          <Label
                            style={{
                              margin: "20px",
                              marginTop: "5px",
                              fontFamily: "Mitr",
                              fontSize: "14px",
                              fontWeight: "lighter",
                              color: "#ccc",
                            }}
                          >
                            โดยปกติแล้วการเล่นบาคาร่าออนไลน์เป็นเกมที่ได้รับความนิยมมากที่สุด
                            ทางUFABETให้บริการโดยทีมงานจาก UFABETCN
                            มีเกมให้บริการเป็นจำนวนมากรวมถึงบาคาร่าออนไลน์ที่เรามีให้เลือกเล่นมากมาย
                            เช่น Gold Deluxe , SA Gaming , W88 ท่านที่สนใจ
                            <br />
                            <br />
                            <a style={{ color: "red", fontWeight: "bold" }}>
                              {" "}
                              สูตรบาคาร่า ปิงปอง{" "}
                            </a>
                            <br />
                            วิธีการเล่นบาคาร่าออนไลน์ปิงปองให้ทำการเดิมพันฝั่งตรงข้ามกับตาที่แล้วสลับไปมา
                            เช่น 2ตาแรก ออก banker สีแดง และ ตาที่2ออก player
                            สีน้ำเงิน เพราะฉะนั้นทำการเดิมพันในตาที่3นั้นให้เล่น
                            banker สีแดง
                            <br />
                            <br />
                            <a style={{ color: "red", fontWeight: "bold" }}>
                              {" "}
                              สูตรบาคาร่า แทงซ้ำ หรือ มังกร{" "}
                            </a>
                            <br />
                            วิธีการเล่นบาคาร่าออนไลน์แทงซ้ำหรือ มังกร
                            ให้ทำการเดิมพันฝั่งเดียวกันกับตาที่แล้ว เช่น 2ตาแรก
                            ออกplayer สีน้ำเงิน 2ตาติดกันให้ทำการเดิมพัน player
                            สีน้ำเงิน อีกครั้ง ถ้าผลออกมาถูกต้องอีก ควรลง player
                            สีน้ำเงิน ต่อไปจนเปลี่ยนเป็น banker สีแดง
                            <br />
                            <br />
                            <a style={{ color: "red", fontWeight: "bold" }}>
                              {" "}
                              สูตรบาคาร่า แทงทบ{" "}
                            </a>
                            <br />
                            วิธีเล่น บาคาร่าออนไลน์ แทงทบ
                            ให้ทำการเดิมพันเพิ่มขึ่น เท่าตัวหรือมากกว่า เช่น
                            ตาที่แล้ว เดิมพัน 1000บาท ตานี้ลง 2000บาท
                            เพื่อเป็นการแทงทบ โดยนำสูตรทั้ง2ข้อด้านบน
                            นำมาพิจรณาเพื่อความแม่นยำ
                            <br />
                            <br />
                            <br />
                            <br />
                            **
                            <a style={{ color: "blue", fontWeight: "initial" }}>
                              {" "}
                              หมากาพย์เนื้อหาเกี่ยวกับการเล่นกฎกติกาเทคนิคบาคาร่า{" "}
                            </a>
                            กดเลย!! ห้ามพลาด {"–>"}{" "}
                            <a
                              href="/baccarat"
                              style={{
                                color: "whitesmoke",
                                fontWeight: "initial",
                              }}
                            >
                              บาคาร่า
                            </a>
                          </Label>
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row style={{ padding: "5px", justifyContent: "center" }}>
                  <IconButton
                    href="https://lin.ee/9gF9r1T"
                    style={{ margin: "5px", padding: "0px", width: "100%" }}
                  >
                    <img
                      src={promotion1}
                      alt="Promotion 1"
                      style={{
                        padding: "0px",
                        width: "100%",
                        objectFit: "contain",
                      }}
                    ></img>
                  </IconButton>
                  <IconButton
                    href="https://lin.ee/9gF9r1T"
                    style={{ margin: "5px", padding: "0px", width: "100%" }}
                  >
                    <img
                      src={promotion2}
                      alt="Promotion 2"
                      style={{
                        padding: "0px",
                        width: "100%",
                        objectFit: "contain",
                      }}
                    ></img>
                  </IconButton>
                  <IconButton
                    style={{ margin: "5px", padding: "0px", width: "100%" }}
                  >
                    <img
                      href="https://lin.ee/9gF9r1T"
                      src={promotion3}
                      alt="Promotion 3"
                      style={{
                        padding: "0px",
                        width: "100%",
                        objectFit: "contain",
                      }}
                    ></img>
                  </IconButton>
                </Row>
                <Row>
                  <Col style={{ margin: "0px", padding: "0px" }}>
                    <img style={{ width: "100%" }} src={BannerF}></img>
                  </Col>
                </Row>
              </Container>
            )}
            {macthes.nomal && (
              <Container
                fluid={true}
                style={{ maxWidth: "100vh", backgroundColor: "black" }}
              >
                <Row>
                  <Col style={{ backgroundColor: "black", height: "100%" }}>
                    <Row
                      style={{
                        backgroundColor: "gold",
                        paddingTop: "5px",
                        paddingBottom: "5px",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Row
                        style={{
                          width: "100%",
                          backgroundColor: "darkgoldenrod",
                          flex: "display",
                          flexWrap: "wrap",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Col md="4" style={{ padding: "0px" }}>
                          <IconButton
                            href="/casino"
                            style={{
                              padding: "0px",
                              margin: "2px",
                              border: "1px solid #555",
                              maxWidth: "100%",
                            }}
                          >
                            <CardImg
                              onClick={() => {
                                console.log("ClickFromIMGGame1");
                              }}
                              src={game1pix}
                            ></CardImg>
                          </IconButton>
                        </Col>
                        <Col md="4" style={{ padding: "0px" }}>
                          <IconButton
                            href="/sport"
                            style={{
                              padding: "0px",
                              margin: "2px",
                              border: "1px solid #555",
                              maxWidth: "100%",
                            }}
                          >
                            <CardImg
                              onClick={() => {
                                console.log("ClickFromIMGGame2");
                              }}
                              src={game2pix}
                            ></CardImg>
                          </IconButton>
                        </Col>
                        <Col md="4" style={{ padding: "0px" }}>
                          <IconButton
                            href="/game"
                            style={{
                              padding: "0px",
                              margin: "2px",
                              border: "1px solid #555",
                              maxWidth: "100%",
                            }}
                          >
                            <CardImg
                              onClick={() => {
                                console.log("ClickFromIMGGame3");
                              }}
                              src={game3pix}
                            ></CardImg>
                          </IconButton>
                        </Col>
                      </Row>
                    </Row>

                    <Row
                      style={{
                        justifyItems: "center",
                        flex: "display",
                        flexWrap: "wrap-reverse",
                      }}
                    >
                      <Col
                        sm="8"
                        style={{ backgroundColor: "black", padding: "2px" }}
                      >
                        <Card
                          style={{
                            border: "1px solid #555",
                            marginTop: "10px",
                            marginBottom: "10px",
                            backgroundColor: "black",
                            width: "100%",
                          }}
                        >
                          <Row
                            style={{
                              marginBottom: "5px",
                              padding: "0px",
                              margin: "0px",
                            }}
                          >
                            <span
                              style={{
                                width: "1%",
                                backgroundColor: "gold",
                              }}
                            ></span>
                            <span
                              style={{
                                width: "99%",
                                backgroundColor: "whitesmoke",
                                fontFamily: "Mitr",
                                fontSize: "30px",
                                fontWeight: "bold",
                                color: "black",
                              }}
                            >
                              สูตรคาสิโนออนไลน์
                            </span>
                          </Row>

                          <span
                            style={{
                              margin: "20px",
                              marginBottom: "5px",
                              fontFamily: "Mitr",
                              fontSize: "20px",
                              fontWeight: "bold",
                              color: "#d6b318",
                            }}
                          >
                            สูตรบาคาร่าออนไลน์ / แนวทางการเล่น บาคาร่าออนไลน์
                          </span>
                          <Label
                            style={{
                              margin: "20px",
                              marginTop: "5px",
                              fontFamily: "Mitr",
                              fontSize: "14px",
                              fontWeight: "lighter",
                              color: "#ccc",
                            }}
                          >
                            โดยปกติแล้วการเล่นบาคาร่าออนไลน์เป็นเกมที่ได้รับความนิยมมากที่สุด
                            ทางUFABETให้บริการโดยทีมงานจาก UFABETCN
                            มีเกมให้บริการเป็นจำนวนมากรวมถึงบาคาร่าออนไลน์ที่เรามีให้เลือกเล่นมากมาย
                            เช่น Gold Deluxe , SA Gaming , W88 ท่านที่สนใจ
                            <br />
                            <br />
                            <a style={{ color: "red", fontWeight: "bold" }}>
                              {" "}
                              สูตรบาคาร่า ปิงปอง{" "}
                            </a>
                            <br />
                            วิธีการเล่นบาคาร่าออนไลน์ปิงปองให้ทำการเดิมพันฝั่งตรงข้ามกับตาที่แล้วสลับไปมา
                            เช่น 2ตาแรก ออก banker สีแดง และ ตาที่2ออก player
                            สีน้ำเงิน เพราะฉะนั้นทำการเดิมพันในตาที่3นั้นให้เล่น
                            banker สีแดง
                            <br />
                            <br />
                            <a style={{ color: "red", fontWeight: "bold" }}>
                              {" "}
                              สูตรบาคาร่า แทงซ้ำ หรือ มังกร{" "}
                            </a>
                            <br />
                            วิธีการเล่นบาคาร่าออนไลน์แทงซ้ำหรือ มังกร
                            ให้ทำการเดิมพันฝั่งเดียวกันกับตาที่แล้ว เช่น 2ตาแรก
                            ออกplayer สีน้ำเงิน 2ตาติดกันให้ทำการเดิมพัน player
                            สีน้ำเงิน อีกครั้ง ถ้าผลออกมาถูกต้องอีก ควรลง player
                            สีน้ำเงิน ต่อไปจนเปลี่ยนเป็น banker สีแดง
                            <br />
                            <br />
                            <a style={{ color: "red", fontWeight: "bold" }}>
                              {" "}
                              สูตรบาคาร่า แทงทบ{" "}
                            </a>
                            <br />
                            วิธีเล่น บาคาร่าออนไลน์ แทงทบ
                            ให้ทำการเดิมพันเพิ่มขึ่น เท่าตัวหรือมากกว่า เช่น
                            ตาที่แล้ว เดิมพัน 1000บาท ตานี้ลง 2000บาท
                            เพื่อเป็นการแทงทบ โดยนำสูตรทั้ง2ข้อด้านบน
                            นำมาพิจรณาเพื่อความแม่นยำ
                            <br />
                            <br />
                            <br />
                            <br />
                            **
                            <a style={{ color: "blue", fontWeight: "initial" }}>
                              {" "}
                              หมากาพย์เนื้อหาเกี่ยวกับการเล่นกฎกติกาเทคนิคบาคาร่า{" "}
                            </a>
                            กดเลย!! ห้ามพลาด {"–>"}{" "}
                            <a
                              href="/baccarat"
                              style={{
                                color: "whitesmoke",
                                fontWeight: "initial",
                              }}
                            >
                              บาคาร่า
                            </a>
                          </Label>
                        </Card>
                      </Col>

                      <Col style={{ padding: "2px" }}>
                        <LoginCard />
                        <IconButton href="https://lin.ee/9gF9r1T">
                          <img src={sidepro1} style={{ width: "100%" }}></img>
                        </IconButton>
                        <IconButton href="https://lin.ee/9gF9r1T">
                          <img src={sidepro2} style={{ width: "100%" }}></img>
                        </IconButton>
                        <IconButton href="https://lin.ee/9gF9r1T">
                          <img src={sidepro3} style={{ width: "100%" }}></img>
                        </IconButton>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row style={{ padding: "5px", justifyContent: "center" }}>
                  <IconButton
                    href="https://lin.ee/9gF9r1T"
                    style={{ margin: "5px", padding: "0px", width: "100%" }}
                  >
                    <img
                      src={promotion1}
                      alt="Promotion 1"
                      style={{
                        padding: "0px",
                        width: "100%",
                        objectFit: "contain",
                      }}
                    ></img>
                  </IconButton>
                  <IconButton
                    href="https://lin.ee/9gF9r1T"
                    style={{ margin: "5px", padding: "0px", width: "100%" }}
                  >
                    <img
                      src={promotion2}
                      alt="Promotion 2"
                      style={{
                        padding: "0px",
                        width: "100%",
                        objectFit: "contain",
                      }}
                    ></img>
                  </IconButton>
                  <IconButton
                    href="https://lin.ee/9gF9r1T"
                    style={{ margin: "5px", padding: "0px", width: "100%" }}
                  >
                    <img
                      src={promotion3}
                      alt="Promotion 3"
                      style={{
                        padding: "0px",
                        width: "100%",
                        objectFit: "contain",
                      }}
                    ></img>
                  </IconButton>
                </Row>
                <Row>
                  <Col style={{ margin: "0px", padding: "0px" }}>
                    <img style={{ width: "100%" }} src={BannerF}></img>
                  </Col>
                </Row>
              </Container>
            )}
          </Fragment>
        )}
      </Media>
    </div>
  );
};

export default aicasino;
