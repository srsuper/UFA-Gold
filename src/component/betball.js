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
import Expix1 from "../img/expic1.PNG";
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

const betball = () => {
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
                                fontSize: "21px",
                                fontWeight: "bold",
                                color: "black",
                              }}
                            >
                              แทงบอล สมัครแทงบอลออนไลน์ UFABET
                              เว็บพนันบอลออนไลน์ดีที่สุด
                            </span>
                            <img
                              style={{ width: "100%" }}
                              src="https://www.ufabet-th191.com/img/betball.jpg"
                            ></img>
                          </Row>
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
                            บทความดังต่อไปนี้จะทำให้ท่านสามารถ
                            <a
                              style={{
                                color: "gold",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              แทงบอลออนไลน์{" "}
                            </a>
                            แบบชั้นเซียน เพียงแค่ 5 นาที
                            เราจะอธิบายทุกขั้นตอนในการอ่านราคาค่าน้ำในการแทงบอลและการวางเดิมพันต่างๆ
                            เราจะทำให้ท่านสามารถสนุกสนานและเพลิดเพลินกับการ
                            <a
                              style={{
                                color: "gold",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              แทงบอล{" "}
                            </a>
                            ได้ทุกที่ ทุกเวลา เพียงแค่ปลายนิ้วบนมือถือของคุณเอง
                            <br />
                            <br />
                            การ
                            <a
                              style={{
                                color: "gold",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              พนันบอล{" "}
                            </a>{" "}
                            มีมานานมากแล้วเพียงแต่ปัจจุบันได้พัฒนามาเป็นการ
                            <a
                              style={{
                                color: "gold",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              พนันบอลออนไลน์{" "}
                            </a>
                            ที่นักพนันสามารถเล่น
                            <a
                              style={{
                                color: "gold",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              เว็บแทงบอล{" "}
                            </a>
                            ได้เองในมือถือโดยที่ผู้เล่นเองสามารถ แทงบอล
                            <a
                              style={{
                                color: "gold",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              ไม่มีขั้นต่ำ{" "}
                            </a>
                            โดยเว็บพนันบอลที่เป็นที่นิยมที่สุดในปัจจุบันคงไม่พ้น
                            <a
                              style={{
                                color: "gold",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              ufabet{" "}
                            </a>
                            ซึ่งเป็นหนึ่งใน
                            <a
                              style={{
                                color: "whitesmoke",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              เว็บแทงบอลที่ปลอดภัย{" "}
                            </a>
                            ได้รับความนิยมไปทั่วโลก
                            ถ้าคุณยังไม่แน่ใจจ่าจะแทงบอลที่เว็บไหนดีเราขอแนะนำเว็บ
                            <a
                              style={{
                                color: "gold",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              ยูฟ่าเบท{" "}
                            </a>
                            หรือ
                            <a
                              style={{
                                color: "gold",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              ufabet.com{" "}
                            </a>
                            <br />
                            <br />
                            ขั้นตอนแรกเพียงแค่ท่านมี Username และ Password
                            ในการเข้าเล่น
                            <a
                              style={{
                                color: "whitesmoke",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              แทงบอลออนไลน์ในเว็บ UFABET{" "}
                            </a>
                            แต่ถ้าท่านยังไม่มียูสเซอร์
                            สามารถสมัครกับทางเราได้ทันทีเพียงแค่แอดไลน์
                            <a
                              style={{
                                color: "green",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              @GOLD28{" "}
                            </a>
                            จะมีเจ้าหน้านี้พร้อมบริการท่านในการ
                            <a
                              style={{
                                color: "whitesmoke",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              สมัครสมาชิกแทงบอล{" "}
                            </a>
                            <a
                              style={{
                                color: "gold",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              เว็บแทงบอลออนไลน์{" "}
                            </a>
                            ของเราเป็นตัวแทนอย่างเป็นทางการจาก
                            <a
                              style={{
                                color: "gold",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              www.ufabet.com{" "}
                            </a>
                            ทำให้ท่านมั่นใจในการเดิมพัน ไม่ว่าจะแทงหลักร้อย
                            หรือแทงหลักล้าน การเงินของเรากล้าการันตี 100%
                            เพราะเป็นเว็บตรงจาก UFABET หมดห่วงเรื่องการโกง
                            นอกจากการเงินที่มั่นใจแล้วท่านลูกค้ายังได้สิทธิพิเศษที่เหนือกว่า
                            ด้วยค่าคอมมิชชั่นกีฬา 0.75% มากที่สุดในไทย
                            ในการคืนยอดเสียรายเดือน 5% สูงสุดที่ 10,000 บาท
                            ไม่มีใครให้มากกว่าเรากล้าการันตี
                            <br />
                            <br />
                            <img width="100%" src={Expix1}></img>
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "#6ec1e4",
                              }}
                            >
                              สมัครแทงบอล UFABET เว็บแทงบอล ยูฟ่าเบท
                            </a>
                            <br />
                            <br />
                            เมื่อท่านลูกค้าได้รับ Username และ Password
                            แล้วให้ท่านลูกค้าทำการ Login ผ่านทางหน้าเว็บของเรา
                            www.ufabet-th191.com แล้วกรอกข้อมูลให้ครบถ้วนช่อง
                            ยูสเซอร์เนม และ รหัสผ่าน
                            <br />
                            <br />
                            <img
                              src="https://www.ufabetcn.com/wp-content/uploads/2019/12/ufabet-soccer-betting-03-768x473.jpg.webp"
                              width="100%"
                            ></img>
                            <br />
                            <br />
                            เมื่อทานลูกค้าได้ทำการ Login เข้ายูฟ่าเบทมาแล้ว
                            ท่านจะเห็นยูสเซอร์ของท่าน
                            พร้อมเครดิตคงเหลือที่ท่านมีอยู่ทางด้านมุมบนซ้าย
                            ตามรูปประกอบ การวางเดิมพันแทงบอลออนไลน์ แบ่งได้เป็น
                            9 ประเภทหลักๆได้แก่
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "#6ec1e4",
                              }}
                            >
                              แทงบอลออนไลน์ แบบต่างๆ กับเว็บแทงบอล ufabet
                            </a>
                            <br />
                            <br />
                            <img
                              src="https://www.ufabetcn.com/wp-content/uploads/2019/12/ufabet-soccer-betting-04-768x508.jpg.webp"
                              width="100%"
                            ></img>
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "#6ec1e4",
                              }}
                            >
                              แทงบอลออนไลน์ แบบ HDP&OU
                            </a>
                            <br />
                            <br />
                            การแทงบอลออนไลน์แบบ HDP&OU ย่อมาจาก Handicap(HDP)
                            นั้นคือราคาอัตราต่อรองทั่วไปของการแทงบอลออนไลน์ตามบ้านเรานั้นเอง
                            และ OU(Over&Under) ก็คือการแทงบอลสกอร์สูงต่ำ
                            ท่านลูกค้านักพนันสามารถเลือกอัตราต่อรอง
                            และสามารถวางเดิมพันได้ทั้งครึ่งแรก และครึ่งหลัง
                            เคล็ดลับการดูอัตราต่อรองแบบง่ายๆคือ
                            ทีมไหนใช้ตัวหนังสือสีแดง นั่นคือทีมบอลที่ “ต่อ”
                            ส่วนตัวหนังสือสีดำนั้นคือทีมรอง ส่วนการดูค่าน้ำ
                            ในรูปนี้คือการใช้ค่าน้ำแบบ MY
                            คือค่าน้ำมาตราฐานมาเลเซีย
                            ซึ่งเป็นค่ากลางและเป็นที่นิยมมากที่สุด
                            โดยใช้จุดทศนิยมสองตำแหน่ง
                            หลักการดูค่าน้ำอย่างง่ายคือ ตัวหนังสือสีดำคือ
                            อัตราค่าน้ำที่ท่านได้ ยกตัวอย่างเช่น ท่านแทงบอลน้ำ
                            0.77 (ตัวหนังสือดำ) เมื่อท่านแทงถูก ท่านลูกค้าจะได้
                            77 บาท จากการวางเดิมพัน 100 บาท
                            แต่ถ้าเป็นหนังสือที่ติดลบตัวสีแดง ยกตัวอย่าง
                            ท่านลูกค้าเลือกเล่นราคา -0.88 (ตัวหนังสือสีแดง)
                            เมื่อท่านวางเดิมพันแล้วชนะ ท่านจะได้ 100
                            บาทจากการแทง 100 บาท แต่ในทางตรงกันข้ามเมื่อท่าน
                            แทงแล้วเสีย ท่านลูกค้าจะเสียแค่ 88 บาท
                            จากการวางเดิมพัน 100 บาท
                            นับว่าเป็นการวางเดิมพันที่ค่อนข้างได้เปรียบ
                            เพราะว่าได้เยอะเสียน้อย
                            <br />
                            <br />
                            <img
                              src="https://www.ufabetcn.com/wp-content/uploads/2019/12/ufabet-soccer-betting-05-768x507.jpg.webp"
                              width="100%"
                            ></img>
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "#6ec1e4",
                              }}
                            >
                              แทงบอล แบบ Odd/Even & Total Goal
                            </a>
                            <br />
                            <br />
                            แทงบอล Odd/Even & Total Goal Odd และ Even
                            คือการแทงบอลโดยการทายผลรวมของการแข่งขันว่าจะออกเป็นเลขคี่
                            (Odd) หรือเลขคู่ (Even) ยกตัวอย่างเช่น ผลรวมของคู่
                            ลิเวอร์พูล 3-3 แมนยู ผมรวมทั้งหมดคือ 3+3= “6”
                            นั่นคือเลขคู่
                            ดังนั้นถ้าท่านลูกค้าวางเดิมพันที่ตำแหน่ง Even
                            ท่านลูกค้าจะชนะการเดิมดันได้อย่างง่ายดาย
                            <br />
                            <br />
                            **หมายเหตุ สกอร์ 0-0 นับว่าเป็นผลรวมสกอร์แบบ คู่
                            หรือ Even **
                            <br />
                            <br />
                            Total Goal
                            คือการทายผลรวมการแข่งขันโดยนับจำนวนลูกที่ยิงได้ของทั้งสองฝั่งนำมาบวกรวมกัน
                            จะได้จำนวน Total Goal
                            และเมื่อท่านลูกค้าทายได้ถูกต้อง
                            จะได้เงินคูณจากจำนวนที่ได้ทางเว็บได้เปิดราคาไว้ให้ตอนแรกที่ท่านลูกค้าได้เลือกแทง
                            <br />
                            <br />
                            อธิบายตามราคาจริง (ตามรูป) ยกตัวอย่างคู่ FC Astana –
                            Manchester United หลังจบการแข่งขัน FC Astana 2-1
                            Manchester United
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "#ff00ff",
                              }}
                            >
                              แทงบอล Odd/Even
                            </a>
                            <br />
                            <br />
                            = ถ้าท่านลูกค้าเลือกแทงสกอร์คี่ หรือ Odd ในคู่นี้
                            ในการวางเดิมพันที่ 100 บาท ท่านลูกค้าจะได้รับเงิน
                            <br />
                            <br />
                            100 * 1.00 = 100 บาท (ไม่รวมทุน)
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "#ff00ff",
                              }}
                            >
                              แทงบอล Total Goal
                            </a>
                            <br />
                            <br />
                            = ผมรวมจำนวนลูกที่ยิงได้ของคู่ FC Astana –
                            Manchester United ทั้งหมดคือ “3 ลูก” ดั้งนั้น
                            ถ้าลูกค้าได้เลือกแทงช่อง 2-3 ในจำนวนการวางเดิมพันที่
                            100 บาท จะได้รับเงินตามวิธีคิดดังนี้ 100 * 1.83 = 83
                            บาท (ไม่รวมทุน)
                            <br />
                            <br />
                            แต่ทางเราขอแนะนำการวางเดิมพันที่ได้ตัวคูณค่อนข้างลูก
                            และเรียกได้ว่าเป็นอีกหนึ่งเทคนิคในการแทงบอล
                            <br />
                            <br />
                            โดยที่จะให้เลือก ผลรวมของสกอร์ที่ 7 ลูกขึ้นไป
                            คือเลือก “7 & Over” โดยกรณีนี้ท่านลูกค้าจะได้รับ
                            ตัวคูณถึง 19 เท่าด้วยกัน เช่น แทง 100 บาท
                            จะได้รับเงินทั้งหมด 1,900 บาทเลยทีเดียว
                            ถึงแม้โอกาสนี้จะเกิดขึ้นไม่ได้มาก แต่เรียกได้ว่า
                            เป็นการลงทุนที่คุ้มค่ามากๆ
                            เลยทีเดียวเหมาะสำหรับนักเล่นอาชีพ
                            และผู้ที่ชอบความท้าทายและสไตล์การแทงบอลที่ไม่เหมือนใคร
                            <br />
                            <br />
                            <img
                              src="https://www.ufabetcn.com/wp-content/uploads/2019/12/ufabet-soccer-betting-06-768x633.jpg.webp"
                              width="100%"
                            ></img>
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "#6ec1e4",
                              }}
                            >
                              พนันบอล ออนไลน์ แบบ 1X2 & Double Chance
                            </a>
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "red",
                              }}
                            >
                              พนันบอล ออนไลน์ แบบ 1X2
                            </a>
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                              }}
                            >
                              คือการพนันบอลที่มีให้เลือกแบบง่ายๆ แค่สามแบบ คือ
                            </a>
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "#ff00ff",
                              }}
                            >
                              “1”
                            </a>{" "}
                            คือ การเลือกว่าพนันบอลว่าเจ้าบ้านจะชนะ
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "#ff00ff",
                              }}
                            >
                              “X”
                            </a>{" "}
                            คือ การเลือกพนันบอลว่าว่าทั้งสอทีมจะเสมอกัน
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "#ff00ff",
                              }}
                            >
                              “2”
                            </a>{" "}
                            คือ การเลือกพนันบอลว่าว่าทีมเยือนจะชนะ
                            <br />
                            <br />
                            โดยที่การเลือกแทงบอลแบบ
                            <a
                              style={{
                                fontWeight: "bold",
                                color: "#ff00ff",
                              }}
                            >
                              {" "}
                              1X2{" "}
                            </a>
                            นั้นสามารถเลือกพนันได้ทั้งครึ่งแรก
                            <a
                              style={{
                                fontWeight: "bold",
                                color: "#ff00ff",
                              }}
                            >
                              {" "}
                              (FH 1X2){" "}
                            </a>
                            และ เต็มเวลา
                            <a
                              style={{
                                fontWeight: "bold",
                                color: "#ff00ff",
                              }}
                            >
                              {" "}
                              (FT 1X2){" "}
                            </a>
                            <br />
                            <br />
                            ยกตัวอย่างตามรูป (ช่องสีเขียว)
                            <br />
                            <br />
                            ถ้าท่านลูกค้าเลือกแทงบอลแบบ 1X2 แบบ FT
                            โดยได้ทำการเลือก ช่อง “2” ในการแทง 100 บาท
                            เมื่อผลออกมาทีมเยือนได้ทำการบุกชนะเจ้าบ้านได้
                            ท่านลูกค้าได้จะได้รับเงิน 100*5.08 = 508 บาท
                            (รวมทุนแล้ว 100 บาท)
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "red",
                              }}
                            >
                              พนันบอล ออนไลน์ แบบ Double Chance{" "}
                            </a>
                            <a
                              style={{
                                fontSize: "20px",
                              }}
                            >
                              คือการพนันบอลที่มีให้เลือกแบบง่ายๆ แค่สามแบบ คือ
                            </a>
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "#ff00ff",
                              }}
                            >
                              1X
                            </a>{" "}
                            คือ การแทงพนันบอลออนไลน์แบบเจ้าบ้านชนะหรือเสมอ
                            หมายความว่าเมื่อผลออกมา
                            เจ้าบ้านชนะด้วยสกอร์ใดๆก็ตามท่านลูกค้าเป็นฝ่ายชนะ
                            หรือไม่ว่าผลจะออกเสมอ
                            ท่านลูกค้าก็ยังจะชนะการเดิมพันในครั้งนี้
                            เปรียบเทียบเหมือนกับการแทงที่มีโอกาสได้สูงมากในอัตราส่วน
                            2 ใน 3 คิดเป็นเปอร์เซนต์คือ 66.66
                            เปอร์เซนต์เลยทีเดียว
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "#ff00ff",
                              }}
                            >
                              12
                            </a>{" "}
                            การแทงพนันนบอลออนไลน์แบบเจ้าบ้านชนะ หรือ
                            ทีมเยือนชนะก็ได้ เมื่อจบเกม แต่ห้ามเสมอกัน
                            นับได้ว่าเป็นการวางเดิมพันที่มีความแน่นอนสูงที่สุด
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "#ff00ff",
                              }}
                            >
                              2X
                            </a>{" "}
                            คือ การแทงพนันบอลออนไลน์แบบทีมเยือนชนะหรือเสมอ
                            หมายความว่าผลออกมา ทีมเยือนชนะด้วยสกอร์ใดๆก็ตาม
                            หรือว่าเสมอ ท่านที่วางเดิมพันที่ช่องนี้จะเป็นฝ่ายชนะ
                            <br />
                            <br />
                            โดยการเล่นแบบ Double Chance
                            นั้นสามารถเลือกแทงได้ทั้งครึ่งแรก
                            <a
                              style={{
                                fontWeight: "bold",
                                color: "#ff00ff",
                              }}
                            >
                              {" "}
                              (FH DC){" "}
                            </a>
                            และ เต็มเวลา
                            <a
                              style={{
                                fontWeight: "bold",
                                color: "#ff00ff",
                              }}
                            >
                              {" "}
                              (FT DC){" "}
                            </a>
                            <br />
                            <br />
                            ยกตัวอย่างในรูป (ช่องสีเหลือง)
                            <br />
                            <br />
                            ท่านลูกค้าเลือก การแทง 100 บาท ที่ FT DC
                            <br />
                            <br />
                            เลือก 1X ถ้าท่านชนะจะได้รับเงิน (100*1.18 = 118 บาท
                            รวมทุน)
                            <br />
                            <br />
                            เลือก 12 ถ้าท่านชนะจะได้รับเงิน (100*1.30 = 130 บาท
                            รวมทุน)
                            <br />
                            <br />
                            เลือก 2X ถ้าท่านชนะจะได้รับเงิน (100*2.13 = 213 บาท
                            รวมทุน)
                            <br />
                            <br />
                            <img
                              src="https://www.ufabetcn.com/wp-content/uploads/2019/12/ufabet-soccer-betting-07-768x465.jpg.webp"
                              width="100%"
                            ></img>
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "#6ec1e4",
                              }}
                            >
                              การแทงบอล Correct Score กับ เว็บแทงบอลออนไลน์
                            </a>
                            <br />
                            <br />
                            Correct Score ในเว็บแทงบอลออนไลน์ คือการทายผลสกอร์
                            หรือ ทายผลบอล ให้ถูกต้อง
                            เป็นการเล่นที่ง่ายที่สุดและได้อัตราการจ่ายแบบมหาศาลเรียกได้ว่าถ้าเลือกได้ถูก
                            กลายเป็นเศรษฐีใหม่ข้ามคืนได้กันเลยทีเดียว โดย
                            เว็บแทงบอลออนไลน์ ของ UFABET
                            จะมีจำนวนสกอร์ให้เลือกโดยท่านลูกค้าสามารถเลือกสกอร์ที่ท่านชอบได้เลย
                            โดยดูอัตราการจ่ายได้จากจำนวนตัวคูณ
                            <br />
                            <br />
                            โดยทางเว็บแทงบอลออนไลน์ได้แบ่งให้ท่านได้ดูง่ายๆ
                            โดยแบ่งเป็นสองฝั่งสีแดงคือจำนวนเจ้าบ้านชนะหรือทีมเยือนชนะ
                            และฝั่งสีเขียวคือจำนวนที่เสมอ
                            <br />
                            <br />
                            ยกตัวอย่าง
                            <br />
                            <br />
                            ท่านลูกค้าเลือก กดที่สกอร์ 2-4 โดยการแทง 100 บาท
                            กับเว็บแทงบอล ท่านจะได้รับเงิน (100 * 234.4 = 23,440
                            บาท รวมทุน)
                            <br />
                            <br />
                            เห็นไหมค่ะว่าการลงทุนแค่ 100 บาท
                            สามารถได้เงินหลักหมื่นเข้ากระเป๋าได้อย่างสบายเลยทีเดียวลองคิดภาพว่าท่านลูกค้าเล่นที่
                            1,000 บาทดูสิค่ะ
                            <br />
                            <br />
                            <img
                              src="https://www.ufabetcn.com/wp-content/uploads/2019/12/ufabet-soccer-betting-08-768x507.jpg.webp"
                              width="100%"
                            ></img>
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "#6ec1e4",
                              }}
                            >
                              วิธีพนันบอล Half Time/Full Time เว็บพนันบอล
                              ยูฟ่าเบท
                            </a>
                            <br />
                            <br />
                            วิธีพนันบอล Half Time/Full Time กับ เว็บพนันบอล
                            การเล่นแบบขั้น Advance
                            โดยส่วนมากจะไม่เป็นที่นิยมของนักพนันบอลไทยสักเท่าไหรเนื่องจากมีความสับสนและไม่แน่ใจในการแทง
                            ดูยากและไม่เข้าใจ วันนี้เราจะมาอธิบายแบบสั้นๆ
                            ที่จะทำให้เข้าใจได้ง่ายและมีความมั่นใจในการแทงมากขึ้น
                            <br />
                            <br />
                            <a
                              style={{
                                fontWeight: "bold",
                                color: "#ff00ff",
                              }}
                            >
                              HH (Home Home){" "}
                            </a>
                            = จบครึ่งแรกเจ้าบ้านนำ
                            และเมื่อจบเกมการแข่งขันเจ้าบ้านต้องชนะ เช่น
                            ครึ่งแรกเจ้าบ้านนำ 1-0 จบเกมเจ้าบ้านชนะ 2-1 เป็นต้น
                            <br />
                            <br />
                            <a
                              style={{
                                fontWeight: "bold",
                                color: "#ff00ff",
                              }}
                            >
                              HD (Home Draw){" "}
                            </a>
                            = จบครึ่งแรกเจ้าบ้านนำ
                            และเมื่อจบเกมการแข่งขันผลต้องออกมาเสมอ เช่น
                            ครึ่งแรกเจ้าบ้านนำ 1-0 จบเกมเจ้าบ้านเสมอ 1-1
                            <br />
                            <br />
                            <a
                              style={{
                                fontWeight: "bold",
                                color: "#ff00ff",
                              }}
                            >
                              HA (Home Away){" "}
                            </a>
                            = จบครึ่งแรกเจ้าบ้านนำ
                            และเมื่อจบเกมการแข่งขันทีมเยือนต้องพลิกกลัลบมาชนะ
                            เช่น ครึ่งแรกเจ้าบ้านนำ 1-0 จบเกมทีมเยือนกลับมาชนะ
                            1-2
                            <br />
                            <br />
                            <a
                              style={{
                                fontWeight: "bold",
                                color: "#ff00ff",
                              }}
                            >
                              DH (Draw Home){" "}
                            </a>
                            = จบครึ่งแรกต้องเสมอกัน
                            และเมื่อจบเกมการแข่งขันเจ้าบ้านต้องชนะ เช่น
                            ครึ่งแรกเสมอกัน 1-1 จบเกมเจ้าบ้านชนะ 2-1
                            <br />
                            <br />
                            <a
                              style={{
                                fontWeight: "bold",
                                color: "#ff00ff",
                              }}
                            >
                              DD (Draw Draw){" "}
                            </a>
                            = จบครึ่งแรกต้องเสมอกัน
                            และเมื่อจบเกมการแข่งขันก็ต้องเสมอกัน เช่น
                            ครึ่งแรกเสมอกัน 1-1 จบเกมต้องเสมอกัน 1-1
                            หรือสกอร์อื่นเช่น 2-2 หรือ 3-3
                            <br />
                            <br />
                            <a
                              style={{
                                fontWeight: "bold",
                                color: "#ff00ff",
                              }}
                            >
                              DA (Draw Away){" "}
                            </a>
                            = จบครึ่งแรกต้องเสมอกัน
                            และเมื่อจบเกมการแข่งขันทีมเยือนต้องชนะ เช่น
                            ครึ่งแรกเสมอกัน 1-1 จบเกมทีมเยือนชนะ 1-2
                            <br />
                            <br />
                            <a
                              style={{
                                fontWeight: "bold",
                                color: "#ff00ff",
                              }}
                            >
                              AH (Away Home){" "}
                            </a>
                            = จบครึ่งแรกทีมเยือนชนะ
                            และเมื่อจบเกมการแข่งขันทีมเจ้าบ้านชนะ เช่น
                            ครึ่งแรกทีมเยือนนำ 0-1 จบเกมเจ้าบ้านกลับมาชนะ 2-1
                            <br />
                            <br />
                            <a
                              style={{
                                fontWeight: "bold",
                                color: "#ff00ff",
                              }}
                            >
                              AD (Away Draw){" "}
                            </a>
                            = จบครึ่งแรกทีมเยือนชนะ
                            และเมื่อจบการแข่งขันผลออกมาเสมอกัน เช่น
                            ครึ่งแรกทีมเยือนนำ 0-1 จบเกมการแข่งขันผลออกมาเสมอ
                            <br />
                            <br />
                            <a
                              style={{
                                fontWeight: "bold",
                                color: "#ff00ff",
                              }}
                            >
                              AA (Away Away){" "}
                            </a>
                            = จบครึ่งแรกทีมเยือนชนะ
                            และเมื่อการจบการแข่งขันทีมเยือนยังคงชน เช่น
                            ครึ่งแรกทีมเยือนนำ 0-1 จบเกมการแข่งขันทีมเยือนชนะ
                            <br />
                            <br />
                            <img
                              width="100%"
                              src="https://www.ufabetcn.com/wp-content/uploads/2019/12/ufabet-soccer-betting-09-768x509.jpg.webp"
                            />
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "#6ec1e4",
                              }}
                            >
                              วิธีพนันบอล Half Time/Full Time เว็บพนันบอล
                              ยูฟ่าเบท
                            </a>
                            <br />
                            <br />
                            แทงบอล แบบ First Goal/Last Goal
                            คือการแทงบอลว่าทีมไหนจะทำประตูเป็นทีมแรก
                            โดยจะมีให้ท่านลูกค้าได้เลือกสองฝั่ง
                            คือฝั่งเจ้าบ้านและฝั่งทีมเยือน
                            อัตราการจ่ายตัวคูณจะไม่เท่ากัน Last Goal คือ
                            ทีมไหนจะทำประตูเป็นทีมสุดท้าย
                            เช่นกันจะมีให้ท่านลูกค้าได้เลือกแทงทั้งฝั่งเจ้าบ้านและทีมเยือน
                            No Goal คือ ไม่มีการทำประตูระหว่างทั้งสองฝ่าย
                            <br />
                            <br />
                            ยกตัวอย่าง การแทงบอลในเว็บแทงบอลยฟ่าเบท
                            <br />
                            <br />
                            คู่ระหว่าง Celta Vigo – Real Valladolid
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "red",
                              }}
                            >
                              แทงช่องสีแดง
                            </a>
                            <br />
                            <br />
                            <a
                              style={{
                                fontWeight: "bold",
                                color: "#ff00ff",
                              }}
                            >
                              First Goal ทีมเจ้าบ้าน{" "}
                            </a>
                            = แทง 100 บาท เมื่อท่านชนะจะรับได้เงิน (100*1.5 =
                            150 บาท รวมทุน)
                            <br />
                            <br />
                            <a
                              style={{
                                fontWeight: "bold",
                                color: "#ff00ff",
                              }}
                            >
                              Last Goal ทีมเจ้าบ้าน{" "}
                            </a>
                            = แทง 100 บาท เมื่อท่านชนะจะได้รับเงิน (100*1.5 =
                            150 บาท รวมทุน)
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "green",
                              }}
                            >
                              แทงบอลช่องสีเขียว
                            </a>
                            <br />
                            <br />
                            <a
                              style={{
                                fontWeight: "bold",
                                color: "#ff00ff",
                              }}
                            >
                              First Goal ทีมเยือน{" "}
                            </a>
                            = แทง 100 บาท เมื่อท่านชนะจะรับได้เงิน (100*3.01 =
                            301 บาท รวมทุน)
                            <br />
                            <br />
                            <a
                              style={{
                                fontWeight: "bold",
                                color: "#ff00ff",
                              }}
                            >
                              Last Goal ทีมเยือน{" "}
                            </a>
                            = แทง 100 บาท เมื่อท่านชนะจะได้รับเงิน (100*3.01 =
                            301 บาท รวมทุน)
                            <br />
                            <br />
                            <a
                              style={{
                                fontWeight: "bold",
                                color: "#ff00ff",
                              }}
                            >
                              No Goal ไม่มีประตู{" "}
                            </a>
                            = แทง 100 บาท เมื่อท่านชนะจะได้รับเงิน (100*8.96 =
                            896 บาท รวมทุน)
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                              }}
                            >
                              คือการพนันบอลที่มีให้เลือกแบบง่ายๆ แค่สามแบบ คือ
                            </a>
                            <br />
                            <br />
                            <img
                              width="100%"
                              src="https://www.ufabetcn.com/wp-content/uploads/2019/12/ufabet-soccer-betting-10-768x398.jpg.webp"
                            />
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "#6ec1e4",
                              }}
                            >
                              แทงบอลออนไลน์ แทงบอลสเต็ป แทงบอลชุด
                            </a>
                            <br />
                            <br />
                            <a
                              style={{
                                color: "red",
                                fontWeight: "bold",
                              }}
                            >
                              Mix Parlay{" "}
                            </a>
                            หรือ
                            <a
                              style={{
                                color: "red",
                                fontWeight: "bold",
                              }}
                            >
                              บอลสเต็ป{" "}
                            </a>
                            หรือ
                            <a
                              style={{
                                color: "red",
                                fontWeight: "bold",
                              }}
                            >
                              บอลชุด{" "}
                            </a>
                            นั้นเอง ข้อดีของ UFABET
                            คือสามารถแทงบอลสเต็ปได้ขั้นต่ำแค่เพียง 2 คู่
                            และได้มากสุดถึง 12 คู่ หรือ 12 ชุด ด้วยกัน
                            โดยมีการเปิดอัตราต่อรองให้เล่นหลายประเภททั้งครึ่งแรกครึ่งหลัง
                            Over/Under และรูปแบบอื่นๆของการแทงบอลออนไลน์ทั่วๆไป
                            <br />
                            <br />
                            ราคาและอัตตราต่อรองที่เปิดสำหรับ Mix Parlay หรือ
                            บอลชุด หรือ บอลสเต็ป
                            <br />
                            <br />
                            <a
                              style={{
                                fontWeight: "bold",
                                color: "#ff00ff",
                              }}
                            >
                              FT HDP (Full Time Handicap){" "}
                            </a>
                            = อัตราต่อรองแต้มต่อแบบเต็มเวลา
                            <br />
                            <br />
                            <a
                              style={{
                                fontWeight: "bold",
                                color: "#ff00ff",
                              }}
                            >
                              FT O/U (Full Time Over&Under){" "}
                            </a>
                            = อัตราต่อรองสูงต่ำแบบเต็มเวลา
                            <br />
                            <br />
                            <a
                              style={{
                                fontWeight: "bold",
                                color: "#ff00ff",
                              }}
                            >
                              FT 1X2 (Full Time 1X2){" "}
                            </a>
                            = อัตราต่อรองให้เลือกฝั่ง แพ้ ชนะ เสมอ แบบเต็มเวลา
                            <br />
                            <br />
                            <a
                              style={{
                                fontWeight: "bold",
                                color: "#ff00ff",
                              }}
                            >
                              FT O/E (Full Time Odd&Even){" "}
                            </a>
                            = อัตราต่อรองแบบ ผลสกอร์ออกมาเป็น คี่หรือคู่
                            <br />
                            <br />
                            <a
                              style={{
                                fontWeight: "bold",
                                color: "#ff00ff",
                              }}
                            >
                              HDP (First Half Handicap){" "}
                            </a>
                            = อัตราต่อรองแต้มต่อแบบครึ่งเวลา
                            <br />
                            <br />
                            <a
                              style={{
                                fontWeight: "bold",
                                color: "#ff00ff",
                              }}
                            >
                              O/U (First Half Over&Under){" "}
                            </a>
                            = อัตราต่อรองสูงต่ำแบบครึ่งเวลา
                            <br />
                            <br />
                            <a
                              style={{
                                fontWeight: "bold",
                                color: "#ff00ff",
                              }}
                            >
                              1X2 (First Half 1X2){" "}
                            </a>
                            = อัตราต่อรองให้เลือกฝั่ง แพ้ ชนะ เสมอ แบบครึ่งเวลา
                            <br />
                            <br />
                            UFABET ให้ท่านลูกค้าเลือกราคาการแทงบอลออนไลน์เพียง 1
                            อย่าง จาก 7 อย่างที่เปิดมาเท่านั้น
                            จะไม่สามารถแทงหลายอัตราต่อรองภายในคู่เดียวกันได้
                            ทีนี้เรามาดูถึงอัตราการจ่ายเงินและจำนวนคู่ในการแทง
                            บอลสเต็ป หรือบอลชุดกัน
                            <br />
                            <br />
                            การแทงบอลแบบ Maximum มากสุดจำนวน 12 คู่
                            แทงขั้นต่ำได้ 10 บาท และ ไม่เกิน 400 บาท
                            (หรือถ้าท่านเป็นลูกค้ามือหนักต้องการความตื่นเต้นที่มากกว่านี้
                            สามารถติดต่อ Call Center
                            เพื่อเพิ่มวงเงินเดิมพันได้ทันทีค่ะ)
                            <br />
                            <br />
                            <img
                              width="100%"
                              src="https://www.ufabetcn.com/wp-content/uploads/2019/12/ufabet-soccer-betting-11-768x421.jpg.webp"
                            />
                            <br />
                            <br />
                            <a
                              style={{
                                color: "red",
                                fontWeight: "bold",
                              }}
                            >
                              Mix Parlay Combo{" "}
                            </a>
                            คือบอล สเต็ป หรือ บอลชุด
                            ที่มีกีฬาอื่นเปิดให้ท่านลูกค้าได้แทงด้วย
                            เช่นบาสเกตบอล ท่านสามารถเลือกที่จะเล่นทั้ง ฟุตบอล
                            และบาสเกตบอลในบิลเดียวกัน Mix Parlay
                            ปกตินั้นจะเปิดแค่ฟุตบอลให้แทงอย่างเดียว
                            <br />
                            <br />
                            <img
                              width="100%"
                              src="https://www.ufabetcn.com/wp-content/uploads/2019/12/ufabet-soccer-betting-12-768x447.jpg.webp"
                            />
                            <br />
                            <br />
                            <a
                              style={{
                                color: "red",
                                fontWeight: "bold",
                              }}
                            >
                              Outright{" "}
                            </a>
                            คือการแทงบอลว่าทีมที่คิดจะเป็นแชมป์ในลีคนั้นๆ
                            และในฤดูกาลนั้นๆ อัตราต่อรองที่ได้เปรียบที่สุด
                            หมายความว่าจะได้ตัวคูณมากที่สุดคือต้นฤดูกาลเพราะว่ายังไม่เห็นฟอร์มการเล่น
                            มากนัก แต่ถ้ามาถึงกลางฤดูกาลแล้ว
                            เห็นความชัดเจนแล้วอัตราตัวคูณจะน้อยลง
                            ยกตัวอย่างในรูป ถ้าเดิมพัน Manchester City เป็นแชมป์
                            ท่านจะได้ตัวคูน 3.80 เท่า สมมุติ แทง 10,000 บาท
                            ท่านจะได้รับเงิน 28,000 บาท (ไม่รวมทุน)
                            <br />
                            <br />
                            นับได้ว่าการแทงแบบ Outright เหมาะสำหรับแฟนบอลตัวยง
                            ไม่ค่อยจอบโจทย์นักเล่นสักเท่าไหรนัก
                            <br />
                            <br />
                            <br />
                            เห็นไหมค่ะว่าเวลาเพียง 5 นาทีทำให้นัก
                            <a
                              style={{
                                color: "gold",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              พนันบอล{" "}
                            </a>
                            ได้เข้าใจหลักการ
                            <a
                              style={{
                                color: "gold",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              แทงบอลออนไลน์{" "}
                            </a>
                            ของ
                            <a
                              style={{
                                color: "gold",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              ufabet{" "}
                            </a>
                            ได้อย่างถ่องแท้ และสามารถอ่านการเปิดราคาจากทาง
                            UFABET ได้เป็นอย่างดีอีกด้วย
                            ทางเราหวังว่าบทความนี้จะเป็นประโยชน์ต่อการ
                            <a
                              style={{
                                color: "gold",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              แทงบอล{" "}
                            </a>
                            และสามารถทำเงินให้ทุกๆท่านนะค่ะ
                            <br />
                            <br />
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
                                fontSize: "21px",
                                fontWeight: "bold",
                                color: "black",
                              }}
                            >
                              แทงบอล สมัครแทงบอลออนไลน์ UFABET
                              เว็บพนันบอลออนไลน์ดีที่สุด
                            </span>
                            <img
                              style={{ width: "100%" }}
                              src="https://www.ufabet-th191.com/img/betball.jpg"
                            ></img>
                          </Row>
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
                            บทความดังต่อไปนี้จะทำให้ท่านสามารถ
                            <a
                              style={{
                                color: "gold",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              แทงบอลออนไลน์{" "}
                            </a>
                            แบบชั้นเซียน เพียงแค่ 5 นาที
                            เราจะอธิบายทุกขั้นตอนในการอ่านราคาค่าน้ำในการแทงบอลและการวางเดิมพันต่างๆ
                            เราจะทำให้ท่านสามารถสนุกสนานและเพลิดเพลินกับการ
                            <a
                              style={{
                                color: "gold",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              แทงบอล{" "}
                            </a>
                            ได้ทุกที่ ทุกเวลา เพียงแค่ปลายนิ้วบนมือถือของคุณเอง
                            <br />
                            <br />
                            การ
                            <a
                              style={{
                                color: "gold",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              พนันบอล{" "}
                            </a>{" "}
                            มีมานานมากแล้วเพียงแต่ปัจจุบันได้พัฒนามาเป็นการ
                            <a
                              style={{
                                color: "gold",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              พนันบอลออนไลน์{" "}
                            </a>
                            ที่นักพนันสามารถเล่น
                            <a
                              style={{
                                color: "gold",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              เว็บแทงบอล{" "}
                            </a>
                            ได้เองในมือถือโดยที่ผู้เล่นเองสามารถ แทงบอล
                            <a
                              style={{
                                color: "gold",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              ไม่มีขั้นต่ำ{" "}
                            </a>
                            โดยเว็บพนันบอลที่เป็นที่นิยมที่สุดในปัจจุบันคงไม่พ้น
                            <a
                              style={{
                                color: "gold",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              ufabet{" "}
                            </a>
                            ซึ่งเป็นหนึ่งใน
                            <a
                              style={{
                                color: "whitesmoke",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              เว็บแทงบอลที่ปลอดภัย{" "}
                            </a>
                            ได้รับความนิยมไปทั่วโลก
                            ถ้าคุณยังไม่แน่ใจจ่าจะแทงบอลที่เว็บไหนดีเราขอแนะนำเว็บ
                            <a
                              style={{
                                color: "gold",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              ยูฟ่าเบท{" "}
                            </a>
                            หรือ
                            <a
                              style={{
                                color: "gold",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              ufabet.com{" "}
                            </a>
                            <br />
                            <br />
                            ขั้นตอนแรกเพียงแค่ท่านมี Username และ Password
                            ในการเข้าเล่น
                            <a
                              style={{
                                color: "whitesmoke",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              แทงบอลออนไลน์ในเว็บ UFABET{" "}
                            </a>
                            แต่ถ้าท่านยังไม่มียูสเซอร์
                            สามารถสมัครกับทางเราได้ทันทีเพียงแค่แอดไลน์
                            <a
                              style={{
                                color: "green",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              @GOLD28{" "}
                            </a>
                            จะมีเจ้าหน้านี้พร้อมบริการท่านในการ
                            <a
                              style={{
                                color: "whitesmoke",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              สมัครสมาชิกแทงบอล{" "}
                            </a>
                            <a
                              style={{
                                color: "gold",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              เว็บแทงบอลออนไลน์{" "}
                            </a>
                            ของเราเป็นตัวแทนอย่างเป็นทางการจาก
                            <a
                              style={{
                                color: "gold",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              www.ufabet.com{" "}
                            </a>
                            ทำให้ท่านมั่นใจในการเดิมพัน ไม่ว่าจะแทงหลักร้อย
                            หรือแทงหลักล้าน การเงินของเรากล้าการันตี 100%
                            เพราะเป็นเว็บตรงจาก UFABET หมดห่วงเรื่องการโกง
                            นอกจากการเงินที่มั่นใจแล้วท่านลูกค้ายังได้สิทธิพิเศษที่เหนือกว่า
                            ด้วยค่าคอมมิชชั่นกีฬา 0.75% มากที่สุดในไทย
                            ในการคืนยอดเสียรายเดือน 5% สูงสุดที่ 10,000 บาท
                            ไม่มีใครให้มากกว่าเรากล้าการันตี
                            <br />
                            <br />
                            <img width="100%" src={Expix1}></img>
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "#6ec1e4",
                              }}
                            >
                              สมัครแทงบอล UFABET เว็บแทงบอล ยูฟ่าเบท
                            </a>
                            <br />
                            <br />
                            เมื่อท่านลูกค้าได้รับ Username และ Password
                            แล้วให้ท่านลูกค้าทำการ Login ผ่านทางหน้าเว็บของเรา
                            www.ufabet-th191.com แล้วกรอกข้อมูลให้ครบถ้วนช่อง
                            ยูสเซอร์เนม และ รหัสผ่าน
                            <br />
                            <br />
                            <img
                              src="https://www.ufabetcn.com/wp-content/uploads/2019/12/ufabet-soccer-betting-03-768x473.jpg.webp"
                              width="100%"
                            ></img>
                            <br />
                            <br />
                            เมื่อทานลูกค้าได้ทำการ Login เข้ายูฟ่าเบทมาแล้ว
                            ท่านจะเห็นยูสเซอร์ของท่าน
                            พร้อมเครดิตคงเหลือที่ท่านมีอยู่ทางด้านมุมบนซ้าย
                            ตามรูปประกอบ การวางเดิมพันแทงบอลออนไลน์ แบ่งได้เป็น
                            9 ประเภทหลักๆได้แก่
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "#6ec1e4",
                              }}
                            >
                              แทงบอลออนไลน์ แบบต่างๆ กับเว็บแทงบอล ufabet
                            </a>
                            <br />
                            <br />
                            <img
                              src="https://www.ufabetcn.com/wp-content/uploads/2019/12/ufabet-soccer-betting-04-768x508.jpg.webp"
                              width="100%"
                            ></img>
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "#6ec1e4",
                              }}
                            >
                              แทงบอลออนไลน์ แบบ HDP&OU
                            </a>
                            <br />
                            <br />
                            การแทงบอลออนไลน์แบบ HDP&OU ย่อมาจาก Handicap(HDP)
                            นั้นคือราคาอัตราต่อรองทั่วไปของการแทงบอลออนไลน์ตามบ้านเรานั้นเอง
                            และ OU(Over&Under) ก็คือการแทงบอลสกอร์สูงต่ำ
                            ท่านลูกค้านักพนันสามารถเลือกอัตราต่อรอง
                            และสามารถวางเดิมพันได้ทั้งครึ่งแรก และครึ่งหลัง
                            เคล็ดลับการดูอัตราต่อรองแบบง่ายๆคือ
                            ทีมไหนใช้ตัวหนังสือสีแดง นั่นคือทีมบอลที่ “ต่อ”
                            ส่วนตัวหนังสือสีดำนั้นคือทีมรอง ส่วนการดูค่าน้ำ
                            ในรูปนี้คือการใช้ค่าน้ำแบบ MY
                            คือค่าน้ำมาตราฐานมาเลเซีย
                            ซึ่งเป็นค่ากลางและเป็นที่นิยมมากที่สุด
                            โดยใช้จุดทศนิยมสองตำแหน่ง
                            หลักการดูค่าน้ำอย่างง่ายคือ ตัวหนังสือสีดำคือ
                            อัตราค่าน้ำที่ท่านได้ ยกตัวอย่างเช่น ท่านแทงบอลน้ำ
                            0.77 (ตัวหนังสือดำ) เมื่อท่านแทงถูก ท่านลูกค้าจะได้
                            77 บาท จากการวางเดิมพัน 100 บาท
                            แต่ถ้าเป็นหนังสือที่ติดลบตัวสีแดง ยกตัวอย่าง
                            ท่านลูกค้าเลือกเล่นราคา -0.88 (ตัวหนังสือสีแดง)
                            เมื่อท่านวางเดิมพันแล้วชนะ ท่านจะได้ 100
                            บาทจากการแทง 100 บาท แต่ในทางตรงกันข้ามเมื่อท่าน
                            แทงแล้วเสีย ท่านลูกค้าจะเสียแค่ 88 บาท
                            จากการวางเดิมพัน 100 บาท
                            นับว่าเป็นการวางเดิมพันที่ค่อนข้างได้เปรียบ
                            เพราะว่าได้เยอะเสียน้อย
                            <br />
                            <br />
                            <img
                              src="https://www.ufabetcn.com/wp-content/uploads/2019/12/ufabet-soccer-betting-05-768x507.jpg.webp"
                              width="100%"
                            ></img>
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "#6ec1e4",
                              }}
                            >
                              แทงบอล แบบ Odd/Even & Total Goal
                            </a>
                            <br />
                            <br />
                            แทงบอล Odd/Even & Total Goal Odd และ Even
                            คือการแทงบอลโดยการทายผลรวมของการแข่งขันว่าจะออกเป็นเลขคี่
                            (Odd) หรือเลขคู่ (Even) ยกตัวอย่างเช่น ผลรวมของคู่
                            ลิเวอร์พูล 3-3 แมนยู ผมรวมทั้งหมดคือ 3+3= “6”
                            นั่นคือเลขคู่
                            ดังนั้นถ้าท่านลูกค้าวางเดิมพันที่ตำแหน่ง Even
                            ท่านลูกค้าจะชนะการเดิมดันได้อย่างง่ายดาย
                            <br />
                            <br />
                            **หมายเหตุ สกอร์ 0-0 นับว่าเป็นผลรวมสกอร์แบบ คู่
                            หรือ Even **
                            <br />
                            <br />
                            Total Goal
                            คือการทายผลรวมการแข่งขันโดยนับจำนวนลูกที่ยิงได้ของทั้งสองฝั่งนำมาบวกรวมกัน
                            จะได้จำนวน Total Goal
                            และเมื่อท่านลูกค้าทายได้ถูกต้อง
                            จะได้เงินคูณจากจำนวนที่ได้ทางเว็บได้เปิดราคาไว้ให้ตอนแรกที่ท่านลูกค้าได้เลือกแทง
                            <br />
                            <br />
                            อธิบายตามราคาจริง (ตามรูป) ยกตัวอย่างคู่ FC Astana –
                            Manchester United หลังจบการแข่งขัน FC Astana 2-1
                            Manchester United
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "#ff00ff",
                              }}
                            >
                              แทงบอล Odd/Even
                            </a>
                            <br />
                            <br />
                            = ถ้าท่านลูกค้าเลือกแทงสกอร์คี่ หรือ Odd ในคู่นี้
                            ในการวางเดิมพันที่ 100 บาท ท่านลูกค้าจะได้รับเงิน
                            <br />
                            <br />
                            100 * 1.00 = 100 บาท (ไม่รวมทุน)
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "#ff00ff",
                              }}
                            >
                              แทงบอล Total Goal
                            </a>
                            <br />
                            <br />
                            = ผมรวมจำนวนลูกที่ยิงได้ของคู่ FC Astana –
                            Manchester United ทั้งหมดคือ “3 ลูก” ดั้งนั้น
                            ถ้าลูกค้าได้เลือกแทงช่อง 2-3 ในจำนวนการวางเดิมพันที่
                            100 บาท จะได้รับเงินตามวิธีคิดดังนี้ 100 * 1.83 = 83
                            บาท (ไม่รวมทุน)
                            <br />
                            <br />
                            แต่ทางเราขอแนะนำการวางเดิมพันที่ได้ตัวคูณค่อนข้างลูก
                            และเรียกได้ว่าเป็นอีกหนึ่งเทคนิคในการแทงบอล
                            <br />
                            <br />
                            โดยที่จะให้เลือก ผลรวมของสกอร์ที่ 7 ลูกขึ้นไป
                            คือเลือก “7 & Over” โดยกรณีนี้ท่านลูกค้าจะได้รับ
                            ตัวคูณถึง 19 เท่าด้วยกัน เช่น แทง 100 บาท
                            จะได้รับเงินทั้งหมด 1,900 บาทเลยทีเดียว
                            ถึงแม้โอกาสนี้จะเกิดขึ้นไม่ได้มาก แต่เรียกได้ว่า
                            เป็นการลงทุนที่คุ้มค่ามากๆ
                            เลยทีเดียวเหมาะสำหรับนักเล่นอาชีพ
                            และผู้ที่ชอบความท้าทายและสไตล์การแทงบอลที่ไม่เหมือนใคร
                            <br />
                            <br />
                            <img
                              src="https://www.ufabetcn.com/wp-content/uploads/2019/12/ufabet-soccer-betting-06-768x633.jpg.webp"
                              width="100%"
                            ></img>
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "#6ec1e4",
                              }}
                            >
                              พนันบอล ออนไลน์ แบบ 1X2 & Double Chance
                            </a>
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "red",
                              }}
                            >
                              พนันบอล ออนไลน์ แบบ 1X2
                            </a>
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                              }}
                            >
                              คือการพนันบอลที่มีให้เลือกแบบง่ายๆ แค่สามแบบ คือ
                            </a>
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "#ff00ff",
                              }}
                            >
                              “1”
                            </a>{" "}
                            คือ การเลือกว่าพนันบอลว่าเจ้าบ้านจะชนะ
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "#ff00ff",
                              }}
                            >
                              “X”
                            </a>{" "}
                            คือ การเลือกพนันบอลว่าว่าทั้งสอทีมจะเสมอกัน
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "#ff00ff",
                              }}
                            >
                              “2”
                            </a>{" "}
                            คือ การเลือกพนันบอลว่าว่าทีมเยือนจะชนะ
                            <br />
                            <br />
                            โดยที่การเลือกแทงบอลแบบ
                            <a
                              style={{
                                fontWeight: "bold",
                                color: "#ff00ff",
                              }}
                            >
                              {" "}
                              1X2{" "}
                            </a>
                            นั้นสามารถเลือกพนันได้ทั้งครึ่งแรก
                            <a
                              style={{
                                fontWeight: "bold",
                                color: "#ff00ff",
                              }}
                            >
                              {" "}
                              (FH 1X2){" "}
                            </a>
                            และ เต็มเวลา
                            <a
                              style={{
                                fontWeight: "bold",
                                color: "#ff00ff",
                              }}
                            >
                              {" "}
                              (FT 1X2){" "}
                            </a>
                            <br />
                            <br />
                            ยกตัวอย่างตามรูป (ช่องสีเขียว)
                            <br />
                            <br />
                            ถ้าท่านลูกค้าเลือกแทงบอลแบบ 1X2 แบบ FT
                            โดยได้ทำการเลือก ช่อง “2” ในการแทง 100 บาท
                            เมื่อผลออกมาทีมเยือนได้ทำการบุกชนะเจ้าบ้านได้
                            ท่านลูกค้าได้จะได้รับเงิน 100*5.08 = 508 บาท
                            (รวมทุนแล้ว 100 บาท)
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "red",
                              }}
                            >
                              พนันบอล ออนไลน์ แบบ Double Chance{" "}
                            </a>
                            <a
                              style={{
                                fontSize: "20px",
                              }}
                            >
                              คือการพนันบอลที่มีให้เลือกแบบง่ายๆ แค่สามแบบ คือ
                            </a>
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "#ff00ff",
                              }}
                            >
                              1X
                            </a>{" "}
                            คือ การแทงพนันบอลออนไลน์แบบเจ้าบ้านชนะหรือเสมอ
                            หมายความว่าเมื่อผลออกมา
                            เจ้าบ้านชนะด้วยสกอร์ใดๆก็ตามท่านลูกค้าเป็นฝ่ายชนะ
                            หรือไม่ว่าผลจะออกเสมอ
                            ท่านลูกค้าก็ยังจะชนะการเดิมพันในครั้งนี้
                            เปรียบเทียบเหมือนกับการแทงที่มีโอกาสได้สูงมากในอัตราส่วน
                            2 ใน 3 คิดเป็นเปอร์เซนต์คือ 66.66
                            เปอร์เซนต์เลยทีเดียว
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "#ff00ff",
                              }}
                            >
                              12
                            </a>{" "}
                            การแทงพนันนบอลออนไลน์แบบเจ้าบ้านชนะ หรือ
                            ทีมเยือนชนะก็ได้ เมื่อจบเกม แต่ห้ามเสมอกัน
                            นับได้ว่าเป็นการวางเดิมพันที่มีความแน่นอนสูงที่สุด
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "#ff00ff",
                              }}
                            >
                              2X
                            </a>{" "}
                            คือ การแทงพนันบอลออนไลน์แบบทีมเยือนชนะหรือเสมอ
                            หมายความว่าผลออกมา ทีมเยือนชนะด้วยสกอร์ใดๆก็ตาม
                            หรือว่าเสมอ ท่านที่วางเดิมพันที่ช่องนี้จะเป็นฝ่ายชนะ
                            <br />
                            <br />
                            โดยการเล่นแบบ Double Chance
                            นั้นสามารถเลือกแทงได้ทั้งครึ่งแรก
                            <a
                              style={{
                                fontWeight: "bold",
                                color: "#ff00ff",
                              }}
                            >
                              {" "}
                              (FH DC){" "}
                            </a>
                            และ เต็มเวลา
                            <a
                              style={{
                                fontWeight: "bold",
                                color: "#ff00ff",
                              }}
                            >
                              {" "}
                              (FT DC){" "}
                            </a>
                            <br />
                            <br />
                            ยกตัวอย่างในรูป (ช่องสีเหลือง)
                            <br />
                            <br />
                            ท่านลูกค้าเลือก การแทง 100 บาท ที่ FT DC
                            <br />
                            <br />
                            เลือก 1X ถ้าท่านชนะจะได้รับเงิน (100*1.18 = 118 บาท
                            รวมทุน)
                            <br />
                            <br />
                            เลือก 12 ถ้าท่านชนะจะได้รับเงิน (100*1.30 = 130 บาท
                            รวมทุน)
                            <br />
                            <br />
                            เลือก 2X ถ้าท่านชนะจะได้รับเงิน (100*2.13 = 213 บาท
                            รวมทุน)
                            <br />
                            <br />
                            <img
                              src="https://www.ufabetcn.com/wp-content/uploads/2019/12/ufabet-soccer-betting-07-768x465.jpg.webp"
                              width="100%"
                            ></img>
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "#6ec1e4",
                              }}
                            >
                              การแทงบอล Correct Score กับ เว็บแทงบอลออนไลน์
                            </a>
                            <br />
                            <br />
                            Correct Score ในเว็บแทงบอลออนไลน์ คือการทายผลสกอร์
                            หรือ ทายผลบอล ให้ถูกต้อง
                            เป็นการเล่นที่ง่ายที่สุดและได้อัตราการจ่ายแบบมหาศาลเรียกได้ว่าถ้าเลือกได้ถูก
                            กลายเป็นเศรษฐีใหม่ข้ามคืนได้กันเลยทีเดียว โดย
                            เว็บแทงบอลออนไลน์ ของ UFABET
                            จะมีจำนวนสกอร์ให้เลือกโดยท่านลูกค้าสามารถเลือกสกอร์ที่ท่านชอบได้เลย
                            โดยดูอัตราการจ่ายได้จากจำนวนตัวคูณ
                            <br />
                            <br />
                            โดยทางเว็บแทงบอลออนไลน์ได้แบ่งให้ท่านได้ดูง่ายๆ
                            โดยแบ่งเป็นสองฝั่งสีแดงคือจำนวนเจ้าบ้านชนะหรือทีมเยือนชนะ
                            และฝั่งสีเขียวคือจำนวนที่เสมอ
                            <br />
                            <br />
                            ยกตัวอย่าง
                            <br />
                            <br />
                            ท่านลูกค้าเลือก กดที่สกอร์ 2-4 โดยการแทง 100 บาท
                            กับเว็บแทงบอล ท่านจะได้รับเงิน (100 * 234.4 = 23,440
                            บาท รวมทุน)
                            <br />
                            <br />
                            เห็นไหมค่ะว่าการลงทุนแค่ 100 บาท
                            สามารถได้เงินหลักหมื่นเข้ากระเป๋าได้อย่างสบายเลยทีเดียวลองคิดภาพว่าท่านลูกค้าเล่นที่
                            1,000 บาทดูสิค่ะ
                            <br />
                            <br />
                            <img
                              src="https://www.ufabetcn.com/wp-content/uploads/2019/12/ufabet-soccer-betting-08-768x507.jpg.webp"
                              width="100%"
                            ></img>
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "#6ec1e4",
                              }}
                            >
                              วิธีพนันบอล Half Time/Full Time เว็บพนันบอล
                              ยูฟ่าเบท
                            </a>
                            <br />
                            <br />
                            วิธีพนันบอล Half Time/Full Time กับ เว็บพนันบอล
                            การเล่นแบบขั้น Advance
                            โดยส่วนมากจะไม่เป็นที่นิยมของนักพนันบอลไทยสักเท่าไหรเนื่องจากมีความสับสนและไม่แน่ใจในการแทง
                            ดูยากและไม่เข้าใจ วันนี้เราจะมาอธิบายแบบสั้นๆ
                            ที่จะทำให้เข้าใจได้ง่ายและมีความมั่นใจในการแทงมากขึ้น
                            <br />
                            <br />
                            <a
                              style={{
                                fontWeight: "bold",
                                color: "#ff00ff",
                              }}
                            >
                              HH (Home Home){" "}
                            </a>
                            = จบครึ่งแรกเจ้าบ้านนำ
                            และเมื่อจบเกมการแข่งขันเจ้าบ้านต้องชนะ เช่น
                            ครึ่งแรกเจ้าบ้านนำ 1-0 จบเกมเจ้าบ้านชนะ 2-1 เป็นต้น
                            <br />
                            <br />
                            <a
                              style={{
                                fontWeight: "bold",
                                color: "#ff00ff",
                              }}
                            >
                              HD (Home Draw){" "}
                            </a>
                            = จบครึ่งแรกเจ้าบ้านนำ
                            และเมื่อจบเกมการแข่งขันผลต้องออกมาเสมอ เช่น
                            ครึ่งแรกเจ้าบ้านนำ 1-0 จบเกมเจ้าบ้านเสมอ 1-1
                            <br />
                            <br />
                            <a
                              style={{
                                fontWeight: "bold",
                                color: "#ff00ff",
                              }}
                            >
                              HA (Home Away){" "}
                            </a>
                            = จบครึ่งแรกเจ้าบ้านนำ
                            และเมื่อจบเกมการแข่งขันทีมเยือนต้องพลิกกลัลบมาชนะ
                            เช่น ครึ่งแรกเจ้าบ้านนำ 1-0 จบเกมทีมเยือนกลับมาชนะ
                            1-2
                            <br />
                            <br />
                            <a
                              style={{
                                fontWeight: "bold",
                                color: "#ff00ff",
                              }}
                            >
                              DH (Draw Home){" "}
                            </a>
                            = จบครึ่งแรกต้องเสมอกัน
                            และเมื่อจบเกมการแข่งขันเจ้าบ้านต้องชนะ เช่น
                            ครึ่งแรกเสมอกัน 1-1 จบเกมเจ้าบ้านชนะ 2-1
                            <br />
                            <br />
                            <a
                              style={{
                                fontWeight: "bold",
                                color: "#ff00ff",
                              }}
                            >
                              DD (Draw Draw){" "}
                            </a>
                            = จบครึ่งแรกต้องเสมอกัน
                            และเมื่อจบเกมการแข่งขันก็ต้องเสมอกัน เช่น
                            ครึ่งแรกเสมอกัน 1-1 จบเกมต้องเสมอกัน 1-1
                            หรือสกอร์อื่นเช่น 2-2 หรือ 3-3
                            <br />
                            <br />
                            <a
                              style={{
                                fontWeight: "bold",
                                color: "#ff00ff",
                              }}
                            >
                              DA (Draw Away){" "}
                            </a>
                            = จบครึ่งแรกต้องเสมอกัน
                            และเมื่อจบเกมการแข่งขันทีมเยือนต้องชนะ เช่น
                            ครึ่งแรกเสมอกัน 1-1 จบเกมทีมเยือนชนะ 1-2
                            <br />
                            <br />
                            <a
                              style={{
                                fontWeight: "bold",
                                color: "#ff00ff",
                              }}
                            >
                              AH (Away Home){" "}
                            </a>
                            = จบครึ่งแรกทีมเยือนชนะ
                            และเมื่อจบเกมการแข่งขันทีมเจ้าบ้านชนะ เช่น
                            ครึ่งแรกทีมเยือนนำ 0-1 จบเกมเจ้าบ้านกลับมาชนะ 2-1
                            <br />
                            <br />
                            <a
                              style={{
                                fontWeight: "bold",
                                color: "#ff00ff",
                              }}
                            >
                              AD (Away Draw){" "}
                            </a>
                            = จบครึ่งแรกทีมเยือนชนะ
                            และเมื่อจบการแข่งขันผลออกมาเสมอกัน เช่น
                            ครึ่งแรกทีมเยือนนำ 0-1 จบเกมการแข่งขันผลออกมาเสมอ
                            <br />
                            <br />
                            <a
                              style={{
                                fontWeight: "bold",
                                color: "#ff00ff",
                              }}
                            >
                              AA (Away Away){" "}
                            </a>
                            = จบครึ่งแรกทีมเยือนชนะ
                            และเมื่อการจบการแข่งขันทีมเยือนยังคงชน เช่น
                            ครึ่งแรกทีมเยือนนำ 0-1 จบเกมการแข่งขันทีมเยือนชนะ
                            <br />
                            <br />
                            <img
                              width="100%"
                              src="https://www.ufabetcn.com/wp-content/uploads/2019/12/ufabet-soccer-betting-09-768x509.jpg.webp"
                            />
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "#6ec1e4",
                              }}
                            >
                              วิธีพนันบอล Half Time/Full Time เว็บพนันบอล
                              ยูฟ่าเบท
                            </a>
                            <br />
                            <br />
                            แทงบอล แบบ First Goal/Last Goal
                            คือการแทงบอลว่าทีมไหนจะทำประตูเป็นทีมแรก
                            โดยจะมีให้ท่านลูกค้าได้เลือกสองฝั่ง
                            คือฝั่งเจ้าบ้านและฝั่งทีมเยือน
                            อัตราการจ่ายตัวคูณจะไม่เท่ากัน Last Goal คือ
                            ทีมไหนจะทำประตูเป็นทีมสุดท้าย
                            เช่นกันจะมีให้ท่านลูกค้าได้เลือกแทงทั้งฝั่งเจ้าบ้านและทีมเยือน
                            No Goal คือ ไม่มีการทำประตูระหว่างทั้งสองฝ่าย
                            <br />
                            <br />
                            ยกตัวอย่าง การแทงบอลในเว็บแทงบอลยฟ่าเบท
                            <br />
                            <br />
                            คู่ระหว่าง Celta Vigo – Real Valladolid
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "red",
                              }}
                            >
                              แทงช่องสีแดง
                            </a>
                            <br />
                            <br />
                            <a
                              style={{
                                fontWeight: "bold",
                                color: "#ff00ff",
                              }}
                            >
                              First Goal ทีมเจ้าบ้าน{" "}
                            </a>
                            = แทง 100 บาท เมื่อท่านชนะจะรับได้เงิน (100*1.5 =
                            150 บาท รวมทุน)
                            <br />
                            <br />
                            <a
                              style={{
                                fontWeight: "bold",
                                color: "#ff00ff",
                              }}
                            >
                              Last Goal ทีมเจ้าบ้าน{" "}
                            </a>
                            = แทง 100 บาท เมื่อท่านชนะจะได้รับเงิน (100*1.5 =
                            150 บาท รวมทุน)
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "green",
                              }}
                            >
                              แทงบอลช่องสีเขียว
                            </a>
                            <br />
                            <br />
                            <a
                              style={{
                                fontWeight: "bold",
                                color: "#ff00ff",
                              }}
                            >
                              First Goal ทีมเยือน{" "}
                            </a>
                            = แทง 100 บาท เมื่อท่านชนะจะรับได้เงิน (100*3.01 =
                            301 บาท รวมทุน)
                            <br />
                            <br />
                            <a
                              style={{
                                fontWeight: "bold",
                                color: "#ff00ff",
                              }}
                            >
                              Last Goal ทีมเยือน{" "}
                            </a>
                            = แทง 100 บาท เมื่อท่านชนะจะได้รับเงิน (100*3.01 =
                            301 บาท รวมทุน)
                            <br />
                            <br />
                            <a
                              style={{
                                fontWeight: "bold",
                                color: "#ff00ff",
                              }}
                            >
                              No Goal ไม่มีประตู{" "}
                            </a>
                            = แทง 100 บาท เมื่อท่านชนะจะได้รับเงิน (100*8.96 =
                            896 บาท รวมทุน)
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                              }}
                            >
                              คือการพนันบอลที่มีให้เลือกแบบง่ายๆ แค่สามแบบ คือ
                            </a>
                            <br />
                            <br />
                            <img
                              width="100%"
                              src="https://www.ufabetcn.com/wp-content/uploads/2019/12/ufabet-soccer-betting-10-768x398.jpg.webp"
                            />
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "#6ec1e4",
                              }}
                            >
                              แทงบอลออนไลน์ แทงบอลสเต็ป แทงบอลชุด
                            </a>
                            <br />
                            <br />
                            <a
                              style={{
                                color: "red",
                                fontWeight: "bold",
                              }}
                            >
                              Mix Parlay{" "}
                            </a>
                            หรือ
                            <a
                              style={{
                                color: "red",
                                fontWeight: "bold",
                              }}
                            >
                              บอลสเต็ป{" "}
                            </a>
                            หรือ
                            <a
                              style={{
                                color: "red",
                                fontWeight: "bold",
                              }}
                            >
                              บอลชุด{" "}
                            </a>
                            นั้นเอง ข้อดีของ UFABET
                            คือสามารถแทงบอลสเต็ปได้ขั้นต่ำแค่เพียง 2 คู่
                            และได้มากสุดถึง 12 คู่ หรือ 12 ชุด ด้วยกัน
                            โดยมีการเปิดอัตราต่อรองให้เล่นหลายประเภททั้งครึ่งแรกครึ่งหลัง
                            Over/Under และรูปแบบอื่นๆของการแทงบอลออนไลน์ทั่วๆไป
                            <br />
                            <br />
                            ราคาและอัตตราต่อรองที่เปิดสำหรับ Mix Parlay หรือ
                            บอลชุด หรือ บอลสเต็ป
                            <br />
                            <br />
                            <a
                              style={{
                                fontWeight: "bold",
                                color: "#ff00ff",
                              }}
                            >
                              FT HDP (Full Time Handicap){" "}
                            </a>
                            = อัตราต่อรองแต้มต่อแบบเต็มเวลา
                            <br />
                            <br />
                            <a
                              style={{
                                fontWeight: "bold",
                                color: "#ff00ff",
                              }}
                            >
                              FT O/U (Full Time Over&Under){" "}
                            </a>
                            = อัตราต่อรองสูงต่ำแบบเต็มเวลา
                            <br />
                            <br />
                            <a
                              style={{
                                fontWeight: "bold",
                                color: "#ff00ff",
                              }}
                            >
                              FT 1X2 (Full Time 1X2){" "}
                            </a>
                            = อัตราต่อรองให้เลือกฝั่ง แพ้ ชนะ เสมอ แบบเต็มเวลา
                            <br />
                            <br />
                            <a
                              style={{
                                fontWeight: "bold",
                                color: "#ff00ff",
                              }}
                            >
                              FT O/E (Full Time Odd&Even){" "}
                            </a>
                            = อัตราต่อรองแบบ ผลสกอร์ออกมาเป็น คี่หรือคู่
                            <br />
                            <br />
                            <a
                              style={{
                                fontWeight: "bold",
                                color: "#ff00ff",
                              }}
                            >
                              HDP (First Half Handicap){" "}
                            </a>
                            = อัตราต่อรองแต้มต่อแบบครึ่งเวลา
                            <br />
                            <br />
                            <a
                              style={{
                                fontWeight: "bold",
                                color: "#ff00ff",
                              }}
                            >
                              O/U (First Half Over&Under){" "}
                            </a>
                            = อัตราต่อรองสูงต่ำแบบครึ่งเวลา
                            <br />
                            <br />
                            <a
                              style={{
                                fontWeight: "bold",
                                color: "#ff00ff",
                              }}
                            >
                              1X2 (First Half 1X2){" "}
                            </a>
                            = อัตราต่อรองให้เลือกฝั่ง แพ้ ชนะ เสมอ แบบครึ่งเวลา
                            <br />
                            <br />
                            UFABET ให้ท่านลูกค้าเลือกราคาการแทงบอลออนไลน์เพียง 1
                            อย่าง จาก 7 อย่างที่เปิดมาเท่านั้น
                            จะไม่สามารถแทงหลายอัตราต่อรองภายในคู่เดียวกันได้
                            ทีนี้เรามาดูถึงอัตราการจ่ายเงินและจำนวนคู่ในการแทง
                            บอลสเต็ป หรือบอลชุดกัน
                            <br />
                            <br />
                            การแทงบอลแบบ Maximum มากสุดจำนวน 12 คู่
                            แทงขั้นต่ำได้ 10 บาท และ ไม่เกิน 400 บาท
                            (หรือถ้าท่านเป็นลูกค้ามือหนักต้องการความตื่นเต้นที่มากกว่านี้
                            สามารถติดต่อ Call Center
                            เพื่อเพิ่มวงเงินเดิมพันได้ทันทีค่ะ)
                            <br />
                            <br />
                            <img
                              width="100%"
                              src="https://www.ufabetcn.com/wp-content/uploads/2019/12/ufabet-soccer-betting-11-768x421.jpg.webp"
                            />
                            <br />
                            <br />
                            <a
                              style={{
                                color: "red",
                                fontWeight: "bold",
                              }}
                            >
                              Mix Parlay Combo{" "}
                            </a>
                            คือบอล สเต็ป หรือ บอลชุด
                            ที่มีกีฬาอื่นเปิดให้ท่านลูกค้าได้แทงด้วย
                            เช่นบาสเกตบอล ท่านสามารถเลือกที่จะเล่นทั้ง ฟุตบอล
                            และบาสเกตบอลในบิลเดียวกัน Mix Parlay
                            ปกตินั้นจะเปิดแค่ฟุตบอลให้แทงอย่างเดียว
                            <br />
                            <br />
                            <img
                              width="100%"
                              src="https://www.ufabetcn.com/wp-content/uploads/2019/12/ufabet-soccer-betting-12-768x447.jpg.webp"
                            />
                            <br />
                            <br />
                            <a
                              style={{
                                color: "red",
                                fontWeight: "bold",
                              }}
                            >
                              Outright{" "}
                            </a>
                            คือการแทงบอลว่าทีมที่คิดจะเป็นแชมป์ในลีคนั้นๆ
                            และในฤดูกาลนั้นๆ อัตราต่อรองที่ได้เปรียบที่สุด
                            หมายความว่าจะได้ตัวคูณมากที่สุดคือต้นฤดูกาลเพราะว่ายังไม่เห็นฟอร์มการเล่น
                            มากนัก แต่ถ้ามาถึงกลางฤดูกาลแล้ว
                            เห็นความชัดเจนแล้วอัตราตัวคูณจะน้อยลง
                            ยกตัวอย่างในรูป ถ้าเดิมพัน Manchester City เป็นแชมป์
                            ท่านจะได้ตัวคูน 3.80 เท่า สมมุติ แทง 10,000 บาท
                            ท่านจะได้รับเงิน 28,000 บาท (ไม่รวมทุน)
                            <br />
                            <br />
                            นับได้ว่าการแทงแบบ Outright เหมาะสำหรับแฟนบอลตัวยง
                            ไม่ค่อยจอบโจทย์นักเล่นสักเท่าไหรนัก
                            <br />
                            <br />
                            <br />
                            เห็นไหมค่ะว่าเวลาเพียง 5 นาทีทำให้นัก
                            <a
                              style={{
                                color: "gold",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              พนันบอล{" "}
                            </a>
                            ได้เข้าใจหลักการ
                            <a
                              style={{
                                color: "gold",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              แทงบอลออนไลน์{" "}
                            </a>
                            ของ
                            <a
                              style={{
                                color: "gold",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              ufabet{" "}
                            </a>
                            ได้อย่างถ่องแท้ และสามารถอ่านการเปิดราคาจากทาง
                            UFABET ได้เป็นอย่างดีอีกด้วย
                            ทางเราหวังว่าบทความนี้จะเป็นประโยชน์ต่อการ
                            <a
                              style={{
                                color: "gold",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              แทงบอล{" "}
                            </a>
                            และสามารถทำเงินให้ทุกๆท่านนะค่ะ
                            <br />
                            <br />
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

export default betball;
