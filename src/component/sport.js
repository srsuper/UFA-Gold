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

const promotion = () => {
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
                            backgroundColor: "#141414",
                            width: "100%",
                          }}
                        >
                          <span
                            style={{
                              margin: "20px",
                              marginBottom: "5px",
                              fontSize: "20px",
                              fontWeight: "bold",
                              color: "#d6b318",
                            }}
                          >
                            โปรโมชั่น UFABET
                          </span>
                          <Label
                            style={{
                              margin: "20px",
                              marginTop: "5px",
                              color: "whitesmoke",
                            }}
                          >
                            ตัวแทนที่ได้รับสิขสิทธิ์อย่างเป็นทางการจาก UFABET
                            ยูฟ่าเบท เว็บแทงบอลออนไลน์
                            ที่ได้มาตรฐานระดับโลกที่ดี ที่สุดในประเทศไทย
                            ท่านสามารถเดิมพันกีฬาออนไลน์ แทงบอลออนไลน์ บอลสเต็ป
                            บอลชุด
                            <br /> บาคาร่า คาสิโนออนไลน์ หวย มวย
                            ได้ทุกชนิดโดยเปิดราคามากกว่าเจ้าอื่น
                            สะดวกสบายยิ่งขึ้นสามารถวางเดิมพันได้ทุกที่ทุกเวลา
                            รองรับมือถือทุกรุ่นทุกระบบ
                            และที่สำคัญเป็นภาษาไทยทั้งระบบ
                            <br />
                            <br />
                            เว็บไซต์ยูฟ่าเบท UFABET มีความปลอดภัยมาตรฐานระดับโลก
                            การป้องกันข้อมูลมากกว่า 10 ชั้น ทำให้ท่านลูกค้า
                            ไม่ต้องกังวลกับความปลอดภัยด้านข้อมูลส่วนตัว
                            ที่รองรับการพนันบอลออนไลน์ ผ่านอินเตอร์เน็ต
                            และคาสิโน ออนไลน์ที่มีให้เลือกมากกว่า 1000 เกมส์
                            พร้อมทั้งยังมีคาสิโนที่ถ่ายทอดสดตลอด 24 ชั่วโมง
                            พร้อมโปรโมชั่นมากมาย UFABET
                            มีความยินดีให้บริการทุกท่านตลอด 24 ชั่วโมง
                            กับทีมงานมืออาชีพพร้อมแก้ไขปัญหาและรับใช้
                            ทุกท่านในการฝากถอนภายใน 5 นาที <br />
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
                            backgroundColor: "#141414",
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
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "black",
                              }}
                            >
                              กีฬาออนไลน์
                            </span>
                          </Row>
                          <span
                            style={{
                              margin: "20px",
                              marginBottom: "5px",
                              fontFamily: "Mitr",
                              fontSize: "16px",
                              fontWeight: "bold",
                              color: "#d6b318",
                            }}
                          >
                            ฟุตบอล
                          </span>
                          <Label
                            style={{
                              margin: "20px",
                              marginTop: "5px",
                              color: "whitesmoke",
                              fontFamily: "Mitr",
                              fontSize: "16px",
                              fontWeight: "lighter",
                            }}
                          >
                            – ราคาต่อรอง & สูงต่ำ <br /> – คี่/คู่ & ประตูรวม{" "}
                            <br />– 1X2 & สองโอกาส <br />– ทายผลสกอร์ <br />–
                            ครึ่งเวลา / เต็มเวลา <br />– ประตูแรก / ประตูสุดท้าย{" "}
                            <br />– มิกซ์ พาร์เลย์ <br />– ทายผลผู้ชนะ
                          </Label>
                          <span
                            style={{
                              margin: "20px",
                              marginBottom: "5px",
                              fontFamily: "Mitr",
                              fontSize: "16px",
                              fontWeight: "bold",
                              color: "#d6b318",
                            }}
                          >
                            บาสเกตบอล
                          </span>
                          <Label
                            style={{
                              margin: "20px",
                              marginTop: "5px",
                              color: "whitesmoke",
                              fontFamily: "Mitr",
                              fontSize: "16px",
                              fontWeight: "lighter",
                            }}
                          >
                            – ราคาต่อรอง & สูงต่ำ <br /> – มิกซ์ พาร์เลย์ <br />
                            – ทายผลผู้ชนะ <br />
                          </Label>
                          <span
                            style={{
                              margin: "20px",
                              marginBottom: "5px",
                              fontFamily: "Mitr",
                              fontSize: "16px",
                              fontWeight: "bold",
                              color: "#d6b318",
                            }}
                          >
                            เบสบอล
                          </span>
                          <Label
                            style={{
                              margin: "20px",
                              marginTop: "5px",
                              color: "whitesmoke",
                              fontFamily: "Mitr",
                              fontSize: "16px",
                              fontWeight: "lighter",
                            }}
                          >
                            – ราคาต่อรอง & สูงต่ำ <br /> – มิกซ์ พาร์เลย์ <br />
                            – ทายผลผู้ชนะ <br />
                          </Label>
                          <span
                            style={{
                              margin: "20px",
                              marginBottom: "5px",
                              fontFamily: "Mitr",
                              fontSize: "16px",
                              fontWeight: "bold",
                              color: "#d6b318",
                            }}
                          >
                            เทนนิส
                          </span>
                          <Label
                            style={{
                              margin: "20px",
                              marginTop: "5px",
                              color: "whitesmoke",
                              fontFamily: "Mitr",
                              fontSize: "16px",
                              fontWeight: "lighter",
                            }}
                          >
                            – ราคาต่อรอง & สูงต่ำ <br /> – มิกซ์ พาร์เลย์ <br />
                            – ทายผลผู้ชนะ <br />
                          </Label>
                          <span
                            style={{
                              margin: "20px",
                              marginBottom: "5px",
                              fontFamily: "Mitr",
                              fontSize: "16px",
                              fontWeight: "bold",
                              color: "#d6b318",
                            }}
                          >
                            อเมริกันฟุตบอล
                          </span>
                          <Label
                            style={{
                              margin: "20px",
                              marginTop: "5px",
                              color: "whitesmoke",
                              fontFamily: "Mitr",
                              fontSize: "16px",
                              fontWeight: "lighter",
                            }}
                          >
                            – ราคาต่อรอง & สูงต่ำ <br /> – มิกซ์ พาร์เลย์ <br />
                            – ทายผลผู้ชนะ <br />
                          </Label>
                          <span
                            style={{
                              margin: "20px",
                              marginBottom: "5px",
                              fontFamily: "Mitr",
                              fontSize: "16px",
                              fontWeight: "bold",
                              color: "#d6b318",
                            }}
                          >
                            ฮอกกี้น้ำแข็ง
                          </span>
                          <Label
                            style={{
                              margin: "20px",
                              marginTop: "5px",
                              color: "whitesmoke",
                              fontFamily: "Mitr",
                              fontSize: "16px",
                              fontWeight: "lighter",
                            }}
                          >
                            – ราคาต่อรอง & สูงต่ำ <br /> – มิกซ์ พาร์เลย์ <br />
                            – ทายผลผู้ชนะ <br />
                          </Label>
                          <span
                            style={{
                              margin: "20px",
                              marginBottom: "5px",
                              fontFamily: "Mitr",
                              fontSize: "16px",
                              fontWeight: "bold",
                              color: "#d6b318",
                            }}
                          >
                            ฮอกกี้น้ำแข็ง
                          </span>
                          <Label
                            style={{
                              margin: "20px",
                              marginTop: "5px",
                              color: "whitesmoke",
                              fontFamily: "Mitr",
                              fontSize: "16px",
                              fontWeight: "lighter",
                            }}
                          >
                            – ราคาต่อรอง & สูงต่ำ <br /> – มิกซ์ พาร์เลย์ <br />
                            – ทายผลผู้ชนะ <br />
                          </Label>
                          <span
                            style={{
                              margin: "20px",
                              marginBottom: "5px",
                              fontFamily: "Mitr",
                              fontSize: "16px",
                              fontWeight: "bold",
                              color: "#d6b318",
                            }}
                          >
                            แข่งรถ
                          </span>
                          <Label
                            style={{
                              margin: "20px",
                              marginTop: "5px",
                              color: "whitesmoke",
                              fontFamily: "Mitr",
                              fontSize: "16px",
                              fontWeight: "lighter",
                            }}
                          >
                            – ราคาต่อรอง & สูงต่ำ <br />
                            – ทายผลผู้ชนะ <br />
                          </Label>
                          <span
                            style={{
                              margin: "20px",
                              marginBottom: "5px",
                              fontFamily: "Mitr",
                              fontSize: "16px",
                              fontWeight: "bold",
                              color: "#d6b318",
                            }}
                          >
                            แฮนด์บอล
                          </span>
                          <Label
                            style={{
                              margin: "20px",
                              marginTop: "5px",
                              color: "whitesmoke",
                              fontFamily: "Mitr",
                              fontSize: "16px",
                              fontWeight: "lighter",
                            }}
                          >
                            – ราคาต่อรอง & สูงต่ำ <br /> – มิกซ์ พาร์เลย์ <br />
                            – ทายผลผู้ชนะ <br />
                          </Label>
                          <span
                            style={{
                              margin: "20px",
                              marginBottom: "5px",
                              fontFamily: "Mitr",
                              fontSize: "16px",
                              fontWeight: "bold",
                              color: "#d6b318",
                            }}
                          >
                            แบดมินตัน
                          </span>
                          <Label
                            style={{
                              margin: "20px",
                              marginTop: "5px",
                              color: "whitesmoke",
                              fontFamily: "Mitr",
                              fontSize: "16px",
                              fontWeight: "lighter",
                            }}
                          >
                            – ราคาต่อรอง & สูงต่ำ <br />
                            – ทายผลผู้ชนะ <br />
                          </Label>
                          <span
                            style={{
                              margin: "20px",
                              marginBottom: "5px",
                              fontFamily: "Mitr",
                              fontSize: "16px",
                              fontWeight: "bold",
                              color: "#d6b318",
                            }}
                          >
                            วอลเลย์บอล
                          </span>
                          <Label
                            style={{
                              margin: "20px",
                              marginTop: "5px",
                              color: "whitesmoke",
                              fontFamily: "Mitr",
                              fontSize: "16px",
                              fontWeight: "lighter",
                            }}
                          >
                            – ราคาต่อรอง & สูงต่ำ <br />
                            – ทายผลผู้ชนะ <br />
                          </Label>
                        </Card>
                        <Row
                          style={{ padding: "10px", justifyContent: "center" }}
                        >
                          <IconButton
                            href="https://lin.ee/9gF9r1T"
                            style={{
                              margin: "5px",
                              padding: "0px",
                              width: "100%",
                            }}
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
                            style={{
                              margin: "5px",
                              padding: "0px",
                              width: "100%",
                            }}
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
                            style={{
                              margin: "5px",
                              padding: "0px",
                              width: "100%",
                            }}
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

export default promotion;
