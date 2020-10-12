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

const slot = () => {
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
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "black",
                              }}
                            >
                              สล็อต ออนไลน์ UFABET สมัครสล็อต วิธีเล่นสล็อต
                              และสูตรการเล่นสล็อต
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
                            สล็อตออนไลน์ Ufabet เล่นง่าย ทำกำไรสุดคุ้ม
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
                            <a style={{ color: "gold", fontWeight: "bold" }}>
                              {" "}
                              สล็อต{" "}
                            </a>{" "}
                            คือ
                            <a style={{ color: "gold", fontWeight: "bold" }}>
                              {" "}
                              เกมคาสิโน{" "}
                            </a>
                            ที่มีรูปแบบการเล่นที่เข้าใจง่ายและให้ความเพลิดเพลิน
                            ถือเป็นเกมแรกๆที่นักพนันส่วนใหญ่ที่เล่นในกล้าเข้ามาลองเล่นโดยไม่รู้สึกกังวล
                            ทุกวันนี้มีเกมสล็อตออนไลน์ในให้เลือกเล่นนับพันเกมเป็นโอกาสดีสำหรับคนชอบลุ้นเสี่ยงโชคที่ใช้ประสบการณ์ความชำนาญ
                            ไม่ต้องใช้ทักษะมากเท่ากับเกมพนันประเภทอื่น
                            <br />
                            <br />
                            <a>
                              <img
                                src="https://www.ufabetcn.com/wp-content/uploads/2019/10/Slot-01.jpg.webp"
                                style={{
                                  width: "100%",
                                }}
                              ></img>
                            </a>
                            <br />
                            <br />
                            มีทั้งสล็อตคลาสสิกแบบ 3 วงล้อ, สล็อต 5 วงล้อ,
                            สล็อตแจกรางวัลแจ็กพอตโปรเกรสซีฟ
                            และสล็อตรูปแบบอื่นที่พัฒนาสร้างสรรค์เพื่อนำเสนอความหลากหลายและให้ความเพลิดเพลินกับผู้เล่นและทำกำไรมากที่สุดเท่าที่เป็นไปได้
                            <br />
                            <br />
                            <a>
                              <img
                                src="https://www.ufabetcn.com/wp-content/uploads/2019/10/Slot-Machine-02.jpg.webp"
                                style={{
                                  width: "100%",
                                }}
                              ></img>
                            </a>
                            <br />
                            <br />
                            ก่อนเดิมพันเกมสล็อตควรเรียนรู้
                            <a style={{ color: "gold", fontWeight: "bold" }}>
                              {" "}
                              กฎกติกาและวิธีการเล่นสล๊อต{" "}
                            </a>
                            แต่ละเกมมีรายละเอียดแตกต่างกันไป
                            ขึ้นอยู่กับโครงสร้าง รวมทั้งฟีเจอร์โบนัสด้วย
                            ซึ่งมีทั้งเกมระดับพื้นฐานเล่นได้เงินเร็ว
                            และเกมซับซ้อนที่เล่นได้นานและทำกำไรหลายเท่าตัวของเงินเดิมพัน
                            ผู้สนใจสามารถอ่านรีวิวของเกมได้ในเว็บพนันชั้นนำ
                            หากมีข้อสงสัยอาจขอคำแนะนำจากเจ้าหน้าที่ของเว็บไซต์
                            <a style={{ color: "gold", fontWeight: "bold" }}>
                              {" "}
                              UFABET-GOLD{" "}
                            </a>{" "}
                            รวมทั้งกูรูในเว็บบอร์ดต่าง ๆ
                            ช่วยให้เข้าใจวิธีการเล่น
                            ตลอดจนเทคนิคการเอาชนะให้ได้กำไรมากขึ้น
                            ยิ่งมีประสบการณ์กับเกมมากเท่าไร
                            ยิ่งมีโอกาสเลือกเกมที่ถูกโฉลกและทำกำไรได้มากขึ้นเท่านั้น
                            <br />
                            <a>
                              <img
                                src="https://www.ufabetcn.com/wp-content/uploads/2019/10/Slot-Online-03.jpg.webp"
                                style={{
                                  width: "100%",
                                }}
                              ></img>
                            </a>
                            <br />
                            <br />
                            <span
                              style={{
                                fontFamily: "Mitr",
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "#d6b318",
                              }}
                            >
                              สล็อตออนไลน์ Ufabet เล่นง่าย ทำกำไรสุดคุ้ม
                            </span>
                            <br />
                            <br />
                            เว็บคาสิโนออนไลน์ UFABET ให้บริการ
                            <a style={{ color: "gold", fontWeight: "bold" }}>
                              {" "}
                              เกมสล็อตออนไลน์{" "}
                            </a>{" "}
                            เป็นเกมมาตรฐานที่เล่นง่าย โดยทั่วไปแบ่งออกเป็นสล็อต
                            3 วงล้อและสล็อต 5 วงล้อ
                            เริ่มต้นด้วยเกมเล่นง่ายที่สุดนั่นคือสล็อต 3
                            วงล้อที่มีเพย์ไลน์เดียว หมายถึงมีช่องจ่ายรางวัลเดียว
                            มีสัญลักษณ์บนวงล้อไม่มาก
                            ช่วยให้ผู้เล่นเข้าใจกฎพื้นฐานอย่างรวดเร็ว
                            สมัยก่อนมีคันโยกสำหรับดึงเพื่อให้วงล้อหมุน
                            ที่มักเรียกกันว่า
                            <a style={{ color: "gold", fontWeight: "bold" }}>
                              {" "}
                              สล็อต แมชชีน{" "}
                            </a>{" "}
                            แต่ทุกวันนี้แค่แตะบนหน้าจอมือถือก็เท่ากับกดปุ่มเล่นแล้ว
                            ยูฟ่าเบทมีระบบเดิมพันบนมือถือผู้เล่นสามารถเล่นเกมสล๊อตออนไลน์ในหมวดคาสิโนออนไลน์ได้ทุกที่ทุกเวลา
                            ทำให้เกมเล่นง่ายมากขึ้น
                            หยิบสมาร์ทโฟนและอุปกรณ์มือถือขึ้นมากดเล่นเกมสล็อตได้ทุกที่ทุกเวลา
                            <br />
                            <br />
                            สำหรับเกมสล็อต 5 วงล้อและแบบอื่น ๆ
                            มีวิธีการเล่นเกมสล๊อตบนมือถือไม่ต่างกัน
                            เพียงแต่เพิ่มความซับซ้อนตรงที่เพิ่มสัญลักษณ์พิเศษช่วยให้มีโอกาสชนะรางวัลมากขึ้น
                            เช่น เครื่องหมายเสรี เครื่องหมายกระจาย
                            รวมทั้งมีฟีเจอร์โบนัสที่เล่นได้สนุกและรับรางวัลตอบแทนมากขึ้น
                            มีทั้งฟรีสปิน ตัวคูณเงินเดิมพัน และเกมทายไพ่
                            การฝึกฝนเล่นบ่อย ๆ
                            จะเพิ่มโอกาสชนะรางวัลและทำกำไรสูงทีเดียว
                            <br />
                            <br />
                            <br />
                            <a>
                              <img
                                src="https://www.ufabetcn.com/wp-content/uploads/2019/10/Game-Slot-04-1024x589.jpg.webp"
                                style={{
                                  width: "100%",
                                }}
                              ></img>
                            </a>
                            <br />
                            <br />
                            <br />
                            <span
                              style={{
                                marginTop: "5px",
                                marginBottom: "5px",
                                fontFamily: "Mitr",
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "#d6b318",
                              }}
                            >
                              ขั้นตอนวิธีการเล่นสล็อต บนคาสิโนออนไลน์ยูฟ่าเบท
                            </span>
                            <br />
                            เกมสล็อตในแต่ละเว็บมีให้เลือกนับร้อยเกม
                            ด้วยประเภทและวิธีการเล่นที่แตกต่างกัน
                            ผู้เล่นควรทำความเข้าใจพื้นฐานของเกมก่อน ทั้งวงล้อ,
                            ช่องจ่ายเงิน, สัญลักษณ์และเกมโบนัส
                            เริ่มต้นด้วยการเรียนรู้ว่า เพย์ไลน์คืออะไร
                            หมายถึงจำนวนช่องจ่ายเงินในเกมสล็อต
                            หรือเส้นที่กำหนดว่าจะจ่ายเงินรางวัลอะไรบ้าง
                            สล็อตส่วนใหญ่มักจะมีช่องจ่ายเงินระหว่าง 9 ถึง 30
                            หากคุณเลือกเกมสล็อตที่มี 25 เพย์ไลน์
                            หมายถึงมีช่องทางให้ชนะรางวัล 25 ช่อง
                            จะเรียงสัญลักษณ์เป็นแนวตรง แนวทแยงมุม
                            และคดเคี้ยวไปมาบนวงล้อก็ได้
                            <br />
                            <br />
                            <a>
                              <img
                                src="https://www.ufabetcn.com/wp-content/uploads/2019/10/How-To-Play-Slot-05-1024x654.jpg.webp"
                                style={{
                                  width: "100%",
                                }}
                              ></img>
                            </a>
                            <br />
                            <br />
                            วิธีการเดิมพันทำตามขั้นตอนต่อไปนี้
                            <br />
                            <br />
                            1.วิธีการเล่นสล็อตเริ่มจากใส่ยูสเซอร์เนมและพาสเวิร์ดเข้าสู่ระบบของเว็บพนัน
                            เลือกเข้าเมนูเกมสล็อต
                            <br />
                            <br />
                            2.เลือกเกมที่ต้องการเล่นในเว็บไซต์ 3.กดปุ่ม Select
                            Lines เพื่อเลือกเพย์ไลน์ในเกม
                            <br />
                            <br />
                            4.จากนั้นจึงเลือกจำนวนเงินเดิมพันด้วยการกดปุ่ม
                            Select Coins
                            <br />
                            <br />
                            5.ตั้งค่าเรียบร้อยแล้วกดปุ่ม Spin
                            เพื่อให้วงล้อเริ่มหมุน
                            <br />
                            <br />
                            6.หลังจากวงล้อหยุดหมุน
                            เห็นรูปภาพเหมือนกันเรียงจากซ้ายไปขวาเป็นแนวตรงหรือแนวทแยงก็ได้
                            จะสร้างรูปแบบชนะได้สำเร็จ
                            ดูผลตอบแทนได้จากตารางการจ่ายรางวัล
                            <br />
                            <a>
                              <img
                                src="https://www.ufabetcn.com/wp-content/uploads/2019/10/How-To-Calculate-Slot-06-1024x568.jpg.webp"
                                style={{
                                  width: "100%",
                                }}
                              ></img>
                            </a>
                            <br />
                            <br />
                            หากคุณเดิมพันช่องจ่ายเงิน 10 ช่อง จะเล่นอย่างน้อย 10
                            เหรียญต่อรอบ เท่ากับว่ามีจำนวนเงินเดิมพันรอบนั้น 100
                            เหรียญ ทำให้มีต้นทุนต่อการหมุนสูงขึ้น
                            การเลือกเพย์ไลน์มากและจำนวนเงินเดิมพันสูงสุดจะมีโอกาสได้เงินรางวัลมากที่สุด
                            ผู้เล่นสามารถคำนวณเงินเดิมพันในแต่ละรอบได้จากเพย์ไลน์และเงินเดิมพัน
                            ช่วยให้ควบคุมงบประมาณการลงทุนได้ง่ายขึ้นนั่นเอง
                            <br />
                            <br />
                            <br />
                            <a>
                              <img
                                src="https://www.ufabetcn.com/wp-content/uploads/2019/10/So-Much-Sushi-Slot-07.jpg.webp"
                                style={{
                                  width: "100%",
                                }}
                              ></img>
                            </a>
                            <br />
                            <span
                              style={{
                                marginTop: "5px",
                                marginBottom: "5px",
                                fontFamily: "Mitr",
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "#d6b318",
                              }}
                            >
                              แนะนำเกมสล็อตออนไลน์ So Much Sushi
                            </span>
                            <br />
                            <br />
                            เกมสล็อตชื่อว่า So Much Sushi
                            เป็นผลงานของค่ายพัฒนาซอฟต์แวร์เกมชื่อดัง Microgaming
                            มีโครงสร้าง 5 วงล้อ 3 แถว จำนวนช่องจ่ายเงิน 25
                            เพย์ไลน์ ดีไซน์วงล้อเกมเป็นรูปโต๊ะอาหาร
                            มีเมนูซูชิหน้าเนื้อสัตว์ต่าง ๆ ปรากฏบนวงล้อ ถือว่า
                            So Much Sushi
                            เป็นตัวอย่างเกมสล็อตพื้นฐานที่เข้าใจง่าย
                            ต้องพิจารณาสัญลักษณ์จ่ายรางวัลสูงและฟีเจอร์โบนัสต่าง
                            ๆ สัญลักษณ์สำคัญคือโลโก้เกม So Much Sushi
                            เป็นสัญลักษณ์เครื่องหมายเสรี (Wild)
                            ที่ใช้เปลี่ยนรูปภาพอื่นบนวงล้อแล้วแทนด้วยรูปข้างเคียงเพื่อให้มีรูปเดียวกันเรียงติดต่อเพื่อชนะรางวัล
                            <br />
                            <br />
                            ส่วนรูปขวดซอส (Scatter)
                            เป็นเครื่องหมายกระจายที่จะเป็นประตูเปิดเข้าสู่เกมโบนัส
                            ให้เล่นสะสมรางวัลมากขึ้น
                            เมื่อพบสัญลักษณ์รูปซอสตั้งแต่ 3
                            รูปขึ้นไปจะเปิดเข้าสู่โบนัสฟรีสปิน
                            ให้ผู้เล่นเลือกซูชิเพื่อลุ้นรับจำนวนฟรีสปิน
                            ผู้เล่นจะได้รับรางวัลฟรีสปินมากถึง 16 รอบ
                            ระหว่างหมุนฟรีถ้าพบรูปขวดซอส 3
                            รูปขึ้นไปจะเรียกใช้โบนัสนี้ได้อีกครั้ง
                            สามารถทำกำไรได้มากทีเดียว
                            <br />
                            <br />
                            ผู้สนใจอยากทดลองเล่นเกมสล็อตออนไลน์
                            ลองเข้าเล่นเกมง่าย ๆ ก่อน เกม 3
                            วงล้อมีต้นทุนค่าใช้จ่ายเพียงเล็กน้อยและหมุนวงล้ออย่างตรงไปตรงมา
                            ไม่มีขั้นตอนยุ่งยาก
                            แต่เกมยุคใหม่ยังเพิ่มสัญลักษณ์เครื่องหมายเสรีมาเป็นตัวช่วยให้ทำกำไรมากขึ้น
                            เมื่อผู้เล่นมีประสบการณ์พอตัวแล้ว ขยับมาเล่นเกม 5
                            วงล้อที่มีรางวัลมากกว่า และวิธีการเล่นซับซ้อนกว่า
                            บางเกมสามารถดาวน์โหลดจากเว็บไซต์มาลองเล่นได้ฟรี
                            เมื่อคุ้นเคยกับโครงสร้างเกมนั้นแล้วค่อยเดิมพันด้วยเงินจริง
                            สามารถเข้าเล่นผ่านสมาร์ทโฟน แท็บเล็ต
                            และอุปกรณ์มือถืออื่น ๆ ได้ตลอด 24 ชั่วโมง
                            <br />
                            <br />
                            หากท่านสนใจการเดิมพันสล๊อต ท่านสามารถ
                            <a
                              href="https://lin.ee/9gF9r1T"
                              style={{
                                color: "whitesmoke",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              สมัคร Ufabet{" "}
                            </a>
                            เพื่อเล่นเกมสล๊อตออนไลน์ โดยการดูแลของ ufabetcn
                            เว็บพนันออนไลน์ จากบริแม่ ufabet.com โดยตรง
                            ท่านสามารถแอด ไลน์{" "}
                            <a
                              href="https://lin.ee/9gF9r1T"
                              style={{
                                color: "whitesmoke",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              @GOLD28{" "}
                            </a>
                            เพื่อติดต่อสอบถามได้เลย
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
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "black",
                              }}
                            >
                              สล็อต ออนไลน์ UFABET สมัครสล็อต วิธีเล่นสล็อต
                              และสูตรการเล่นสล็อต
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
                            สล็อตออนไลน์ Ufabet เล่นง่าย ทำกำไรสุดคุ้ม
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
                            <a style={{ color: "gold", fontWeight: "bold" }}>
                              {" "}
                              สล็อต{" "}
                            </a>{" "}
                            คือ
                            <a style={{ color: "gold", fontWeight: "bold" }}>
                              {" "}
                              เกมคาสิโน{" "}
                            </a>
                            ที่มีรูปแบบการเล่นที่เข้าใจง่ายและให้ความเพลิดเพลิน
                            ถือเป็นเกมแรกๆที่นักพนันส่วนใหญ่ที่เล่นในกล้าเข้ามาลองเล่นโดยไม่รู้สึกกังวล
                            ทุกวันนี้มีเกมสล็อตออนไลน์ในให้เลือกเล่นนับพันเกมเป็นโอกาสดีสำหรับคนชอบลุ้นเสี่ยงโชคที่ใช้ประสบการณ์ความชำนาญ
                            ไม่ต้องใช้ทักษะมากเท่ากับเกมพนันประเภทอื่น
                            <br />
                            <br />
                            <a>
                              <img
                                src="https://www.ufabetcn.com/wp-content/uploads/2019/10/Slot-01.jpg.webp"
                                style={{
                                  width: "100%",
                                }}
                              ></img>
                            </a>
                            <br />
                            <br />
                            มีทั้งสล็อตคลาสสิกแบบ 3 วงล้อ, สล็อต 5 วงล้อ,
                            สล็อตแจกรางวัลแจ็กพอตโปรเกรสซีฟ
                            และสล็อตรูปแบบอื่นที่พัฒนาสร้างสรรค์เพื่อนำเสนอความหลากหลายและให้ความเพลิดเพลินกับผู้เล่นและทำกำไรมากที่สุดเท่าที่เป็นไปได้
                            <br />
                            <br />
                            <a>
                              <img
                                src="https://www.ufabetcn.com/wp-content/uploads/2019/10/Slot-Machine-02.jpg.webp"
                                style={{
                                  width: "100%",
                                }}
                              ></img>
                            </a>
                            <br />
                            <br />
                            ก่อนเดิมพันเกมสล็อตควรเรียนรู้
                            <a style={{ color: "gold", fontWeight: "bold" }}>
                              {" "}
                              กฎกติกาและวิธีการเล่นสล๊อต{" "}
                            </a>
                            แต่ละเกมมีรายละเอียดแตกต่างกันไป
                            ขึ้นอยู่กับโครงสร้าง รวมทั้งฟีเจอร์โบนัสด้วย
                            ซึ่งมีทั้งเกมระดับพื้นฐานเล่นได้เงินเร็ว
                            และเกมซับซ้อนที่เล่นได้นานและทำกำไรหลายเท่าตัวของเงินเดิมพัน
                            ผู้สนใจสามารถอ่านรีวิวของเกมได้ในเว็บพนันชั้นนำ
                            หากมีข้อสงสัยอาจขอคำแนะนำจากเจ้าหน้าที่ของเว็บไซต์
                            <a style={{ color: "gold", fontWeight: "bold" }}>
                              {" "}
                              UFABET-GOLD{" "}
                            </a>{" "}
                            รวมทั้งกูรูในเว็บบอร์ดต่าง ๆ
                            ช่วยให้เข้าใจวิธีการเล่น
                            ตลอดจนเทคนิคการเอาชนะให้ได้กำไรมากขึ้น
                            ยิ่งมีประสบการณ์กับเกมมากเท่าไร
                            ยิ่งมีโอกาสเลือกเกมที่ถูกโฉลกและทำกำไรได้มากขึ้นเท่านั้น
                            <br />
                            <a>
                              <img
                                src="https://www.ufabetcn.com/wp-content/uploads/2019/10/Slot-Online-03.jpg.webp"
                                style={{
                                  width: "100%",
                                }}
                              ></img>
                            </a>
                            <br />
                            <br />
                            <span
                              style={{
                                fontFamily: "Mitr",
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "#d6b318",
                              }}
                            >
                              สล็อตออนไลน์ Ufabet เล่นง่าย ทำกำไรสุดคุ้ม
                            </span>
                            <br />
                            <br />
                            เว็บคาสิโนออนไลน์ UFABET ให้บริการ
                            <a style={{ color: "gold", fontWeight: "bold" }}>
                              {" "}
                              เกมสล็อตออนไลน์{" "}
                            </a>{" "}
                            เป็นเกมมาตรฐานที่เล่นง่าย โดยทั่วไปแบ่งออกเป็นสล็อต
                            3 วงล้อและสล็อต 5 วงล้อ
                            เริ่มต้นด้วยเกมเล่นง่ายที่สุดนั่นคือสล็อต 3
                            วงล้อที่มีเพย์ไลน์เดียว หมายถึงมีช่องจ่ายรางวัลเดียว
                            มีสัญลักษณ์บนวงล้อไม่มาก
                            ช่วยให้ผู้เล่นเข้าใจกฎพื้นฐานอย่างรวดเร็ว
                            สมัยก่อนมีคันโยกสำหรับดึงเพื่อให้วงล้อหมุน
                            ที่มักเรียกกันว่า
                            <a style={{ color: "gold", fontWeight: "bold" }}>
                              {" "}
                              สล็อต แมชชีน{" "}
                            </a>{" "}
                            แต่ทุกวันนี้แค่แตะบนหน้าจอมือถือก็เท่ากับกดปุ่มเล่นแล้ว
                            ยูฟ่าเบทมีระบบเดิมพันบนมือถือผู้เล่นสามารถเล่นเกมสล๊อตออนไลน์ในหมวดคาสิโนออนไลน์ได้ทุกที่ทุกเวลา
                            ทำให้เกมเล่นง่ายมากขึ้น
                            หยิบสมาร์ทโฟนและอุปกรณ์มือถือขึ้นมากดเล่นเกมสล็อตได้ทุกที่ทุกเวลา
                            <br />
                            <br />
                            สำหรับเกมสล็อต 5 วงล้อและแบบอื่น ๆ
                            มีวิธีการเล่นเกมสล๊อตบนมือถือไม่ต่างกัน
                            เพียงแต่เพิ่มความซับซ้อนตรงที่เพิ่มสัญลักษณ์พิเศษช่วยให้มีโอกาสชนะรางวัลมากขึ้น
                            เช่น เครื่องหมายเสรี เครื่องหมายกระจาย
                            รวมทั้งมีฟีเจอร์โบนัสที่เล่นได้สนุกและรับรางวัลตอบแทนมากขึ้น
                            มีทั้งฟรีสปิน ตัวคูณเงินเดิมพัน และเกมทายไพ่
                            การฝึกฝนเล่นบ่อย ๆ
                            จะเพิ่มโอกาสชนะรางวัลและทำกำไรสูงทีเดียว
                            <br />
                            <br />
                            <br />
                            <a>
                              <img
                                src="https://www.ufabetcn.com/wp-content/uploads/2019/10/Game-Slot-04-1024x589.jpg.webp"
                                style={{
                                  width: "100%",
                                }}
                              ></img>
                            </a>
                            <br />
                            <br />
                            <br />
                            <span
                              style={{
                                marginTop: "5px",
                                marginBottom: "5px",
                                fontFamily: "Mitr",
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "#d6b318",
                              }}
                            >
                              ขั้นตอนวิธีการเล่นสล็อต บนคาสิโนออนไลน์ยูฟ่าเบท
                            </span>
                            <br />
                            เกมสล็อตในแต่ละเว็บมีให้เลือกนับร้อยเกม
                            ด้วยประเภทและวิธีการเล่นที่แตกต่างกัน
                            ผู้เล่นควรทำความเข้าใจพื้นฐานของเกมก่อน ทั้งวงล้อ,
                            ช่องจ่ายเงิน, สัญลักษณ์และเกมโบนัส
                            เริ่มต้นด้วยการเรียนรู้ว่า เพย์ไลน์คืออะไร
                            หมายถึงจำนวนช่องจ่ายเงินในเกมสล็อต
                            หรือเส้นที่กำหนดว่าจะจ่ายเงินรางวัลอะไรบ้าง
                            สล็อตส่วนใหญ่มักจะมีช่องจ่ายเงินระหว่าง 9 ถึง 30
                            หากคุณเลือกเกมสล็อตที่มี 25 เพย์ไลน์
                            หมายถึงมีช่องทางให้ชนะรางวัล 25 ช่อง
                            จะเรียงสัญลักษณ์เป็นแนวตรง แนวทแยงมุม
                            และคดเคี้ยวไปมาบนวงล้อก็ได้
                            <br />
                            <br />
                            <a>
                              <img
                                src="https://www.ufabetcn.com/wp-content/uploads/2019/10/How-To-Play-Slot-05-1024x654.jpg.webp"
                                style={{
                                  width: "100%",
                                }}
                              ></img>
                            </a>
                            <br />
                            <br />
                            วิธีการเดิมพันทำตามขั้นตอนต่อไปนี้
                            <br />
                            <br />
                            1.วิธีการเล่นสล็อตเริ่มจากใส่ยูสเซอร์เนมและพาสเวิร์ดเข้าสู่ระบบของเว็บพนัน
                            เลือกเข้าเมนูเกมสล็อต
                            <br />
                            <br />
                            2.เลือกเกมที่ต้องการเล่นในเว็บไซต์ 3.กดปุ่ม Select
                            Lines เพื่อเลือกเพย์ไลน์ในเกม
                            <br />
                            <br />
                            4.จากนั้นจึงเลือกจำนวนเงินเดิมพันด้วยการกดปุ่ม
                            Select Coins
                            <br />
                            <br />
                            5.ตั้งค่าเรียบร้อยแล้วกดปุ่ม Spin
                            เพื่อให้วงล้อเริ่มหมุน
                            <br />
                            <br />
                            6.หลังจากวงล้อหยุดหมุน
                            เห็นรูปภาพเหมือนกันเรียงจากซ้ายไปขวาเป็นแนวตรงหรือแนวทแยงก็ได้
                            จะสร้างรูปแบบชนะได้สำเร็จ
                            ดูผลตอบแทนได้จากตารางการจ่ายรางวัล
                            <br />
                            <a>
                              <img
                                src="https://www.ufabetcn.com/wp-content/uploads/2019/10/How-To-Calculate-Slot-06-1024x568.jpg.webp"
                                style={{
                                  width: "100%",
                                }}
                              ></img>
                            </a>
                            <br />
                            <br />
                            หากคุณเดิมพันช่องจ่ายเงิน 10 ช่อง จะเล่นอย่างน้อย 10
                            เหรียญต่อรอบ เท่ากับว่ามีจำนวนเงินเดิมพันรอบนั้น 100
                            เหรียญ ทำให้มีต้นทุนต่อการหมุนสูงขึ้น
                            การเลือกเพย์ไลน์มากและจำนวนเงินเดิมพันสูงสุดจะมีโอกาสได้เงินรางวัลมากที่สุด
                            ผู้เล่นสามารถคำนวณเงินเดิมพันในแต่ละรอบได้จากเพย์ไลน์และเงินเดิมพัน
                            ช่วยให้ควบคุมงบประมาณการลงทุนได้ง่ายขึ้นนั่นเอง
                            <br />
                            <br />
                            <br />
                            <a>
                              <img
                                src="https://www.ufabetcn.com/wp-content/uploads/2019/10/So-Much-Sushi-Slot-07.jpg.webp"
                                style={{
                                  width: "100%",
                                }}
                              ></img>
                            </a>
                            <br />
                            <span
                              style={{
                                marginTop: "5px",
                                marginBottom: "5px",
                                fontFamily: "Mitr",
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "#d6b318",
                              }}
                            >
                              แนะนำเกมสล็อตออนไลน์ So Much Sushi
                            </span>
                            <br />
                            <br />
                            เกมสล็อตชื่อว่า So Much Sushi
                            เป็นผลงานของค่ายพัฒนาซอฟต์แวร์เกมชื่อดัง Microgaming
                            มีโครงสร้าง 5 วงล้อ 3 แถว จำนวนช่องจ่ายเงิน 25
                            เพย์ไลน์ ดีไซน์วงล้อเกมเป็นรูปโต๊ะอาหาร
                            มีเมนูซูชิหน้าเนื้อสัตว์ต่าง ๆ ปรากฏบนวงล้อ ถือว่า
                            So Much Sushi
                            เป็นตัวอย่างเกมสล็อตพื้นฐานที่เข้าใจง่าย
                            ต้องพิจารณาสัญลักษณ์จ่ายรางวัลสูงและฟีเจอร์โบนัสต่าง
                            ๆ สัญลักษณ์สำคัญคือโลโก้เกม So Much Sushi
                            เป็นสัญลักษณ์เครื่องหมายเสรี (Wild)
                            ที่ใช้เปลี่ยนรูปภาพอื่นบนวงล้อแล้วแทนด้วยรูปข้างเคียงเพื่อให้มีรูปเดียวกันเรียงติดต่อเพื่อชนะรางวัล
                            <br />
                            <br />
                            ส่วนรูปขวดซอส (Scatter)
                            เป็นเครื่องหมายกระจายที่จะเป็นประตูเปิดเข้าสู่เกมโบนัส
                            ให้เล่นสะสมรางวัลมากขึ้น
                            เมื่อพบสัญลักษณ์รูปซอสตั้งแต่ 3
                            รูปขึ้นไปจะเปิดเข้าสู่โบนัสฟรีสปิน
                            ให้ผู้เล่นเลือกซูชิเพื่อลุ้นรับจำนวนฟรีสปิน
                            ผู้เล่นจะได้รับรางวัลฟรีสปินมากถึง 16 รอบ
                            ระหว่างหมุนฟรีถ้าพบรูปขวดซอส 3
                            รูปขึ้นไปจะเรียกใช้โบนัสนี้ได้อีกครั้ง
                            สามารถทำกำไรได้มากทีเดียว
                            <br />
                            <br />
                            ผู้สนใจอยากทดลองเล่นเกมสล็อตออนไลน์
                            ลองเข้าเล่นเกมง่าย ๆ ก่อน เกม 3
                            วงล้อมีต้นทุนค่าใช้จ่ายเพียงเล็กน้อยและหมุนวงล้ออย่างตรงไปตรงมา
                            ไม่มีขั้นตอนยุ่งยาก
                            แต่เกมยุคใหม่ยังเพิ่มสัญลักษณ์เครื่องหมายเสรีมาเป็นตัวช่วยให้ทำกำไรมากขึ้น
                            เมื่อผู้เล่นมีประสบการณ์พอตัวแล้ว ขยับมาเล่นเกม 5
                            วงล้อที่มีรางวัลมากกว่า และวิธีการเล่นซับซ้อนกว่า
                            บางเกมสามารถดาวน์โหลดจากเว็บไซต์มาลองเล่นได้ฟรี
                            เมื่อคุ้นเคยกับโครงสร้างเกมนั้นแล้วค่อยเดิมพันด้วยเงินจริง
                            สามารถเข้าเล่นผ่านสมาร์ทโฟน แท็บเล็ต
                            และอุปกรณ์มือถืออื่น ๆ ได้ตลอด 24 ชั่วโมง
                            <br />
                            <br />
                            หากท่านสนใจการเดิมพันสล๊อต ท่านสามารถ
                            <a
                              href="https://lin.ee/9gF9r1T"
                              style={{
                                color: "whitesmoke",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              สมัคร Ufabet{" "}
                            </a>
                            เพื่อเล่นเกมสล๊อตออนไลน์ โดยการดูแลของ ufabetcn
                            เว็บพนันออนไลน์ จากบริแม่ ufabet.com โดยตรง
                            ท่านสามารถแอด ไลน์{" "}
                            <a
                              href="https://lin.ee/9gF9r1T"
                              style={{
                                color: "whitesmoke",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              @GOLD28{" "}
                            </a>
                            เพื่อติดต่อสอบถามได้เลย
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

export default slot;
