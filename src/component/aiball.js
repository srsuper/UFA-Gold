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

const aiball = () => {
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
                              สูตรแทงบอลออนไลน์
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
                            สูตรแทงบอลออนไลน์
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
                            สำหรับคนที่อยู่ในวงการณ์
                            <a
                              href="https://www.ufabetcn.com/%E0%B9%81%E0%B8%97%E0%B8%87%E0%B8%9A%E0%B8%AD%E0%B8%A5/"
                              style={{
                                color: "whitesmoke",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              แทงบอลออนไลน์{" "}
                            </a>
                            ย่อมมีเทคนิคสำคัญๆในการแทงเพื่อหวังผล
                            กำไรอย่างเป็นกอบเป็นกำ
                            โดยที่หลักการสังเกตการเลือกคู่ฟุตบอลของแต่ละคนจะมีเทคนิคเฉพาะตัวที่แตกต่างกัน
                            UFABETขอเสนอสูตรแทงบอลออนไลน์ที่สามารถนำไปทำกำไรได้จริงแบบไม่มีกั๊ก
                            มีสูตรการแทงง่ายๆดังต่อไปนี้
                            <br />
                            <br />
                            <a style={{ color: "#d6b318", fontWeight: "bold" }}>
                              {" "}
                              – การสังเกตการณ์เคลื่อนไหวของราคาเดิมพัน{" "}
                            </a>
                            <br />
                            ให้ดูราคาเริ่มต้นตั้งแต่หัววัน เช่น
                            ราคาทีมต่อเปิดราคาต่ออยู่ที่ 1 ลูก แต่พอก่อนบอลแตะ 1
                            ชั่วโมง ราคาไหลมาเป็นทีมต่อจาก 1 ลูกเป็น 1.5
                            ให้สังเกตว่าราคาการต่อรองได้เพิ่มขึ้น
                            โดยมีแนวโน้มที่จะชนะขาด
                            ขอให้น้ำหนักการเดิมพันในคู่นี้เป็นไปในฝั่งทีมต่อ
                            <br />
                            <br />
                            <a style={{ color: "#d6b318", fontWeight: "bold" }}>
                              {" "}
                              – การดูการไหลของน้ำ{" "}
                            </a>
                            <br />
                            บางทีอัตราต่อคงเดิม
                            แต่ที่เปลี่ยนไปคืออัตราการจ่ายค่าน้ำได้น้อยลง
                            ยกตัวอย่างเช่น ก่อนบอลแตะ น้ำไหลจาก .99 เป็น.75
                            นั้นหมายความว่า ก่อนเดิมจากที่แทง 100 บาทจ่าย 99 บาท
                            เปลี่ยนมาเป็น จ่าย 75 บาทแทง ในกรณีนี้
                            ให้เลือกเดิมพันในส่วนที่น้ำได้ปรับลง
                            น้ำหนักที่บอลจะเข้าในฝั่งนี้มีสูง
                            <br />
                            <br />
                            <a style={{ color: "#d6b318", fontWeight: "bold" }}>
                              {" "}
                              – การดูการเปิดราคาแบบง่ายๆ{" "}
                            </a>
                            <br />
                            ในทีนี้คือเป็นการเปิดราคาแบบขัดใจคนแทง ยกตัวอย่าง
                            แมนซิตี้ พบ ฟูแล่ม แมนซิตี้เปิดราคาแค่ครึ่งลูก
                            ให้ท่านสังเกตุได้เลยว่า ด้วยฟุตบอลห่างชั้นกันแบบนี้
                            การเปิดราคาต่อรองฟุตบอลออนไลน์
                            ราคานี้แทบจะเป็นไปไม่ได้อยู่แล้ว เทคนิคคือให้ท่าน
                            ลองแทงสวนความรู้สึกตัวเองไปเลยแล้วท่านจะพบกับผลลัพธ์ที่มหัศจรรย์
                            <br />
                            <br />
                            <a style={{ color: "#d6b318", fontWeight: "bold" }}>
                              {" "}
                              – นาทีบาป การแทงแบบท้ายเกม{" "}
                            </a>
                            <br />
                            วิธีนี้สำหรับนักเล่นที่นักเลงพอวัดใจกล้าได้กล้าเสีย
                            โดยการแทง OVER ใน 5 นาทีสุดท้ายก่อนบอลจบ
                            เพราะช่วงนี้บอลจะผลิกมากที่สุด
                            หรือศัพท์ในวงการณ์เค้าเรียกกันว่า นาทีบาป
                            การแทงแบบนี้กับเว็บUFABET
                            นั้นท่านจะได้ราคาน้ำที่ดีที่สุด จ่ายน้อย
                            ได้ทุนคืนเต็มๆ เช่นแทง OVER -.35 ท่านแทง 100
                            บาทจะเสียแค่ 35
                            บาทแต่ถ้ามีประตูเกิดขึ้นท่านรับไปเต็มๆ 100 บาท
                            วิธีนี้ใครใจนักเลงลองเอาไปใช้ดู
                            <br />
                            <br />
                            <a style={{ color: "#d6b318", fontWeight: "bold" }}>
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
                            <a
                              style={{
                                fontSize: "20px",
                                color: "orangered",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              สูตรแทงบอลออนไลน์ โดยคำนวญจากค่าพลัง{" "}
                            </a>
                            <br />
                            ฟังดูแล้วอาจงงๆได้ว่า
                            <a
                              style={{
                                color: "orangered",
                                fontWeight: "bold",
                              }}
                            >
                              สูตรแทงบอลออนไลน์
                            </a>
                            ที่วัดจากค่าพลังคืออะไร สูตรนี้ทางทีมงาน UFABETCN
                            เป็นคนคิดค้นขึ้นมา
                            โดยคนที่คิดนั้นไม่ได้เป็นคนที่เล่น
                            <a
                              style={{
                                fontWeight: "bold",
                                color: "whitesmoke",
                              }}
                            >
                              พนันบอลออนไลน์
                            </a>
                            เลยมาก่อน
                            แต่เนื่องด้วยว่าเป็นคนที่ชอบเรื่องสถิตและการคำนวญ
                            เลยคิดวิธีและสูตรคำนวญเอามาเพื่อวัดผลในแนวทางของตัวเองและมีการปรับสูตรและเพื่อให้มีความแม่นยำยิ่งขึ้น
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                color: "blue",
                                fontWeight: "bold",
                                fontStyle: "italic",
                              }}
                            >
                              “ ผมไม่เคยเชื่อเลยว่า ทีมเหย้า
                              และทีมเยือนมีผลต่อคะแนนการแข่งขัน
                              แต่จริงๆแล้วมันมีผล ”
                            </a>
                            <br />
                            <br />
                            หลังจากที่พยายามศึกษาเรื่องการคำนวณผลของผลการแข่งขันฟุตบอล
                            มากว่าครึ่งปี ทำให้ผมได้เรียนรู้เรื่องค่าน้ำ
                            การแทงสูงแทงตำ การ
                            <a
                              style={{
                                color: "whitesmoke",
                                fontWeight: "bold",
                              }}
                            >
                              แทงบอล
                            </a>
                            แบบอัตตราต่อรอง การแทงแบบฟิกออด
                            มันเป็นความท้าทายอย่างมากที่จะเอาชนะด้วยหลักสถิติ
                            หน้าเว็บเพจนี้{" "}
                            <a
                              style={{
                                color: "orangered",
                                fontWeight: "bold",
                              }}
                            >
                              เปิดฤดูกาลหน้าเจอกัน กับสูตรแทงบอลออนไลน์
                            </a>
                            ที่ผมจะนำมาให้ท่านๆสมาชิกได้หยิบไปใช้เพื่อการพิจารณาเพิ่มเติมในการเลือกเล่นของท่าน
                            ปล. การแทงบอลมีโอกาศพลิกได้เสมอ แต่
                            <a
                              style={{
                                color: "orangered",
                                fontWeight: "bold",
                              }}
                            >
                              สถิติก็เป็นอีกหนึ่งข้อมูลที่สำคัญที่ช่วยให้ท่านสามารถเลือกเล่นได้อย่างมั่นใจยิ่งขึ้น
                            </a>
                            <br />
                            <br />
                            ตารางค่าพลังที่ผมทำขึ้น
                            ระหว่างนี้ผมกำลังทำผลย้อนหลังเพื่อ
                            วัดและปรับความต่างชั้นของหลีกแต่ละหลีก
                            จะแจกหรือจะให้อย่างไรยังไม่ได้วางแผนนะครับ ทาง
                            UFABETCN ให้ผมทำขึ้นมาเพื่อให้กับสมาชิก
                            <a
                              href="https://lin.ee/9gF9r1T"
                              style={{
                                color: "whitesmoke",
                                fontWeight: "bold",
                              }}
                            >
                              สมัครสมาชิกกับ UFABET-GOLD
                            </a>{" "}
                            ไว้เลย
                            <a
                              href="https://lin.ee/9gF9r1T"
                              style={{
                                color: "green",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              LINE : @GOLD28
                            </a>
                            <br />
                            <br />
                            <a>
                              <img
                                style={{
                                  width: "100%",
                                }}
                                src="https://www.ufabetcn.com/wp-content/uploads/2019/06/SOCCERUFABETCN-1024x470.jpg.webp"
                              ></img>
                            </a>
                            <br />
                            <br />
                            <a>
                              <iframe
                                style={{ width: "100%" }}
                                loading="lazy"
                                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQeJLsr314quf9FHKljonU6U2nohE2Cq03B0-_5AgGlY3zUchMoU0xLyieweiesTgzzpcOX1hit94i0/pubhtml?widget=true&amp;headers=false"
                                height="800"
                                data-rocket-lazyload="fitvidscompatible"
                                data-lazy-src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQeJLsr314quf9FHKljonU6U2nohE2Cq03B0-_5AgGlY3zUchMoU0xLyieweiesTgzzpcOX1hit94i0/pubhtml?widget=true&amp;headers=false"
                                class="lazyloaded"
                                data-was-processed="true"
                              ></iframe>
                              <noscript>
                                <iframe
                                  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQeJLsr314quf9FHKljonU6U2nohE2Cq03B0-_5AgGlY3zUchMoU0xLyieweiesTgzzpcOX1hit94i0/pubhtml?widget=true&amp;headers=false"
                                  height="800"
                                ></iframe>
                              </noscript>
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
                              สูตรแทงบอลออนไลน์
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
                            สูตรแทงบอลออนไลน์
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
                            สำหรับคนที่อยู่ในวงการณ์
                            <a
                              href="https://www.ufabetcn.com/%E0%B9%81%E0%B8%97%E0%B8%87%E0%B8%9A%E0%B8%AD%E0%B8%A5/"
                              style={{
                                color: "whitesmoke",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              แทงบอลออนไลน์{" "}
                            </a>
                            ย่อมมีเทคนิคสำคัญๆในการแทงเพื่อหวังผล
                            กำไรอย่างเป็นกอบเป็นกำ
                            โดยที่หลักการสังเกตการเลือกคู่ฟุตบอลของแต่ละคนจะมีเทคนิคเฉพาะตัวที่แตกต่างกัน
                            UFABETขอเสนอสูตรแทงบอลออนไลน์ที่สามารถนำไปทำกำไรได้จริงแบบไม่มีกั๊ก
                            มีสูตรการแทงง่ายๆดังต่อไปนี้
                            <br />
                            <br />
                            <a style={{ color: "#d6b318", fontWeight: "bold" }}>
                              {" "}
                              – การสังเกตการณ์เคลื่อนไหวของราคาเดิมพัน{" "}
                            </a>
                            <br />
                            ให้ดูราคาเริ่มต้นตั้งแต่หัววัน เช่น
                            ราคาทีมต่อเปิดราคาต่ออยู่ที่ 1 ลูก แต่พอก่อนบอลแตะ 1
                            ชั่วโมง ราคาไหลมาเป็นทีมต่อจาก 1 ลูกเป็น 1.5
                            ให้สังเกตว่าราคาการต่อรองได้เพิ่มขึ้น
                            โดยมีแนวโน้มที่จะชนะขาด
                            ขอให้น้ำหนักการเดิมพันในคู่นี้เป็นไปในฝั่งทีมต่อ
                            <br />
                            <br />
                            <a style={{ color: "#d6b318", fontWeight: "bold" }}>
                              {" "}
                              – การดูการไหลของน้ำ{" "}
                            </a>
                            <br />
                            บางทีอัตราต่อคงเดิม
                            แต่ที่เปลี่ยนไปคืออัตราการจ่ายค่าน้ำได้น้อยลง
                            ยกตัวอย่างเช่น ก่อนบอลแตะ น้ำไหลจาก .99 เป็น.75
                            นั้นหมายความว่า ก่อนเดิมจากที่แทง 100 บาทจ่าย 99 บาท
                            เปลี่ยนมาเป็น จ่าย 75 บาทแทง ในกรณีนี้
                            ให้เลือกเดิมพันในส่วนที่น้ำได้ปรับลง
                            น้ำหนักที่บอลจะเข้าในฝั่งนี้มีสูง
                            <br />
                            <br />
                            <a style={{ color: "#d6b318", fontWeight: "bold" }}>
                              {" "}
                              – การดูการเปิดราคาแบบง่ายๆ{" "}
                            </a>
                            <br />
                            ในทีนี้คือเป็นการเปิดราคาแบบขัดใจคนแทง ยกตัวอย่าง
                            แมนซิตี้ พบ ฟูแล่ม แมนซิตี้เปิดราคาแค่ครึ่งลูก
                            ให้ท่านสังเกตุได้เลยว่า ด้วยฟุตบอลห่างชั้นกันแบบนี้
                            การเปิดราคาต่อรองฟุตบอลออนไลน์
                            ราคานี้แทบจะเป็นไปไม่ได้อยู่แล้ว เทคนิคคือให้ท่าน
                            ลองแทงสวนความรู้สึกตัวเองไปเลยแล้วท่านจะพบกับผลลัพธ์ที่มหัศจรรย์
                            <br />
                            <br />
                            <a style={{ color: "#d6b318", fontWeight: "bold" }}>
                              {" "}
                              – นาทีบาป การแทงแบบท้ายเกม{" "}
                            </a>
                            <br />
                            วิธีนี้สำหรับนักเล่นที่นักเลงพอวัดใจกล้าได้กล้าเสีย
                            โดยการแทง OVER ใน 5 นาทีสุดท้ายก่อนบอลจบ
                            เพราะช่วงนี้บอลจะผลิกมากที่สุด
                            หรือศัพท์ในวงการณ์เค้าเรียกกันว่า นาทีบาป
                            การแทงแบบนี้กับเว็บUFABET
                            นั้นท่านจะได้ราคาน้ำที่ดีที่สุด จ่ายน้อย
                            ได้ทุนคืนเต็มๆ เช่นแทง OVER -.35 ท่านแทง 100
                            บาทจะเสียแค่ 35
                            บาทแต่ถ้ามีประตูเกิดขึ้นท่านรับไปเต็มๆ 100 บาท
                            วิธีนี้ใครใจนักเลงลองเอาไปใช้ดู
                            <br />
                            <br />
                            <a style={{ color: "#d6b318", fontWeight: "bold" }}>
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
                            <a
                              style={{
                                fontSize: "20px",
                                color: "orangered",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              สูตรแทงบอลออนไลน์ โดยคำนวญจากค่าพลัง{" "}
                            </a>
                            <br />
                            ฟังดูแล้วอาจงงๆได้ว่า
                            <a
                              style={{
                                color: "orangered",
                                fontWeight: "bold",
                              }}
                            >
                              สูตรแทงบอลออนไลน์
                            </a>
                            ที่วัดจากค่าพลังคืออะไร สูตรนี้ทางทีมงาน UFABETCN
                            เป็นคนคิดค้นขึ้นมา
                            โดยคนที่คิดนั้นไม่ได้เป็นคนที่เล่น
                            <a
                              style={{
                                fontWeight: "bold",
                                color: "whitesmoke",
                              }}
                            >
                              พนันบอลออนไลน์
                            </a>
                            เลยมาก่อน
                            แต่เนื่องด้วยว่าเป็นคนที่ชอบเรื่องสถิตและการคำนวญ
                            เลยคิดวิธีและสูตรคำนวญเอามาเพื่อวัดผลในแนวทางของตัวเองและมีการปรับสูตรและเพื่อให้มีความแม่นยำยิ่งขึ้น
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                color: "blue",
                                fontWeight: "bold",
                                fontStyle: "italic",
                              }}
                            >
                              “ ผมไม่เคยเชื่อเลยว่า ทีมเหย้า
                              และทีมเยือนมีผลต่อคะแนนการแข่งขัน
                              แต่จริงๆแล้วมันมีผล ”
                            </a>
                            <br />
                            <br />
                            หลังจากที่พยายามศึกษาเรื่องการคำนวณผลของผลการแข่งขันฟุตบอล
                            มากว่าครึ่งปี ทำให้ผมได้เรียนรู้เรื่องค่าน้ำ
                            การแทงสูงแทงตำ การ
                            <a
                              style={{
                                color: "whitesmoke",
                                fontWeight: "bold",
                              }}
                            >
                              แทงบอล
                            </a>
                            แบบอัตตราต่อรอง การแทงแบบฟิกออด
                            มันเป็นความท้าทายอย่างมากที่จะเอาชนะด้วยหลักสถิติ
                            หน้าเว็บเพจนี้{" "}
                            <a
                              style={{
                                color: "orangered",
                                fontWeight: "bold",
                              }}
                            >
                              เปิดฤดูกาลหน้าเจอกัน กับสูตรแทงบอลออนไลน์
                            </a>
                            ที่ผมจะนำมาให้ท่านๆสมาชิกได้หยิบไปใช้เพื่อการพิจารณาเพิ่มเติมในการเลือกเล่นของท่าน
                            ปล. การแทงบอลมีโอกาศพลิกได้เสมอ แต่
                            <a
                              style={{
                                color: "orangered",
                                fontWeight: "bold",
                              }}
                            >
                              สถิติก็เป็นอีกหนึ่งข้อมูลที่สำคัญที่ช่วยให้ท่านสามารถเลือกเล่นได้อย่างมั่นใจยิ่งขึ้น
                            </a>
                            <br />
                            <br />
                            ตารางค่าพลังที่ผมทำขึ้น
                            ระหว่างนี้ผมกำลังทำผลย้อนหลังเพื่อ
                            วัดและปรับความต่างชั้นของหลีกแต่ละหลีก
                            จะแจกหรือจะให้อย่างไรยังไม่ได้วางแผนนะครับ ทาง
                            UFABETCN ให้ผมทำขึ้นมาเพื่อให้กับสมาชิก
                            <a
                              href="https://lin.ee/9gF9r1T"
                              style={{
                                color: "whitesmoke",
                                fontWeight: "bold",
                              }}
                            >
                              สมัครสมาชิกกับ UFABET-GOLD
                            </a>{" "}
                            ไว้เลย
                            <a
                              href="https://lin.ee/9gF9r1T"
                              style={{
                                color: "green",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              LINE : @GOLD28
                            </a>
                            <br />
                            <br />
                            <a>
                              <img
                                style={{
                                  width: "100%",
                                }}
                                src="https://www.ufabetcn.com/wp-content/uploads/2019/06/SOCCERUFABETCN-1024x470.jpg.webp"
                              ></img>
                            </a>
                            <br />
                            <br />
                            <a>
                              <iframe
                                style={{ width: "100%" }}
                                loading="lazy"
                                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQeJLsr314quf9FHKljonU6U2nohE2Cq03B0-_5AgGlY3zUchMoU0xLyieweiesTgzzpcOX1hit94i0/pubhtml?widget=true&amp;headers=false"
                                height="800"
                                data-rocket-lazyload="fitvidscompatible"
                                data-lazy-src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQeJLsr314quf9FHKljonU6U2nohE2Cq03B0-_5AgGlY3zUchMoU0xLyieweiesTgzzpcOX1hit94i0/pubhtml?widget=true&amp;headers=false"
                                class="lazyloaded"
                                data-was-processed="true"
                              ></iframe>
                              <noscript>
                                <iframe
                                  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQeJLsr314quf9FHKljonU6U2nohE2Cq03B0-_5AgGlY3zUchMoU0xLyieweiesTgzzpcOX1hit94i0/pubhtml?widget=true&amp;headers=false"
                                  height="800"
                                ></iframe>
                              </noscript>
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

export default aiball;
