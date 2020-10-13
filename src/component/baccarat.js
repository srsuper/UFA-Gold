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

const baccarat = () => {
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
                              บาคาร่าออนไลน์ UFABET สมัครบาคาร่า วิธีเล่นบาคาร่า
                              และสูตรการเล่นบาคาร่า
                            </span>
                            <img
                              style={{ width: "100%" }}
                              src="https://www.ufabetcn.com/wp-content/uploads/2019/09/03-768x384.jpg.webp"
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
                            <a
                              style={{
                                color: "red",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              บาคาร่า{" "}
                            </a>
                            หรือ
                            <a
                              style={{
                                color: "red",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              Baccarat{" "}
                            </a>
                            คือ เกมพนันไพ่ที่ได้รับความนิยมในบ่อนคาสิโน
                            และกลายเป็นเกมฮิตติดอันดับต้นๆ ในเว็บพนันออนไลน์
                            ปัจจุบันเว็บพนันออนไลน์ อย่าง UFABET จึงมี
                            <a
                              style={{
                                color: "red",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              บาคาร่าออนไลน์{" "}
                            </a>
                            เพื่อบริการลูกค้าที่ สมัคร ufabet ได้ใช้บริการ
                            เล่นบาคาร่าผ่านมือถือหรือคอมพิวเตอร์
                            ได้อย่างสะดวกสบายยิ่งขึ้น
                            เนื่องจากวิธีการเดิมพันบาคาร่าเข้าใจง่าย
                            ใช้เวลาเล่นไม่นาน
                            และมีอัตราต่อรองที่ดีมากเมื่อเปรียบเทียบกับเกมคาสิโนออนไลน์ประเภทอื่นๆ
                            โดยบาคาร่ามี สูตรการเล่นบาคาร่า ที่เป็นที่นิยมใช้กัน
                            เช่น สูตรแทงทบ, บาคาร่ามังกร, บาคาร่าปิงปอง เป็นต้น
                            <a
                              style={{
                                color: "red",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              วิธีการเล่นบาคาร่า{" "}
                            </a>
                            ในเบื้องต้นมีวิธีการทายผลไพ่ได้ 4 รูปแบบ คือ
                            เจ้ามือชนะ (Banker Win), ผู้เล่นชนะ (Player Win),
                            สองฝ่ายเสมอ (Tie) และไพ่คู่ (Pair)
                            อัตราการจ่ายรางวัลของแต่ละโต๊ะมีความแตกต่างกัน
                            ซึ่งแต่ละผู้เล่นก็มักจะมี
                            <a
                              style={{
                                color: "red",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              สูตรบาคาร่า{" "}
                            </a>
                            ต่างๆมาใช้ในการเล่นเพื่อให้ได้ผลกำไรจากการเล่น
                            <br />
                            <br />
                            เนื่องด้วย เกมบาคาร่าออนไลน์ เป็นที่นิยมอย่างมาก
                            จึงมีผู้ให้บริการระบบจำนวนมากที่สร้างระบบออกมาบริการลูกค้า
                            ทั้งนี้ทาง ufabet-th
                            ซึ่งเป็นตัวแทนโดยตรงไม่ผ่านเอเยนต์ จาก ufabet.com
                            ซึ่งได้รับความนิยมจากผู้เล่นทั่วโลก
                            ระบบคาสิโนที่ถูกออกแบบมาของ ufabet มีความยุติธรรม
                            <a
                              href="/casino"
                              style={{
                                color: "red",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              คาสิโนออนไลน์ไม่โกงลูกค้า{" "}
                            </a>
                            ทั้งนี้เพื่อความสบายใจของลูกค้า
                            ยูฟ่าเบทเองก็มีคาสิโนสดที่สามารถเห็นการแจกไพ่กันสดๆ
                            อีกด้วย
                            <br />
                            <img
                              width="100%"
                              src="https://www.ufabetcn.com/wp-content/uploads/2019/09/01-1024x512.jpg.webp"
                            />
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "whitesmoke",
                              }}
                            >
                              วิธีการเล่นบาคาร่า การจ่ายเงินสำหรับการเดิมพัน
                              Baccarat ทั้ง 4 แบบ
                            </a>
                            <br />
                            <br />
                            <ul>
                              ♦ โดยปกติแล้วผลลัพธ์ของบาคาร่าจะออกมา 2 แบบหลักๆ
                              คือ “Banker เจ้ามือชนะ” หรือ “Player ผู้เล่นชนะ”
                              ถ้าทายถูกต้อง จะมีอัตราจ่ายรางวัล 1
                              เท่าของยอดเงินเดิมพัน
                              โอกาสเป็นไปได้ที่จะทายถูกต้องเกือบ 50%
                              แต่การแทงฝ่ายเจ้ามือ (Banker)
                              จะถูกหักค่าคอมมิชชั่น 5% (บางโต๊ะอาจะไม่ถูกหัก
                              แต่ถ้า Banker ชนะด้วยแต้ม 6 แต้ม
                              ท่านใดที่วางเดิมพันฝั่ง Banker หรือเจ้ามือ
                              จะได้รับเงินเดิมพันครึ่งเดียวของการเดิมพันทั้งหมด
                            </ul>
                            <ul>
                              ♦ ส่วนการทายผลลัพธ์ว่า “สองฝ่ายเสมอ”
                              จะมีอัตราจ่ายรางวัล 8 เท่าของยอดเงินเดิมพัน
                              ผลลัพธ์แต้มเสมอมีโอกาสเกิดขึ้นได้ไม่บ่อยนัก
                              ค่าเฉลี่ยของบาคาร่าที่จะออกเสมอ
                              จะมีอัตราส่วนประมาน 5-8 ครั้ง ต่อไพ่หนึ่งขอน
                              แต่ถ้าทายแม่นยำจะทำกำไรมาก
                              คุ้มค่ากับการลงทุนเช่นกัน
                            </ul>
                            <ul>
                              ♦ ส่วนการทายผลลัพธ์ว่า “ไพ่จะออกคู่”
                              จะมีอัตราจ่ายรางวัล 11 เท่าของยอดเงินเดิมพัน
                              ไพ่คู่คืออะไร? ไพ่คู่คือ
                              ท่านสามารถลงเดิมพันว่าทางเจ้ามือ Banker
                              หรือผู้เล่น Player
                              จะเปิดไพ่สองใบแรกออกมาเป็นไพ่เหมือนกัน เช่น
                              เมื่อท่านเลือกวางเดิมพัน 1,000 บาท (เงินทุน 1,000
                              บาท) ที่ตำแหน่ง Pair Banker เมื่อไพ่ออกตามรูป
                              ท่านจะได้เงิน จำนวน 11,000 บาท
                            </ul>
                            <br />
                            <br />
                            <h3>
                              "
                              ในการเดิมพันแต่ละรอบนั้นนักพนันจะแทงบาคาร่าอย่างใดอย่างหนึ่งหรือแทงหลายแบบก็ได้แล้วแต่กลยุทธการลงทุน
                              และสูตรต่างๆของผู้เล่นคนนั้นๆ "
                            </h3>
                            <br />
                            <br />
                            สมัครเล่นเกมบาคาร่าออนไลน์
                            สามารถติดต่อเป็นสมาชิกของเว็บไซต์ยูฟ่าเบท ufabet
                            เพื่อรับยูสเซอร์และรหัสผ่านนำไปล็อกอินเข้าเล่นได้ตลอด
                            24 ชั่วโมง สามารถเข้าเล่นได้ทุกที่ทุกเวลา
                            ถ่ายทอดสดแบบ 4K
                            <img
                              src="https://www.ufabetcn.com/wp-content/uploads/2019/09/02.jpg.webp"
                              width="100%"
                            ></img>
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "whitesmoke",
                              }}
                            >
                              วิธีเล่นบาคาร่าสดออนไลน์กับเว็บ ufabet ยูฟ่าเบท
                            </a>
                            <br />
                            <br />
                            <a
                              style={{
                                color: "red",
                                fontWeight: "bold",
                              }}
                            >
                              Table games (บาคาร่ากราฟฟิก){" "}
                            </a>
                            ทั่วไปเมื่อเข้าเมนูบาคาร่าแล้วเลือกโต๊ะพนันเพื่อเข้าเดิมพันเกมไพ่ทั้งนี้รูปแบบจะเป็นกราฟฟิกเกมส์บาคาร่า
                            โดยระบบจะสุ่มไพ่ที่ออก
                            ทั้งนี้ผู้เล่นหลายๆท่านอาจไม่มั่นใจว่าระบบจะออกไพ่แบบยุติธรรมหรือไม่
                            มีการโกงหรือเปล่า
                            เนื่องจากอาจเคยเล่นในระบบอื่นๆที่อาจสร้างขึ้นมาเองและอาจมีการโกงเกิดขึ้นจริงๆ
                            แต่ทว่าเว็บ ufabet
                            เองเป็นเว็บพนันออนไลน์ที่ได้รับการยอมรับจากทั่วโลก
                            ลูกค้าจึงไม่ต้องกังวลหากเล่นกับทางเว็บไซต์ที่น่าเชื่อถือ
                            <br />
                            <br />
                            <a
                              style={{
                                color: "red",
                                fontWeight: "bold",
                              }}
                            >
                              Live Baccarat (บาคาร่าสด){" "}
                            </a>
                            ซึ่งเป็นจุดเด่นของบาคาร่าออนไลน์วิธีการพนันถ่ายทอดสดแบบเรียลไทม์จากโต๊ะพนันในบ่อนคาสิโนจริงๆ
                            สร้างความสนุกเพลิดเพลินให้กับนักพนันมืออาชีพและเป็นโอกาสให้มือสมัครเล่นได้เรียนรู้วิธีการพนันได้อย่างต่อเนื่อง
                            สามารถเข้าเล่นบาคาร่าเมื่อไรก็ได้นอกจากจะเป็นวิธีการเล่นที่คุ้นเคยแล้ว
                            ยังสามารถนำสูตรเดิมพันต่างๆ
                            มาทดลองใช้ให้ชนะพนันง่ายขึ้นได้อีกด้วย
                            <br />
                            <br />
                            การเดิมพันบาคาร่าในเว็บ ยูฟ่าเบท
                            ซึ่งเป็นเว็บคาสิโนชั้นนำสามารถเข้าร่วมลุ้นโชคได้ตลอดเวลาแม้จะเป็นนักพนันมือใหม่ที่มีงบประมาณไม่มาก
                            เริ่มจากเงินเดิมพันขั้นต่ำสุดเพียง 20
                            บาทต่อรอบเท่านั้น
                            โต๊ะพนันจะกำหนดเงินเดิมพันขั้นต่ำสุดและสูงสุดของโต๊ะนั้นไว้ด้วย
                            เช่นเดิมพันต่ำสุด 20 บาท แต่ไม่เกิน 2,000
                            บาทในแต่ละรอบ
                            ช่วยให้นักพนันสามารถควบคุมเงินทุนในการเดิมพันได้ง่ายขึ้น
                            มีโต๊ะบาคาร่าให้เลือกเล่นหลายโต๊ะยิ่งมีทางเลือกมากก็ยิ่งมีโอกาสทดลองกับโต๊ะเกมที่ถูกโฉลกและชนะการพนันมากยิ่งขึ้น
                            <br />
                            <br />
                            <img
                              src="https://www.ufabetcn.com/wp-content/uploads/2019/09/04-1024x512.jpg.webp"
                              width="100%"
                            ></img>
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "whitesmoke",
                              }}
                            >
                              วิธีการสมัครเล่นบาคาร่า SA Gaming คาสิโนสด ของ
                              ufabet
                            </a>
                            <br />
                            <br />
                            เว็บพนันเปิดรับสมาชิกใหม่ตลอดเวลา
                            ผู้สนใจติดต่อแจ้งความต้องการที่จะ
                            <a
                              style={{
                                color: "red",
                                fontWeight: "bold",
                              }}
                            >
                              สมัครบาคาร่า{" "}
                            </a>
                            กับแอดมินผ่านทางไลน์แอด
                            <a
                              href="https://lin.ee/9gF9r1T"
                              style={{
                                color: "whitesmoke",
                                fontWeight: "bold",
                              }}
                            >
                              @GOLD28{" "}
                            </a>{" "}
                            แจ้งชื่อ-นามสกุล เบอร์โทรศัพท์
                            และบัญชีธนาคารของตนเอง
                            หลังจากโอนเงินเข้าบัญชีธนาคารที่ระบุ ทีมงานจะส่ง
                            ยูสเซอร์เนมและพาสเวิร์ดล็อกอิน
                            เข้าเล่นบาคาร่าออนไลน์
                            <br />
                            <br />
                            หลังจากนั้นเลือกคลิกเข้าไปที่เมนู
                            <a
                              style={{
                                color: "red",
                                fontWeight: "bold",
                              }}
                            >
                              คาสิโนสด{" "}
                            </a>
                            จะมีห้องบาคาร่าให้เลือกหลายห้อง ให้เลือกโต๊ะไพ่สวยๆ
                            จากนั้นให้คลิกเกมบาคาร่าพนันสด
                            <a
                              style={{
                                color: "red",
                                fontWeight: "bold",
                              }}
                            >
                              SA Gaming{" "}
                            </a>
                            แล้วเลือกโต๊ะบาคาร่าและที่นั่งในโต๊ะพนันที่ต้องการ
                            ทำให้ผู้เล่นได้สัมผัสความสนุกตื่นเต้นไม่ต่างจากการเล่นพนันในบ่อนจริง
                            <img
                              src="https://www.ufabetcn.com/wp-content/uploads/2019/09/06.jpg.webp"
                              width="100%"
                            ></img>
                            <br />
                            <br />
                            การเล่นบาคาร่าจะใช้ไพ่ทั้งหมด 8 สำรับ
                            นักพนันเลือกวางเดิมพันหรือไม่เดิมพันรอบไหนก็ได้
                            ในการเดิมพันแต่ละรอบดีลเลอร์สาวสวยของเว็บพนันจะเริ่มแจกไพ่ให้เจ้ามือและผู้เล่นฝ่ายละ
                            2 ใบ ในรอบแรกดูว่าฝั่งไหนมีแต้มมากที่สุด
                            ถ้ามีฝ่ายใดได้ไพ่ 8 หรือ 9 แต้มแล้ว
                            อาจตัดสินเกมได้เลย
                            แต่ถ้ายังตัดสินไม่ได้ฝ่ายที่แต้มไพ่ต่ำกว่า 5 แต้ม
                            ต้องรับไพ่เพิ่มตามกติกาคำนวณแต้มบนหน้าไพ่
                            แล้ววัดกันว่าฝ่ายใดจะชนะหรือเสมอทายถูกก็ชนะและรับรางวัลไปง่าย
                            ๆ
                            สิ่งสำคัญที่ลืมไม่ได้คือการเล่นเกมบาคาร่าออนไลน์นั้น
                            ฝ่ายดีลเลอร์จะจัดการกับเกมบนโต๊ะพนันเองเหล่านักพนันจะไม่ได้ถือไพ่เล่นด้วยตัวเองและไม่จำเป็นต้องทำอะไรมากไปกว่าการทายผลไพ่ในแต่ละรอบเท่านั้น
                            แต่ก็จำเป็นต้องเรียนรู้กฎกติกาการเล่นเพื่อช่วยให้เข้าใจเกมมากขึ้น
                            ในเบื้องต้นให้เดิมพัน 3 แบบหลัก คือ แทงฝ่ายเจ้ามือ
                            ฝ่ายผู้เล่น และแต้มเสมอ
                            นอกจากนั้นยังมีรูปแบบการเดิมพันอื่น ๆ
                            ที่เรียกว่าไซด์เบ็ท (Side Bet)
                            เพิ่มความสนุกตื่นเต้นในการทายผลพนันและเพิ่มโอกาสในการทายผลให้ชนะพนันง่ายขึ้นด้วยกติกาการนับแต้มไพ่และการจั่วไพ่ใบที่สามก่อนเล่นบาคาร่าควรรู้ข้อมูลการเล่นอย่างละเอียดรวมทั้งกฎการนับแต้มไพ่ด้วย
                            <br />
                            <br />
                            <h3
                              style={{
                                fontWeight: "bold",
                                color: "whitesmoke",
                              }}
                            >
                              " ก่อนเล่นบาคาร่าควรรู้ข้อมูลการเล่นอย่างละเอียด
                              รวมทั้งกฎการนับแต้มไพ่ด้วย "
                            </h3>
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "whitesmoke",
                              }}
                            >
                              วิธีการนับแต้มของเกมบาคาร่าคล้ายกับไพ่ป๊อกเด้ง
                              มีดังนี้
                            </a>
                            <br />
                            <br />
                            <li>A มีค่าเท่ากับ 1</li>
                            <br />
                            <li>J, Q, K มีค่าเท่ากับ 10</li>
                            <br />
                            <li>
                              เมื่อได้ไพ่ 2 ใบมีแต้มรวมเกิน 9 จะถูกหักออก 10
                              แต้ม ให้เหลือตัวเลขหลักเดียว เช่น ไพ่ J และ 7
                              มีค่ารวมเท่ากับ 7 แต้ม หรือได้ไพ่ 8 และ 9
                              มีค่ารวมเท่ากับ 17 หักออกแล้วเหลือ 7 แต้ม
                            </li>
                            <br />
                            <li>แต้มไพ่บาคาร่า 8-9 (เรียกว่าแนชเชอรัล)</li>
                            <br />
                            หากฝ่ายใดฝ่ายหนึ่งได้แต้มรวม 8-9 ตั้งแต่ไพ่ 2
                            ใบแรกจะไม่มีการจั่วไพ่เพิ่มอีกแต้มนี้ใช้เทียบกับคู่แข่งแล้วว่าใครได้มากกว่าก็ตัดสินให้ชนะไปในทันทีในกรณีที่สองฝ่ายถือไพ่แต้มเท่ากันให้เท่ากับเสมอ
                            <br />
                            <br />
                            <li>แต้มไพ่บาคาร่า 6-7</li>
                            <br />
                            ทั้งฝ่ายเจ้ามือและผู้เล่นที่ได้แต้ม 6 หรือ 7
                            แต้มแล้ว ให้เลือกอยู่หมายถึงไม่ต้องจั่วไพ่เพิ่ม
                            ตัดสินแพ้ชนะได้ในทันทีในกรณีที่ผู้เล่นได้แต้ม 6 หรือ
                            7 แต้ม แต่เจ้ามือได้ไพ่ต่ำกว่า 5
                            แต้มต้องจั่วไพ่เพิ่ม
                            <br />
                            <br />
                            <li>แต้มไพ่บาคาร่า 0-5</li>
                            <br />
                            ถ้าแต้มรวมของไพ่สองใบแรกมีค่าเท่ากับ 5 แต้มลงมา
                            กติกาของไพ่บาคาร่ากำหนดให้ผู้เล่นรับไพ่เพิ่ม 1 ใบ
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "whitesmoke",
                              }}
                            >
                              การเรียกไพ่ใบที่ 3
                              ของฝ่ายเจ้ามือบาคาร่ามีรายละเอียดที่ควรรู้ดังนี้
                            </a>
                            <br />
                            <br />
                            <li>
                              แต้มรวมไพ่สองใบแรกเท่ากับ 3 จั่วได้ 8
                              ตัดสินทันที/ถ้าจั่วได้ 0-7 และ 9 ต้องจั่วเพิ่ม
                            </li>
                            <li>
                              แต้มรวมไพ่สองใบแรกเท่ากับ 4 จั่วได้ 1 และ 8-10
                              ตัดสินทันที/ถ้าจั่วได้ 0 และ 2-7 ต้องจั่วเพิ่ม
                            </li>
                            <li>
                              แต้มรวมไพ่สองใบแรกเท่ากับ 5 จั่วได้ 1-3 และ 8-10
                              ตัดสินทันที/ถ้าจั่วได้ 0 และ 4-7 ต้องจั่วเพิ่ม
                            </li>
                            <li>
                              แต้มรวมไพ่สองใบแรกเท่ากับ 6 จั่วได้ 1-5 และ 8-10
                              ตัดสินทันที/ถ้าจั่วได้ 0 และ 6-7 ต้องจั่วเพิ่ม
                            </li>
                            <li>
                              แต้มรวมไพ่สองใบแรกเท่ากับ 7-9 ไม่ต้องจั่วไพ่เพิ่ม
                            </li>
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "whitesomke",
                              }}
                            >
                              เทคนิคเดิมพันบาคาร่า สูตรแทงตามสถิติให้ได้กำไร
                            </a>
                            <br />
                            <br />
                            นักพนันมือใหม่สามารถเรียนรู้เข้าใจพื้นฐานการเล่นไพ่บาคาร่าได้ง่ายหากคุณกำลังมองหาเทคนิคเล่นบาคาร่าแบบวิเคราะห์ไพ่จากสถิติการเล่นก่อนหน้าจะใช้ผลลัพธ์ของเกมมาเป็นต้นแบบช่วยให้สังเกตรูปแบบที่เกิดขึ้นซ้ำๆ
                            กันช่วยให้จับจังหวะและทายผลลัพธ์ของไพ่ตามรูปแบบนั้นง่ายขึ้น
                            โดยสูตรสถิติบาคาร่ามีด้วยกันหลายสูตร ได้แก่
                            สูตรไพ่มังกร, สูตรไพ่ปิงปอง, สูตรไพ่สองตัด,
                            สูตรไพ่สามตัด, สูตรไพ่สี่ตัด
                            มีรายละเอียดวิธีทายผลไพ่ดังนี้
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "whitesomke",
                              }}
                            >
                              สูตรบาคาร่ายอดนิยมของเซียน Baccarat
                            </a>
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "whitesomke",
                              }}
                            >
                              สูตรบาคาร่ามังกร
                            </a>
                            <br />
                            <img
                              width="100%"
                              src="https://www.ufabetcn.com/wp-content/uploads/2019/09/07.jpg.webp"
                            />
                            <br />
                            <br />
                            “ไพ่บาคาร่ามังกร”
                            เป็นรูปแบบสถิติที่มักจะถูกพูดถึงอยู่เสมอและนิยมนำมาใช้ในการทายผลไพ่บาคาร่ามากที่สุด
                            ไพ่มังกรหมายถึงผลลัพธ์ของไพ่ที่มีฝ่ายใดฝ่ายหนึ่งชนะพนันติดต่อกันนับ
                            10 ครั้ง
                            ซึ่งจับสังเกตได้ง่ายเมื่อเห็นแล้วรู้ทันทีว่าถึงคราวต้องวางเดิมพันทางฝั่งนั้นต่อไปมีโอกาสทายผลแม่นยำติดต่อกันหลายตา
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "whitesomke",
                              }}
                            >
                              สูตรบาคาร่าปิงปอง
                            </a>
                            <br />
                            <img
                              width="100%"
                              src="https://www.ufabetcn.com/wp-content/uploads/2019/09/08.jpg.webp"
                            />
                            <br />
                            <br />
                            “ไพ่บาคาร่าปิงปอง”
                            เป็นรูปแบบสถิติที่นิยมเหมือนกันหมายถึงลักษณะไพ่ที่สองฝ่ายสลับกันแพ้ชนะไปเรื่อยๆ
                            เหมือนกับการตีปิงปองโต้ตอบไปมา
                            วิธีการดักแทงไพ่สูตรปิงปองคือแทงสลับข้างกันไปเรื่อย
                            ๆ จนกว่าจะหมดจังหวะไพ่สูตรปิงปอง
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "whitesomke",
                              }}
                            >
                              สูตรบาคาร่าสองตัด
                            </a>
                            <br />
                            <img
                              width="100%"
                              src="https://www.ufabetcn.com/wp-content/uploads/2019/09/09.jpg.webp"
                            />
                            <br />
                            <br />
                            “ไพ่บาคาร่าสองตัด”
                            เป็นรูปแบบสถิติที่สังเกตไม่ง่ายนักหมายถึงลักษณะไพ่ที่ฝ่ายหนึ่งชนะติดกัน
                            2 ครั้งแล้วสลับไปให้อีกฝ่ายชนะ 2 ครั้ง
                            โดยจะแพ้ชนะสลับกันทีละสองครั้งไปเรื่อย ๆ
                            นอกจากนั้นยังมี ไพ่สามตัด ไพ่สี่ตัด ไพ่ห้าตัด
                            ซึ่งจับจังหวะการทายได้ในลักษณะเดียวกันต้องอาศัยประสบการณ์ความชำนาญจากการเข้าเล่นบ่อยๆ
                            <br />
                            <br />
                            เพื่อให้คุ้นเคยกับการเล่นตามสูตรสถิติมากขึ้นแนะนำว่าหลังจากสิ้นสุดจังหวะไพ่มังกรแล้วพบผลลัพธ์แบบไหนซ้ำกันทุกครั้ง
                            ควรดักแทงควบคู่กันไปด้วย
                            เช่นจบไพ่มังกรแล้วพบแต้มเท่าทุกครั้ง
                            เมื่อฝ่ายหนึ่งชนะติดต่อกันเกือบ 10 ครั้ง
                            แล้วให้แทงแต้มเสมอควบคู่กันไปมีโอกาสได้ผลตอบแทนสูงถึง
                            8 เท่าของยอดเดิมพัน
                            สูตรง่ายๆเหล่านี้จะช่วยให้นักพนันเล่นบาคาร่าออนไลน์ได้มีกำไรไม่ต่างจากเซียนตัวจริง
                            บาคาร่า ทำเงินได้ในมือคุณ
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
                              บาคาร่าออนไลน์ UFABET สมัครบาคาร่า วิธีเล่นบาคาร่า
                              และสูตรการเล่นบาคาร่า
                            </span>
                            <img
                              style={{ width: "100%" }}
                              src="https://www.ufabetcn.com/wp-content/uploads/2019/09/03-768x384.jpg.webp"
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
                            <a
                              style={{
                                color: "red",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              บาคาร่า{" "}
                            </a>
                            หรือ
                            <a
                              style={{
                                color: "red",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              Baccarat{" "}
                            </a>
                            คือ เกมพนันไพ่ที่ได้รับความนิยมในบ่อนคาสิโน
                            และกลายเป็นเกมฮิตติดอันดับต้นๆ ในเว็บพนันออนไลน์
                            ปัจจุบันเว็บพนันออนไลน์ อย่าง UFABET จึงมี
                            <a
                              style={{
                                color: "red",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              บาคาร่าออนไลน์{" "}
                            </a>
                            เพื่อบริการลูกค้าที่ สมัคร ufabet ได้ใช้บริการ
                            เล่นบาคาร่าผ่านมือถือหรือคอมพิวเตอร์
                            ได้อย่างสะดวกสบายยิ่งขึ้น
                            เนื่องจากวิธีการเดิมพันบาคาร่าเข้าใจง่าย
                            ใช้เวลาเล่นไม่นาน
                            และมีอัตราต่อรองที่ดีมากเมื่อเปรียบเทียบกับเกมคาสิโนออนไลน์ประเภทอื่นๆ
                            โดยบาคาร่ามี สูตรการเล่นบาคาร่า ที่เป็นที่นิยมใช้กัน
                            เช่น สูตรแทงทบ, บาคาร่ามังกร, บาคาร่าปิงปอง เป็นต้น
                            <a
                              style={{
                                color: "red",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              วิธีการเล่นบาคาร่า{" "}
                            </a>
                            ในเบื้องต้นมีวิธีการทายผลไพ่ได้ 4 รูปแบบ คือ
                            เจ้ามือชนะ (Banker Win), ผู้เล่นชนะ (Player Win),
                            สองฝ่ายเสมอ (Tie) และไพ่คู่ (Pair)
                            อัตราการจ่ายรางวัลของแต่ละโต๊ะมีความแตกต่างกัน
                            ซึ่งแต่ละผู้เล่นก็มักจะมี
                            <a
                              style={{
                                color: "red",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              สูตรบาคาร่า{" "}
                            </a>
                            ต่างๆมาใช้ในการเล่นเพื่อให้ได้ผลกำไรจากการเล่น
                            <br />
                            <br />
                            เนื่องด้วย เกมบาคาร่าออนไลน์ เป็นที่นิยมอย่างมาก
                            จึงมีผู้ให้บริการระบบจำนวนมากที่สร้างระบบออกมาบริการลูกค้า
                            ทั้งนี้ทาง ufabet-th
                            ซึ่งเป็นตัวแทนโดยตรงไม่ผ่านเอเยนต์ จาก ufabet.com
                            ซึ่งได้รับความนิยมจากผู้เล่นทั่วโลก
                            ระบบคาสิโนที่ถูกออกแบบมาของ ufabet มีความยุติธรรม
                            <a
                              href="/casino"
                              style={{
                                color: "red",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              คาสิโนออนไลน์ไม่โกงลูกค้า{" "}
                            </a>
                            ทั้งนี้เพื่อความสบายใจของลูกค้า
                            ยูฟ่าเบทเองก็มีคาสิโนสดที่สามารถเห็นการแจกไพ่กันสดๆ
                            อีกด้วย
                            <br />
                            <img
                              width="100%"
                              src="https://www.ufabetcn.com/wp-content/uploads/2019/09/01-1024x512.jpg.webp"
                            />
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "whitesmoke",
                              }}
                            >
                              วิธีการเล่นบาคาร่า การจ่ายเงินสำหรับการเดิมพัน
                              Baccarat ทั้ง 4 แบบ
                            </a>
                            <br />
                            <br />
                            <ul>
                              ♦ โดยปกติแล้วผลลัพธ์ของบาคาร่าจะออกมา 2 แบบหลักๆ
                              คือ “Banker เจ้ามือชนะ” หรือ “Player ผู้เล่นชนะ”
                              ถ้าทายถูกต้อง จะมีอัตราจ่ายรางวัล 1
                              เท่าของยอดเงินเดิมพัน
                              โอกาสเป็นไปได้ที่จะทายถูกต้องเกือบ 50%
                              แต่การแทงฝ่ายเจ้ามือ (Banker)
                              จะถูกหักค่าคอมมิชชั่น 5% (บางโต๊ะอาจะไม่ถูกหัก
                              แต่ถ้า Banker ชนะด้วยแต้ม 6 แต้ม
                              ท่านใดที่วางเดิมพันฝั่ง Banker หรือเจ้ามือ
                              จะได้รับเงินเดิมพันครึ่งเดียวของการเดิมพันทั้งหมด
                            </ul>
                            <ul>
                              ♦ ส่วนการทายผลลัพธ์ว่า “สองฝ่ายเสมอ”
                              จะมีอัตราจ่ายรางวัล 8 เท่าของยอดเงินเดิมพัน
                              ผลลัพธ์แต้มเสมอมีโอกาสเกิดขึ้นได้ไม่บ่อยนัก
                              ค่าเฉลี่ยของบาคาร่าที่จะออกเสมอ
                              จะมีอัตราส่วนประมาน 5-8 ครั้ง ต่อไพ่หนึ่งขอน
                              แต่ถ้าทายแม่นยำจะทำกำไรมาก
                              คุ้มค่ากับการลงทุนเช่นกัน
                            </ul>
                            <ul>
                              ♦ ส่วนการทายผลลัพธ์ว่า “ไพ่จะออกคู่”
                              จะมีอัตราจ่ายรางวัล 11 เท่าของยอดเงินเดิมพัน
                              ไพ่คู่คืออะไร? ไพ่คู่คือ
                              ท่านสามารถลงเดิมพันว่าทางเจ้ามือ Banker
                              หรือผู้เล่น Player
                              จะเปิดไพ่สองใบแรกออกมาเป็นไพ่เหมือนกัน เช่น
                              เมื่อท่านเลือกวางเดิมพัน 1,000 บาท (เงินทุน 1,000
                              บาท) ที่ตำแหน่ง Pair Banker เมื่อไพ่ออกตามรูป
                              ท่านจะได้เงิน จำนวน 11,000 บาท
                            </ul>
                            <br />
                            <br />
                            <h3>
                              "
                              ในการเดิมพันแต่ละรอบนั้นนักพนันจะแทงบาคาร่าอย่างใดอย่างหนึ่งหรือแทงหลายแบบก็ได้แล้วแต่กลยุทธการลงทุน
                              และสูตรต่างๆของผู้เล่นคนนั้นๆ "
                            </h3>
                            <br />
                            <br />
                            สมัครเล่นเกมบาคาร่าออนไลน์
                            สามารถติดต่อเป็นสมาชิกของเว็บไซต์ยูฟ่าเบท ufabet
                            เพื่อรับยูสเซอร์และรหัสผ่านนำไปล็อกอินเข้าเล่นได้ตลอด
                            24 ชั่วโมง สามารถเข้าเล่นได้ทุกที่ทุกเวลา
                            ถ่ายทอดสดแบบ 4K
                            <img
                              src="https://www.ufabetcn.com/wp-content/uploads/2019/09/02.jpg.webp"
                              width="100%"
                            ></img>
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "whitesmoke",
                              }}
                            >
                              วิธีเล่นบาคาร่าสดออนไลน์กับเว็บ ufabet ยูฟ่าเบท
                            </a>
                            <br />
                            <br />
                            <a
                              style={{
                                color: "red",
                                fontWeight: "bold",
                              }}
                            >
                              Table games (บาคาร่ากราฟฟิก){" "}
                            </a>
                            ทั่วไปเมื่อเข้าเมนูบาคาร่าแล้วเลือกโต๊ะพนันเพื่อเข้าเดิมพันเกมไพ่ทั้งนี้รูปแบบจะเป็นกราฟฟิกเกมส์บาคาร่า
                            โดยระบบจะสุ่มไพ่ที่ออก
                            ทั้งนี้ผู้เล่นหลายๆท่านอาจไม่มั่นใจว่าระบบจะออกไพ่แบบยุติธรรมหรือไม่
                            มีการโกงหรือเปล่า
                            เนื่องจากอาจเคยเล่นในระบบอื่นๆที่อาจสร้างขึ้นมาเองและอาจมีการโกงเกิดขึ้นจริงๆ
                            แต่ทว่าเว็บ ufabet
                            เองเป็นเว็บพนันออนไลน์ที่ได้รับการยอมรับจากทั่วโลก
                            ลูกค้าจึงไม่ต้องกังวลหากเล่นกับทางเว็บไซต์ที่น่าเชื่อถือ
                            <br />
                            <br />
                            <a
                              style={{
                                color: "red",
                                fontWeight: "bold",
                              }}
                            >
                              Live Baccarat (บาคาร่าสด){" "}
                            </a>
                            ซึ่งเป็นจุดเด่นของบาคาร่าออนไลน์วิธีการพนันถ่ายทอดสดแบบเรียลไทม์จากโต๊ะพนันในบ่อนคาสิโนจริงๆ
                            สร้างความสนุกเพลิดเพลินให้กับนักพนันมืออาชีพและเป็นโอกาสให้มือสมัครเล่นได้เรียนรู้วิธีการพนันได้อย่างต่อเนื่อง
                            สามารถเข้าเล่นบาคาร่าเมื่อไรก็ได้นอกจากจะเป็นวิธีการเล่นที่คุ้นเคยแล้ว
                            ยังสามารถนำสูตรเดิมพันต่างๆ
                            มาทดลองใช้ให้ชนะพนันง่ายขึ้นได้อีกด้วย
                            <br />
                            <br />
                            การเดิมพันบาคาร่าในเว็บ ยูฟ่าเบท
                            ซึ่งเป็นเว็บคาสิโนชั้นนำสามารถเข้าร่วมลุ้นโชคได้ตลอดเวลาแม้จะเป็นนักพนันมือใหม่ที่มีงบประมาณไม่มาก
                            เริ่มจากเงินเดิมพันขั้นต่ำสุดเพียง 20
                            บาทต่อรอบเท่านั้น
                            โต๊ะพนันจะกำหนดเงินเดิมพันขั้นต่ำสุดและสูงสุดของโต๊ะนั้นไว้ด้วย
                            เช่นเดิมพันต่ำสุด 20 บาท แต่ไม่เกิน 2,000
                            บาทในแต่ละรอบ
                            ช่วยให้นักพนันสามารถควบคุมเงินทุนในการเดิมพันได้ง่ายขึ้น
                            มีโต๊ะบาคาร่าให้เลือกเล่นหลายโต๊ะยิ่งมีทางเลือกมากก็ยิ่งมีโอกาสทดลองกับโต๊ะเกมที่ถูกโฉลกและชนะการพนันมากยิ่งขึ้น
                            <br />
                            <br />
                            <img
                              src="https://www.ufabetcn.com/wp-content/uploads/2019/09/04-1024x512.jpg.webp"
                              width="100%"
                            ></img>
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "whitesmoke",
                              }}
                            >
                              วิธีการสมัครเล่นบาคาร่า SA Gaming คาสิโนสด ของ
                              ufabet
                            </a>
                            <br />
                            <br />
                            เว็บพนันเปิดรับสมาชิกใหม่ตลอดเวลา
                            ผู้สนใจติดต่อแจ้งความต้องการที่จะ
                            <a
                              style={{
                                color: "red",
                                fontWeight: "bold",
                              }}
                            >
                              สมัครบาคาร่า{" "}
                            </a>
                            กับแอดมินผ่านทางไลน์แอด
                            <a
                              href="https://lin.ee/9gF9r1T"
                              style={{
                                color: "whitesmoke",
                                fontWeight: "bold",
                              }}
                            >
                              @GOLD28{" "}
                            </a>{" "}
                            แจ้งชื่อ-นามสกุล เบอร์โทรศัพท์
                            และบัญชีธนาคารของตนเอง
                            หลังจากโอนเงินเข้าบัญชีธนาคารที่ระบุ ทีมงานจะส่ง
                            ยูสเซอร์เนมและพาสเวิร์ดล็อกอิน
                            เข้าเล่นบาคาร่าออนไลน์
                            <br />
                            <br />
                            หลังจากนั้นเลือกคลิกเข้าไปที่เมนู
                            <a
                              style={{
                                color: "red",
                                fontWeight: "bold",
                              }}
                            >
                              คาสิโนสด{" "}
                            </a>
                            จะมีห้องบาคาร่าให้เลือกหลายห้อง ให้เลือกโต๊ะไพ่สวยๆ
                            จากนั้นให้คลิกเกมบาคาร่าพนันสด
                            <a
                              style={{
                                color: "red",
                                fontWeight: "bold",
                              }}
                            >
                              SA Gaming{" "}
                            </a>
                            แล้วเลือกโต๊ะบาคาร่าและที่นั่งในโต๊ะพนันที่ต้องการ
                            ทำให้ผู้เล่นได้สัมผัสความสนุกตื่นเต้นไม่ต่างจากการเล่นพนันในบ่อนจริง
                            <img
                              src="https://www.ufabetcn.com/wp-content/uploads/2019/09/06.jpg.webp"
                              width="100%"
                            ></img>
                            <br />
                            <br />
                            การเล่นบาคาร่าจะใช้ไพ่ทั้งหมด 8 สำรับ
                            นักพนันเลือกวางเดิมพันหรือไม่เดิมพันรอบไหนก็ได้
                            ในการเดิมพันแต่ละรอบดีลเลอร์สาวสวยของเว็บพนันจะเริ่มแจกไพ่ให้เจ้ามือและผู้เล่นฝ่ายละ
                            2 ใบ ในรอบแรกดูว่าฝั่งไหนมีแต้มมากที่สุด
                            ถ้ามีฝ่ายใดได้ไพ่ 8 หรือ 9 แต้มแล้ว
                            อาจตัดสินเกมได้เลย
                            แต่ถ้ายังตัดสินไม่ได้ฝ่ายที่แต้มไพ่ต่ำกว่า 5 แต้ม
                            ต้องรับไพ่เพิ่มตามกติกาคำนวณแต้มบนหน้าไพ่
                            แล้ววัดกันว่าฝ่ายใดจะชนะหรือเสมอทายถูกก็ชนะและรับรางวัลไปง่าย
                            ๆ
                            สิ่งสำคัญที่ลืมไม่ได้คือการเล่นเกมบาคาร่าออนไลน์นั้น
                            ฝ่ายดีลเลอร์จะจัดการกับเกมบนโต๊ะพนันเองเหล่านักพนันจะไม่ได้ถือไพ่เล่นด้วยตัวเองและไม่จำเป็นต้องทำอะไรมากไปกว่าการทายผลไพ่ในแต่ละรอบเท่านั้น
                            แต่ก็จำเป็นต้องเรียนรู้กฎกติกาการเล่นเพื่อช่วยให้เข้าใจเกมมากขึ้น
                            ในเบื้องต้นให้เดิมพัน 3 แบบหลัก คือ แทงฝ่ายเจ้ามือ
                            ฝ่ายผู้เล่น และแต้มเสมอ
                            นอกจากนั้นยังมีรูปแบบการเดิมพันอื่น ๆ
                            ที่เรียกว่าไซด์เบ็ท (Side Bet)
                            เพิ่มความสนุกตื่นเต้นในการทายผลพนันและเพิ่มโอกาสในการทายผลให้ชนะพนันง่ายขึ้นด้วยกติกาการนับแต้มไพ่และการจั่วไพ่ใบที่สามก่อนเล่นบาคาร่าควรรู้ข้อมูลการเล่นอย่างละเอียดรวมทั้งกฎการนับแต้มไพ่ด้วย
                            <br />
                            <br />
                            <h3
                              style={{
                                fontWeight: "bold",
                                color: "whitesmoke",
                              }}
                            >
                              " ก่อนเล่นบาคาร่าควรรู้ข้อมูลการเล่นอย่างละเอียด
                              รวมทั้งกฎการนับแต้มไพ่ด้วย "
                            </h3>
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "whitesmoke",
                              }}
                            >
                              วิธีการนับแต้มของเกมบาคาร่าคล้ายกับไพ่ป๊อกเด้ง
                              มีดังนี้
                            </a>
                            <br />
                            <br />
                            <li>A มีค่าเท่ากับ 1</li>
                            <br />
                            <li>J, Q, K มีค่าเท่ากับ 10</li>
                            <br />
                            <li>
                              เมื่อได้ไพ่ 2 ใบมีแต้มรวมเกิน 9 จะถูกหักออก 10
                              แต้ม ให้เหลือตัวเลขหลักเดียว เช่น ไพ่ J และ 7
                              มีค่ารวมเท่ากับ 7 แต้ม หรือได้ไพ่ 8 และ 9
                              มีค่ารวมเท่ากับ 17 หักออกแล้วเหลือ 7 แต้ม
                            </li>
                            <br />
                            <li>แต้มไพ่บาคาร่า 8-9 (เรียกว่าแนชเชอรัล)</li>
                            <br />
                            หากฝ่ายใดฝ่ายหนึ่งได้แต้มรวม 8-9 ตั้งแต่ไพ่ 2
                            ใบแรกจะไม่มีการจั่วไพ่เพิ่มอีกแต้มนี้ใช้เทียบกับคู่แข่งแล้วว่าใครได้มากกว่าก็ตัดสินให้ชนะไปในทันทีในกรณีที่สองฝ่ายถือไพ่แต้มเท่ากันให้เท่ากับเสมอ
                            <br />
                            <br />
                            <li>แต้มไพ่บาคาร่า 6-7</li>
                            <br />
                            ทั้งฝ่ายเจ้ามือและผู้เล่นที่ได้แต้ม 6 หรือ 7
                            แต้มแล้ว ให้เลือกอยู่หมายถึงไม่ต้องจั่วไพ่เพิ่ม
                            ตัดสินแพ้ชนะได้ในทันทีในกรณีที่ผู้เล่นได้แต้ม 6 หรือ
                            7 แต้ม แต่เจ้ามือได้ไพ่ต่ำกว่า 5
                            แต้มต้องจั่วไพ่เพิ่ม
                            <br />
                            <br />
                            <li>แต้มไพ่บาคาร่า 0-5</li>
                            <br />
                            ถ้าแต้มรวมของไพ่สองใบแรกมีค่าเท่ากับ 5 แต้มลงมา
                            กติกาของไพ่บาคาร่ากำหนดให้ผู้เล่นรับไพ่เพิ่ม 1 ใบ
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "whitesmoke",
                              }}
                            >
                              การเรียกไพ่ใบที่ 3
                              ของฝ่ายเจ้ามือบาคาร่ามีรายละเอียดที่ควรรู้ดังนี้
                            </a>
                            <br />
                            <br />
                            <li>
                              แต้มรวมไพ่สองใบแรกเท่ากับ 3 จั่วได้ 8
                              ตัดสินทันที/ถ้าจั่วได้ 0-7 และ 9 ต้องจั่วเพิ่ม
                            </li>
                            <li>
                              แต้มรวมไพ่สองใบแรกเท่ากับ 4 จั่วได้ 1 และ 8-10
                              ตัดสินทันที/ถ้าจั่วได้ 0 และ 2-7 ต้องจั่วเพิ่ม
                            </li>
                            <li>
                              แต้มรวมไพ่สองใบแรกเท่ากับ 5 จั่วได้ 1-3 และ 8-10
                              ตัดสินทันที/ถ้าจั่วได้ 0 และ 4-7 ต้องจั่วเพิ่ม
                            </li>
                            <li>
                              แต้มรวมไพ่สองใบแรกเท่ากับ 6 จั่วได้ 1-5 และ 8-10
                              ตัดสินทันที/ถ้าจั่วได้ 0 และ 6-7 ต้องจั่วเพิ่ม
                            </li>
                            <li>
                              แต้มรวมไพ่สองใบแรกเท่ากับ 7-9 ไม่ต้องจั่วไพ่เพิ่ม
                            </li>
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "whitesomke",
                              }}
                            >
                              เทคนิคเดิมพันบาคาร่า สูตรแทงตามสถิติให้ได้กำไร
                            </a>
                            <br />
                            <br />
                            นักพนันมือใหม่สามารถเรียนรู้เข้าใจพื้นฐานการเล่นไพ่บาคาร่าได้ง่ายหากคุณกำลังมองหาเทคนิคเล่นบาคาร่าแบบวิเคราะห์ไพ่จากสถิติการเล่นก่อนหน้าจะใช้ผลลัพธ์ของเกมมาเป็นต้นแบบช่วยให้สังเกตรูปแบบที่เกิดขึ้นซ้ำๆ
                            กันช่วยให้จับจังหวะและทายผลลัพธ์ของไพ่ตามรูปแบบนั้นง่ายขึ้น
                            โดยสูตรสถิติบาคาร่ามีด้วยกันหลายสูตร ได้แก่
                            สูตรไพ่มังกร, สูตรไพ่ปิงปอง, สูตรไพ่สองตัด,
                            สูตรไพ่สามตัด, สูตรไพ่สี่ตัด
                            มีรายละเอียดวิธีทายผลไพ่ดังนี้
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "whitesomke",
                              }}
                            >
                              สูตรบาคาร่ายอดนิยมของเซียน Baccarat
                            </a>
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "whitesomke",
                              }}
                            >
                              สูตรบาคาร่ามังกร
                            </a>
                            <br />
                            <img
                              width="100%"
                              src="https://www.ufabetcn.com/wp-content/uploads/2019/09/07.jpg.webp"
                            />
                            <br />
                            <br />
                            “ไพ่บาคาร่ามังกร”
                            เป็นรูปแบบสถิติที่มักจะถูกพูดถึงอยู่เสมอและนิยมนำมาใช้ในการทายผลไพ่บาคาร่ามากที่สุด
                            ไพ่มังกรหมายถึงผลลัพธ์ของไพ่ที่มีฝ่ายใดฝ่ายหนึ่งชนะพนันติดต่อกันนับ
                            10 ครั้ง
                            ซึ่งจับสังเกตได้ง่ายเมื่อเห็นแล้วรู้ทันทีว่าถึงคราวต้องวางเดิมพันทางฝั่งนั้นต่อไปมีโอกาสทายผลแม่นยำติดต่อกันหลายตา
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "whitesomke",
                              }}
                            >
                              สูตรบาคาร่าปิงปอง
                            </a>
                            <br />
                            <img
                              width="100%"
                              src="https://www.ufabetcn.com/wp-content/uploads/2019/09/08.jpg.webp"
                            />
                            <br />
                            <br />
                            “ไพ่บาคาร่าปิงปอง”
                            เป็นรูปแบบสถิติที่นิยมเหมือนกันหมายถึงลักษณะไพ่ที่สองฝ่ายสลับกันแพ้ชนะไปเรื่อยๆ
                            เหมือนกับการตีปิงปองโต้ตอบไปมา
                            วิธีการดักแทงไพ่สูตรปิงปองคือแทงสลับข้างกันไปเรื่อย
                            ๆ จนกว่าจะหมดจังหวะไพ่สูตรปิงปอง
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "whitesomke",
                              }}
                            >
                              สูตรบาคาร่าสองตัด
                            </a>
                            <br />
                            <img
                              width="100%"
                              src="https://www.ufabetcn.com/wp-content/uploads/2019/09/09.jpg.webp"
                            />
                            <br />
                            <br />
                            “ไพ่บาคาร่าสองตัด”
                            เป็นรูปแบบสถิติที่สังเกตไม่ง่ายนักหมายถึงลักษณะไพ่ที่ฝ่ายหนึ่งชนะติดกัน
                            2 ครั้งแล้วสลับไปให้อีกฝ่ายชนะ 2 ครั้ง
                            โดยจะแพ้ชนะสลับกันทีละสองครั้งไปเรื่อย ๆ
                            นอกจากนั้นยังมี ไพ่สามตัด ไพ่สี่ตัด ไพ่ห้าตัด
                            ซึ่งจับจังหวะการทายได้ในลักษณะเดียวกันต้องอาศัยประสบการณ์ความชำนาญจากการเข้าเล่นบ่อยๆ
                            <br />
                            <br />
                            เพื่อให้คุ้นเคยกับการเล่นตามสูตรสถิติมากขึ้นแนะนำว่าหลังจากสิ้นสุดจังหวะไพ่มังกรแล้วพบผลลัพธ์แบบไหนซ้ำกันทุกครั้ง
                            ควรดักแทงควบคู่กันไปด้วย
                            เช่นจบไพ่มังกรแล้วพบแต้มเท่าทุกครั้ง
                            เมื่อฝ่ายหนึ่งชนะติดต่อกันเกือบ 10 ครั้ง
                            แล้วให้แทงแต้มเสมอควบคู่กันไปมีโอกาสได้ผลตอบแทนสูงถึง
                            8 เท่าของยอดเดิมพัน
                            สูตรง่ายๆเหล่านี้จะช่วยให้นักพนันเล่นบาคาร่าออนไลน์ได้มีกำไรไม่ต่างจากเซียนตัวจริง
                            บาคาร่า ทำเงินได้ในมือคุณ
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

export default baccarat;
