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

const casino = () => {
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
                            สมัครคาสิโนออนไลน์ UFABET ยูฟ่าคาสิโน
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
                            ท่านที่สนใจ
                            <a style={{ color: "red", fontWeight: "bold" }}>
                              {" "}
                              สมัครคาสิโนออนไลน์{" "}
                            </a>
                            กับ UFABET TH ท่านสามารถแอดไลน์ @ufabet-th
                            เพื่อติดต่อแอดมินได้ตลอด 24 ชั่วโมง (
                            ช่องทางการสมัครที่รวดเร็วที่สุด ) หรือท่านอาจสามารถ{" "}
                            <a
                              href="https://lin.ee/9gF9r1T"
                              style={{
                                color: "whitesmoke",
                                fontWeight: "bold",
                              }}
                            >
                              สมัครสมาชิก UFABET{" "}
                            </a>
                            โดยกรอกรายละเอียดการสมัครผ่านทางหน้าเว็บไซต์
                            เพื่อเล่น ยูฟ่าคาสิโน
                            หรือคาสิโนระบบอื่นๆที่มีในระบบของยูฟ่าเบทได้เลย
                            เรายินดีอย่างยิ่งที่จะได้ดูแลท่านสมาชิกทุกท่านอย่างดีที่สุดดวยประสบการณ์ของทีมงานเรา
                            ที่คอยพัฒนามาโดยตลอด
                            และระบบอัตโนมัติที่ทันสมัยที่สุดที่สมาชิกไม่จำเป็นต้องแจ้งการโอนแม้แต่น้อย
                            ทำให้ท่านสามารถฝากเงินเครติตได้อย่างรวดเร็วและสามารถเล่นคาสิโนออนไลน์ได้อย่างต่อเนี่อง
                          </Label>
                        </Card>
                        <Card
                          style={{
                            border: "1px solid #555",
                            marginBottom: "10px",
                            marginTop: "10px",
                            backgroundColor: "black",
                          }}
                        >
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
                            5 เหตุผล ที่ควรเล่นคาสิโนออนไลน์ ได้เงินจริง
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
                            ปัจจุบันด้วยเทคโนโลยีที่เริ่มเข้ามามีบทบาทในชีวิตของเรามากขึ้น
                            ทำให้เราได้รับความสะดวกสบายมากขึ้น
                            หลายคนเริ่มใช้เทคโนโลยีเข้ามาช่วยในการสร้างรายได้ให้กับตัวเอง
                            ไม่เว้นแม้กระทั่งวงการของนักพนัน
                            ซึ่งปัจจุบันนี้จะเห็นได้ว่าเริ่มมี{" "}
                            <a style={{ color: "red", fontWeight: "bold" }}>
                              คาสิโนออนไลน์{" "}
                            </a>
                            เข้ามาให้บริการกันมากมาย เพราะด้วยความสะดวกสบายของ
                            คาสิโนออนไลน์ นั้น
                            ฉีกทุกฏของการเล่นการพนันในแบบเดิมๆ
                            โดยเฉพาะในเรื่องของความสะดวกสบายการเล่น
                            ที่ทำให้นักเล่นพนันทั่วไปเริ่มหันมาสนใจ
                            คาสิโนออนไลน์ เช่นเดียวกับ UFABETCN
                            ของเราที่มีข้อดีมากมายจนทำให้นักพนันทั่วไปเริ่มหันมาสนใจ
                            วันนี้เราจะมาเจาะลึกกันว่าคาสิโนออนไลน์นั้น
                            มีข้อดีอย่างไรบ้างถึงทำให้เป็นที่นิยมกันมากในหมู่นักเล่นในโลกปัจจุบัน
                            <br />
                            1.ความสะดวกสบาย คุณสามารถเล่น คาสิโนออนไลน์
                            ได้ทุกที่ทุกเวลา
                            เพียงแค่คุณมีอุปกรณ์ที่สามารถเชื่อมต่ออินเตอร์เนตได้
                            เช่น คอมพิวเตอร์ โน๊ตบุ๊ค สมาร์ทโฟน ต่างๆ
                            ซึ่งปัจจุบันไม่ใช่เรื่องยากที่ใครจะมีอุปกรณ์เหล่านี้
                            ซึ่งสามารถเข้าเล่นได้จาก
                            <a style={{ color: "red", fontWeight: "bold" }}>
                              {" "}
                              เว็บคาสิโน{" "}
                            </a>
                            หรือโหลดแอพพลิเคชั่นลงบนสมาร์ทโฟนของคุณเท่านั้น
                            คุณก็จะสามารถเล่นเกมส์ คาสิโนออนไลน์ ในรูปแบบต่างๆ
                            ซึ่งแต่ละเว็ปนั้นก็มีเกมส์มากมายให้คุณได้เลือกเล่นกันแบบ
                            24ชม.
                            ไม่ต้องเสียเวลาเดินทางไปเสาะหาเล่นตามคาสิโนแบบสมัยก่อน{" "}
                            <br />
                            <br />
                            2.ความเป็นส่วนตัว คุณสามารถเล่น คาสิโนออนไลน์
                            ได้อย่างเป็นส่วนตัวและมีสมาธิมากขึ้น
                            ในเรื่องของการเสี่ยงแล้วบางครั้งสมาธิก็มีความจำเป็นมาก
                            นักเล่นหลายท่านชอบความเป็นส่วนตัว
                            อาจจะด้วยความที่ไม่อยากให้คนใกล้ตัวหรือคนอื่นรู้
                            ด้วยเหตุผลด้านกฎหมาย หรือภาพลักษณ์
                            นักเล่นสามารถเล่นเกมส์ คาสิโนออนไลน์
                            ในที่ส่วนตัวเช่นในบ้าน คอนโด ที่พัก
                            หรือแม้แต่ในห้องน้ำก็ยังสามารถเล่นได้
                            นักเล่นที่ชอบความเป็นส่วนตัวถือว่า คาสิโนออนไลน์
                            เช่น UFABET
                            นั้นตอบโจทย์เรื่องความเป็นส่วนตัวได้อย่างดี
                            <br />
                            <br />
                            3.เกมส์ที่หลากหลายกว่า
                            ตามคาสิโนบบดั้งเดิมทั่วไปโดยเฉพาะในประเทศไทยนั้น
                            ส่วนหญ่จะมีข้อจำกัดในด้านความหลากหลายของเกมส์
                            ส่วนมากมีแค่ ไฮโล กำถั่ว ไพ่ หรือบางที่อาจจะมีตู้
                            สล๊อต ตู้ม้าแข่ง แต่ก็ยังถือว่าน้อยมากๆ
                            ถ้าเทียบกับเกมส์ใน คาสิโนออนไลน์ เช่นเดียวกับ
                            ยูฟ่าเบท ที่ได้รวบรวมเกมส์ต่างๆ กว่า 300 เกมส์
                            มาให้นักเล่นได้เพลิดเพลิน ไม่ซ้ำซาก จำเจ เช่น
                            บาคาร่า รูเล็ต เสือมังกร แบล็คแจ๊ค บาคาร่า ยิงปลา
                            และอื่นๆ อีกมากมาย รวมถึงตู้สล๊อตกว่า 200 รูปแบบ
                            และยังสามารถเลือกเดิมพันแบบถ่ายทอดสดได้อีกตลอด 24
                            ชม. ด้วย
                            <br />
                            <br />
                            4.โบนัส คาสิโนออนไลน์
                            ในปัจจุบันนั้นส่วนใหญ่จะมีโบนัสแจกให้ตั้งแต่เริ่มเล่นกันเลยทีเดียว
                            ไม่เหมือนกับคาสิโนทั่วไปที่อาจจะมีการแจกชิพอยู่บ้างหลังจากแลกชิพแต่ก็ถือว่าน้อยมาก
                            ถ้าเทียบกับ คาสิโนออนไลน์
                            และต้องเป็นคาสิโนที่ใหญ่จริงๆ ถึงจะมีแจก แต่ใน
                            คาสิโนออนไลน์ อย่าง ufabet
                            นั้นมีกิจกรรมแจกโบนัสกันตลอดทั้งเดือนทั้งปี
                            รวมไปจนถึงการคืนยอดเสีย มีกิจกรรมแจกทอง โบนัสฝาก
                            โบนัสชวนเพื่อมาเล่น
                            ซึ่งแน่นอนว่ามีประโยชน์ต่อการลงทุนของผู้เล่นมากขึ้นกว่าเดิม
                            <br />
                            <br />
                            5.การเข้าถึงสถิติและข้อมูลสำคัญ
                            สถิติคือข้อมูลที่มีความสำคัญมากสำหรับการตัดสินใจเล่น
                            หากผู้เล่นสามารถรู้ได้ว่า 10 เกมส์ที่ผ่านมานั้น
                            ออกผลอย่างไร นั้นย่อมดีกว่าที่จะไม่รู้อะไรเลยแน่นอน
                            เพราะจะทำให้การตัดสินใจนั้นมีแบบแผน ไม่สะเปะสะปะ
                            คาสิโนออนไลน์ นั้น
                            จะมีการบันทึกสถิติข้อมูลของผลต่างๆ
                            อยู่ตลอดเวลาเช่นเดียวกับ
                            <a style={{ color: "red", fontWeight: "bold" }}>
                              {" "}
                              ยูฟ่าคาสิโน{" "}
                            </a>
                            ที่จะมีบันทึกข้อมูลหรือสถิติต่างๆ ในทุกเกมส์เดิมพัน
                            ทำให้นักเล่นสามารถเดินสูตรที่รศึกษามาได้ง่ายขึ้น
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
                            สมัครคาสิโนออนไลน์ UFABET ยูฟ่าคาสิโน
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
                            ท่านที่สนใจ
                            <a style={{ color: "red", fontWeight: "bold" }}>
                              {" "}
                              สมัครคาสิโนออนไลน์{" "}
                            </a>
                            กับ UFABET TH ท่านสามารถแอดไลน์ @ufabet-th
                            เพื่อติดต่อแอดมินได้ตลอด 24 ชั่วโมง (
                            ช่องทางการสมัครที่รวดเร็วที่สุด ) หรือท่านอาจสามารถ{" "}
                            <a
                              href="https://lin.ee/9gF9r1T"
                              style={{
                                color: "whitesmoke",
                                fontWeight: "bold",
                              }}
                            >
                              สมัครสมาชิก UFABET{" "}
                            </a>
                            โดยกรอกรายละเอียดการสมัครผ่านทางหน้าเว็บไซต์
                            เพื่อเล่น ยูฟ่าคาสิโน
                            หรือคาสิโนระบบอื่นๆที่มีในระบบของยูฟ่าเบทได้เลย
                            เรายินดีอย่างยิ่งที่จะได้ดูแลท่านสมาชิกทุกท่านอย่างดีที่สุดดวยประสบการณ์ของทีมงานเรา
                            ที่คอยพัฒนามาโดยตลอด
                            และระบบอัตโนมัติที่ทันสมัยที่สุดที่สมาชิกไม่จำเป็นต้องแจ้งการโอนแม้แต่น้อย
                            ทำให้ท่านสามารถฝากเงินเครติตได้อย่างรวดเร็วและสามารถเล่นคาสิโนออนไลน์ได้อย่างต่อเนี่อง
                          </Label>
                        </Card>
                        <Card
                          style={{
                            border: "1px solid #555",
                            marginBottom: "10px",
                            marginTop: "10px",
                            backgroundColor: "black",
                          }}
                        >
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
                            5 เหตุผล ที่ควรเล่นคาสิโนออนไลน์ ได้เงินจริง
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
                            ปัจจุบันด้วยเทคโนโลยีที่เริ่มเข้ามามีบทบาทในชีวิตของเรามากขึ้น
                            ทำให้เราได้รับความสะดวกสบายมากขึ้น
                            หลายคนเริ่มใช้เทคโนโลยีเข้ามาช่วยในการสร้างรายได้ให้กับตัวเอง
                            ไม่เว้นแม้กระทั่งวงการของนักพนัน
                            ซึ่งปัจจุบันนี้จะเห็นได้ว่าเริ่มมี{" "}
                            <a style={{ color: "red", fontWeight: "bold" }}>
                              คาสิโนออนไลน์{" "}
                            </a>
                            เข้ามาให้บริการกันมากมาย เพราะด้วยความสะดวกสบายของ
                            คาสิโนออนไลน์ นั้น
                            ฉีกทุกฏของการเล่นการพนันในแบบเดิมๆ
                            โดยเฉพาะในเรื่องของความสะดวกสบายการเล่น
                            ที่ทำให้นักเล่นพนันทั่วไปเริ่มหันมาสนใจ
                            คาสิโนออนไลน์ เช่นเดียวกับ UFABETCN
                            ของเราที่มีข้อดีมากมายจนทำให้นักพนันทั่วไปเริ่มหันมาสนใจ
                            วันนี้เราจะมาเจาะลึกกันว่าคาสิโนออนไลน์นั้น
                            มีข้อดีอย่างไรบ้างถึงทำให้เป็นที่นิยมกันมากในหมู่นักเล่นในโลกปัจจุบัน
                            <br />
                            1.ความสะดวกสบาย คุณสามารถเล่น คาสิโนออนไลน์
                            ได้ทุกที่ทุกเวลา
                            เพียงแค่คุณมีอุปกรณ์ที่สามารถเชื่อมต่ออินเตอร์เนตได้
                            เช่น คอมพิวเตอร์ โน๊ตบุ๊ค สมาร์ทโฟน ต่างๆ
                            ซึ่งปัจจุบันไม่ใช่เรื่องยากที่ใครจะมีอุปกรณ์เหล่านี้
                            ซึ่งสามารถเข้าเล่นได้จาก
                            <a style={{ color: "red", fontWeight: "bold" }}>
                              {" "}
                              เว็บคาสิโน{" "}
                            </a>
                            หรือโหลดแอพพลิเคชั่นลงบนสมาร์ทโฟนของคุณเท่านั้น
                            คุณก็จะสามารถเล่นเกมส์ คาสิโนออนไลน์ ในรูปแบบต่างๆ
                            ซึ่งแต่ละเว็ปนั้นก็มีเกมส์มากมายให้คุณได้เลือกเล่นกันแบบ
                            24ชม.
                            ไม่ต้องเสียเวลาเดินทางไปเสาะหาเล่นตามคาสิโนแบบสมัยก่อน{" "}
                            <br />
                            <br />
                            2.ความเป็นส่วนตัว คุณสามารถเล่น คาสิโนออนไลน์
                            ได้อย่างเป็นส่วนตัวและมีสมาธิมากขึ้น
                            ในเรื่องของการเสี่ยงแล้วบางครั้งสมาธิก็มีความจำเป็นมาก
                            นักเล่นหลายท่านชอบความเป็นส่วนตัว
                            อาจจะด้วยความที่ไม่อยากให้คนใกล้ตัวหรือคนอื่นรู้
                            ด้วยเหตุผลด้านกฎหมาย หรือภาพลักษณ์
                            นักเล่นสามารถเล่นเกมส์ คาสิโนออนไลน์
                            ในที่ส่วนตัวเช่นในบ้าน คอนโด ที่พัก
                            หรือแม้แต่ในห้องน้ำก็ยังสามารถเล่นได้
                            นักเล่นที่ชอบความเป็นส่วนตัวถือว่า คาสิโนออนไลน์
                            เช่น UFABET
                            นั้นตอบโจทย์เรื่องความเป็นส่วนตัวได้อย่างดี
                            <br />
                            <br />
                            3.เกมส์ที่หลากหลายกว่า
                            ตามคาสิโนบบดั้งเดิมทั่วไปโดยเฉพาะในประเทศไทยนั้น
                            ส่วนหญ่จะมีข้อจำกัดในด้านความหลากหลายของเกมส์
                            ส่วนมากมีแค่ ไฮโล กำถั่ว ไพ่ หรือบางที่อาจจะมีตู้
                            สล๊อต ตู้ม้าแข่ง แต่ก็ยังถือว่าน้อยมากๆ
                            ถ้าเทียบกับเกมส์ใน คาสิโนออนไลน์ เช่นเดียวกับ
                            ยูฟ่าเบท ที่ได้รวบรวมเกมส์ต่างๆ กว่า 300 เกมส์
                            มาให้นักเล่นได้เพลิดเพลิน ไม่ซ้ำซาก จำเจ เช่น
                            บาคาร่า รูเล็ต เสือมังกร แบล็คแจ๊ค บาคาร่า ยิงปลา
                            และอื่นๆ อีกมากมาย รวมถึงตู้สล๊อตกว่า 200 รูปแบบ
                            และยังสามารถเลือกเดิมพันแบบถ่ายทอดสดได้อีกตลอด 24
                            ชม. ด้วย
                            <br />
                            <br />
                            4.โบนัส คาสิโนออนไลน์
                            ในปัจจุบันนั้นส่วนใหญ่จะมีโบนัสแจกให้ตั้งแต่เริ่มเล่นกันเลยทีเดียว
                            ไม่เหมือนกับคาสิโนทั่วไปที่อาจจะมีการแจกชิพอยู่บ้างหลังจากแลกชิพแต่ก็ถือว่าน้อยมาก
                            ถ้าเทียบกับ คาสิโนออนไลน์
                            และต้องเป็นคาสิโนที่ใหญ่จริงๆ ถึงจะมีแจก แต่ใน
                            คาสิโนออนไลน์ อย่าง ufabet
                            นั้นมีกิจกรรมแจกโบนัสกันตลอดทั้งเดือนทั้งปี
                            รวมไปจนถึงการคืนยอดเสีย มีกิจกรรมแจกทอง โบนัสฝาก
                            โบนัสชวนเพื่อมาเล่น
                            ซึ่งแน่นอนว่ามีประโยชน์ต่อการลงทุนของผู้เล่นมากขึ้นกว่าเดิม
                            <br />
                            <br />
                            5.การเข้าถึงสถิติและข้อมูลสำคัญ
                            สถิติคือข้อมูลที่มีความสำคัญมากสำหรับการตัดสินใจเล่น
                            หากผู้เล่นสามารถรู้ได้ว่า 10 เกมส์ที่ผ่านมานั้น
                            ออกผลอย่างไร นั้นย่อมดีกว่าที่จะไม่รู้อะไรเลยแน่นอน
                            เพราะจะทำให้การตัดสินใจนั้นมีแบบแผน ไม่สะเปะสะปะ
                            คาสิโนออนไลน์ นั้น
                            จะมีการบันทึกสถิติข้อมูลของผลต่างๆ
                            อยู่ตลอดเวลาเช่นเดียวกับ
                            <a style={{ color: "red", fontWeight: "bold" }}>
                              {" "}
                              ยูฟ่าคาสิโน{" "}
                            </a>
                            ที่จะมีบันทึกข้อมูลหรือสถิติต่างๆ ในทุกเกมส์เดิมพัน
                            ทำให้นักเล่นสามารถเดินสูตรที่รศึกษามาได้ง่ายขึ้น
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

export default casino;
