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

const hilo = () => {
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
                              ไฮโลออนไลน์ UFABET ไม่โกง สมัครเล่นง่ายๆ บนมือถือ
                            </span>
                            <img
                              style={{ width: "100%" }}
                              src="https://www.ufabetcn.com/wp-content/uploads/2019/10/HiLo-01-1024x557.jpg.webp"
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
                            Sicbo ตำนานเกมเดิมพันสู่
                            <a
                              style={{
                                color: "red",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              ไฮโลออนไลน์{" "}
                            </a>
                            โดย ufabet
                            <a
                              style={{
                                color: "red",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              เกมไฮโล{" "}
                            </a>
                            ถือเป็นเกมการพนันที่มีประวัติมาอย่างยาวนานมากกว่าหลายร้อยปี
                            โดยเป็นการนำเข้ามาเล่นในเมืองไทยตั้งแต่สมัยกรุงรัตนโกสินทร์ตอนต้นโดยพ่อค้าชาวจีน
                            ซึ่งในปัจจุบันถือว่ามีความนิยมเล่นเป็นอย่างสูงโดยเฉพาะตามแถบชนบทของประเทศไทย
                            โดยครั้งหนึ่งเคยเกิดบ่อนวิ่งที่จะมีตระเวนเล่นกันไปตามแต่ละตำบลแต่ละอำเภอขึ้นอยู่กับเจ้ามือและคนในพื้นที่ว่าจะเล่นมากน้อยแค่ไหน
                            โดยในบ่อนการพนันทั่วไปไฮโลถือเป็นเกมในลำดับต้นๆ
                            ที่ต้องมีไว้คอยบริการผู้เล่น
                            เพราะรูปแบบการเล่นที่เข้าใจง่ายจึงทำให้ใครหลายคนนิยมชอบ
                            <a
                              style={{
                                color: "red",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              เล่นไฮโล{" "}
                            </a>
                            เป็นอย่างมาก
                            <br />
                            <img
                              width="100%"
                              src="https://www.ufabet-th191.com/img/hilo.jpg"
                            />
                            <br />
                            <br />
                            ศิลปะเขย่าเต๋าและเซียนหูทิพย์กับศิลปะการเขย่าลูกเต๋าที่สามารถจะคาดเดาได้ง่าย
                            ไม่ว่าจะเขย่าถอยหลังดึงกลับ,
                            เขย่าดันไปข้างหน้าล้วนสามารถคาดเดาผลการออกของตัวเลขลูกเต๋าได้
                            เทคนิคการรินถ้วยเพื่อฟังเสียงต่างๆ
                            ที่ทำให้คนที่ฝึกฝนสามารถหากินเป็นเซียนพนันไฮโลได้
                            <br />
                            <br />
                            <img
                              width="100%"
                              src="https://www.ufabetcn.com/wp-content/uploads/2019/10/HiLo-03-1024x557.jpg.webp"
                            />
                            <br />
                            <br />
                            แต่ถึงกระนั้นเจ้ามือก็หาวิธีการโกงผู้เล่นอยู่เสมอ
                            ไม่ว่าจะเป็นรีโมทลูกเต๋า, ลูกเต๋าออกสูง,
                            ลูกเต๋าออกต่ำ สารพัดวิธีที่จะ
                            <a
                              style={{
                                fontWeight: "bold",
                                color: "red",
                              }}
                            >
                              โกงผู้เล่นไฮโล
                            </a>
                            คนอื่นๆ จนทำให้ขาดเสน่ห์ในการเล่นไป
                            <br />
                            <br />
                            แต่ด้วยเทคโนโลยีที่เปลี่ยนไปการนำพนันไฮโลจึงเป็นโจทย์ของเจ้ามือว่าจะทำอย่างไรที่จะนำเกมพนันไฮโลนี้ขึ้นมาอยู่บนโลกออนไลน์โดยปราศจากข้อกังขาว่าไม่มีการโกงอย่างแน่นอน
                            เพราะหากใช้วิธีแบบเดิมๆ คนคงไม่เล่น
                            เพราะหลายคนรู้ว่ามีรีโมทในการปรับเปลี่ยนลูกเต๋าได้
                            ยิ่งเป็นการแทงออนไลน์บนเว็บยูฟ่าเบทด้วยแล้วยิ่งตรวจสอบเจ้ามือลำบากจึงมีการคิดค้นวิธีให้คนเล่นด้วยการกำหนดฝาครอบเป็นแก้วใส
                            พร้อมกล้องซูมให้เห็นลูกเต๋าชัด ๆ
                            แต่ผู้เล่นจะต้องวางเดิมพันก่อน
                            จากนั้นเจ้ามือจะทำการเขย่าโดยใช้ปุ่มกดด้วยกลไกจึงทำให้ลูกเต๋าเด้งไปมาภายในฝาครอบแก้วใสนั้นจนนิ่ง
                            ด้วยวิธีการนี้ถือว่ามีความแฟร์อยู่มาก
                            จึงทำให้นักพนันหลายคนเลือกที่จะเล่นกัน
                            แต่ด้วยวิธีนี้ห้ามเจ้ามือทำการสัมผัสลูกเต๋า
                            ไม่ว่าจะออกหน้าเลขอะไรก็ให้ทำการเขย่าต่อไป
                            ถือว่าเป็นผลดีต่อผู้เล่นไฮโลที่ไม่ต้องกังวลว่าจะโดนโกงได้
                            เพราะบางครั้งการเรียงเลขหน้าก็สามารถที่จะกดรีโมทให้พลิกไปมาได้นั่นเอง
                            แต่ด้วยที่ครอบเป็นแก้วใสทำให้โกงได้ยากขึ้น
                            เพราะถ้าเห็นลูกเต๋ากระตุกผิดปกติเมื่อไรก็ให้เลิกเล่นแค่นั้นเอง
                            ด้วยชื่อเสียงของคาสิโนออนไลน์ที่มีลูกค้าหลายหมื่นคนคงไม่คิดที่จะทุบหม้อข้าวตนเองอย่างแน่นอน
                            ซึ่งคุณสามารถที่จะติดตามและเล่นเกมไฮโลออนไลน์ได้ที่นี่
                            <br />
                            <br />
                            <img
                              width="100%"
                              src="https://www.ufabetcn.com/wp-content/uploads/2019/10/HiLo-05-1024x557.jpg.webp"
                            />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "whitesmoke",
                              }}
                            >
                              เริ่มเล่นไฮโลออนไลน์กับเว็บ ufabet.com
                              พร้อมเงินรางวัลมากมาย เว็บไซต์พนัน
                            </a>
                            <br />
                            <br />
                            UfabetCN
                            คาสิโนออนไลน์ที่ดีที่สุดเปิดให้บริการเกมไฮโลหรือ
                            Sicbo
                            ออนไลน์ทั้งรูปแบบสดและเกมโต๊ะจากต่างประเทศซึ่งทำให้คุณสามารถที่จะเดิมพันได้ตลอด
                            24 ชั่วโมง พร้อมกันนี้ยังมีโหมดความเร็วหรือ Fast
                            Mode
                            เพื่อที่จะทำให้นักเล่นทั้งหลายสามารถที่จะทำกำไรได้รวดเร็วกว่าเดิมโดยมีระยะเวลาการรอที่สั้นลง
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "whitesmoke",
                              }}
                            >
                              วิธีการเล่นซิกโบหรือไฮโลออนไลน์ Sicbo
                            </a>
                            <br />
                            <br />
                            Sicbo หรือไฮโลออนไลน์จะใช้ลูกเต๋าด้วยกันทั้งหมด 3
                            ลูกโดยแต่ละลูกจะมีหน้าเต๋าทั้งหมด 6 ด้านมีเลข 1
                            จนถึงเลข 6
                            กำกับเอาไว้ในแต่ละด้านโดยรูปแบบการเล่นผู้เล่นสามารถที่จะเลือกแทงตามหมายเลขที่ต้องการได้
                            เช่น 1 2 3 4 5 และ 6
                            หรือจะเป็นการเลือกแทงสูงต่ำโดยตัวเลขที่ผลรวมกันตั้งแต่
                            3-10 แต้มนั้นจะถือว่าเป็นแต้มต่ำในขณะที่แต้มตั้งแต่
                            11 จนถึง 18 นั้นจะถือว่าเป็นแต้มสูง
                            พร้อมกันนี้ยังมีการแทงเลขเต็งเลขโต๊ด, คู่-คี่
                            หรือจะเป็นการแทงผลรวมเอาอัตราผลตอบแทนที่สูงขึ้นก็ได้
                            <br />
                            <br />
                            <img
                              width="100%"
                              src="https://www.ufabetcn.com/wp-content/uploads/2019/10/HiLo-06-1024x557.jpg.webp"
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
                              สำหรับการเล่นไฮโลออนไลน์อย่างละเอียดนั้นสามารถดูวิธีการเล่นไฮโลได้ดังนี้
                            </a>
                            <br />
                            <br />
                            <li>
                              Login เข้าเว็บไซต์
                              <a href="/"> ufabet.com</a>
                              <br />
                              แล้วเปลี่ยนภาษาเป็นภาษาไทยจากนั้นเลือกเกมไฮโลหรือ
                              Sicbo
                              โดยคุณสามารถเลือกที่จะเล่นเกมไฮโลในรูปแบบของแทงสดได้โดยมีราคาเล่นขั้นต่ำอยู่ที่ครั้งละ
                              50 บาท หากใครจะเล่นตาละ 10 บาทนั้น
                              แนะนำให้เลือกรูปแบบของเกมโต๊ะซึ่งจะต้องเข้าตั้งแต่ก่อนที่จะเลือกเกม
                            </li>
                            <li>
                              เมื่อเข้าสู่โต๊ะไฮโลตามที่ต้องการแล้วก็สามารถที่จะเดิมพันได้ในทันที
                              หากเข้าไปแล้วยังไม่ทันรอบเดิมพันก็ให้รอสักครู่ก่อนเพื่อให้เกิดการเขย่าลูกเต๋าในตาต่อไปจากนั้นก็แทงตามตัวเลขหรือตามใจที่ต้องการได้เลย
                            </li>
                            <li>
                              เมื่อหมดเวลาวางเดิมพัน
                              เจ้ามือจะกดปุ่มเพื่อเขย่าลูกเต๋าสำหรับเกมไฮโลออนไลน์นั้นจะไม่สามารถโกงการแข่งขันใดๆได้เลยเพราะฝาที่ครอบจะเป็นฝาใสมุมกล้องที่ซูมใกล้จึงทำให้ไม่สามารถจะเปลี่ยนลูกเต๋าใดๆได้
                              โดยการเขย่าเต๋านั้นเจ้ามือจะเป็นคนกดปุ่มให้ลูกเต๋าหมุน
                              โดยผู้เล่นจะต้องเป็นคนวางเดิมพันก่อน
                            </li>
                            <img
                              width="100%"
                              src="https://www.ufabet-th191.com/img/hilo1.jpg"
                            />
                            <br />
                            <li>
                              จากนั้นเจ้ามือถึงจะกดปุ่มทำการเขย่าลูกเต๋าซึ่งผู้เล่นสามารถที่จะมองเห็นลูกเต๋าหมุนไปมาอยู่ภายในภาชนะได้เมื่อผลลัพธ์ที่ออกมาถ้าคุณแทงถูกต้องจะมีแสงขึ้นในกระดานที่คุณแทงแล้วสรุปยอดออกมา
                              หากไม่ถูก เงินเดิมพันของคุณก็จะโดนยึดไปนั่นเอง
                            </li>
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "whitesmoke",
                              }}
                            >
                              อัตราต่อรองการเล่นไฮโลออนไลน์ หรือ ซิกโบ
                            </a>
                            <br />
                            <br />
                            <img
                              width="100%"
                              src="https://www.ufabetcn.com/wp-content/uploads/2019/10/HiLo-08-1024x557.jpg.webp"
                            />
                            <br />
                            <br />
                            สำหรับอัตราต่อรองการจ่ายเงินเดิมพันของซิกโบออนไลน์นั้นจะคล้ายกันกับไฮโลตามบ่อนทั่วไป
                            ดังนี้
                            <br />
                            <br />
                            <ol>
                              <li>
                                แทงเต็งตัวเลข
                                ซึ่งหากคุณทายตัวเลขบนลูกเต๋าโดยแทงเต็งเลข 3
                                ตัวเดียว ถ้าเขย่าลูกเต๋าแล้วออก 3 จำนวน 1 ตัว
                                ก็จะทำให้คุณได้รางวัล 1 เท่า แต่ถ้าเกิดออก 3
                                จำนวน 2 ตัวก็จะได้ 2 เท่า เขย่าออก 3 จำนวน 3 ตัว
                                ก็จะได้ 3 เท่า
                              </li>
                              <li>
                                แทงโต๊ด 2 ตัวเลข เช่น คุณทายว่าเลขที่ออกมี 3 กับ
                                4 เมื่อเขย่าลูกเต๋าออกมาแล้วมี 3 กับ 4
                                ออกมาด้วยก็จะทำให้คุณได้เงินรางวัลถึง 5
                                เท่าเลยทีเดียว
                              </li>
                              <li>
                                แทงสูงหรือแทงต่ำ อัตราการจ่ายจะอยู่ที่ 1
                                เท่าโดยแทงสูงจะเป็นผลแต้มตั้งแต่ 11 จนถึง 18
                                แต้มในขณะที่แทงต่ำจะเป็นแต้มตั้งแต่ 3 แต้ม จนถึง
                                10 แต้ม เป็นต้น
                              </li>
                              <img
                                width="100%"
                                src="https://www.ufabet-th191.com/img/hilo3.jpg"
                              />
                              <li>
                                แทงคู่หรือแทงคี่โดยเป็นการทายว่าคะแนนหรือแต้มลูกเต๋าที่ออกมาทั้ง
                                3 ลูกนั้นรวมกันได้แต้มคู่หรือแต้มคี่เท่านั้น
                                หากทายถูกก็จะได้เงินรางวัล 1 เท่า
                              </li>
                              <li>
                                การแทงลูกเบิ้ล คือการแทงว่าจะมีแต้มเหมือนกัน 2
                                ลูก เช่น ออก 2 จำนวน 2 ลูก
                                ซึ่งจะทำให้คุณได้กำไรอัตราการจ่ายที่ 8 เท่า
                                โดยจะไม่เหมือนกับการแทงเต็งที่จะออกเพียงแค่ลูกละ
                                1 เท่านั้นเอง
                              </li>
                              <li>
                                แทงตอง คือการทายว่าลูกเต๋าจะออกเหมือนกันทั้ง 3
                                ลูก เช่น ออกหน้า 3 ทั้ง 3 ลูก ก็จะมีการจ่ายที่
                                180 เท่าถือว่าเป็นการจ่ายที่เยอะมาก
                              </li>
                              <img
                                width="100%"
                                src="https://www.ufabetcn.com/wp-content/uploads/2019/10/HiLo-10-1024x557.jpg.webp"
                              />
                              <li>
                                แทงจำนวนแต้ม การทายแบบระบุแต้มลงไปเลยว่าเต๋าทั้ง
                                3 ลูกนั้นเขย่าออกมาแล้วผลรวมของแต้มทั้ง 3
                                จะตรงกับเท่าไรซึ่งจะมีอัตราการจ่ายจะแตกต่างกันไปดังนี้
                              </li>
                            </ol>
                            <br />
                            <ul>
                              <li>แต้มรวม 9, 10, 11, 12 ทายถูกจ่าย 6 เท่า</li>
                              <li>แต้มรวม 8, 13 ทายถูกจ่าย 8 เท่า</li>
                              <li>แต้มรวม 7, 14 ทายถูกจ่าย 12 เท่า</li>
                              <li>แต้มรวม 6, 15 ทายถูกจ่าย 18 เท่า</li>
                              <li>แต้มรวม 5, 16 ทายถูกจ่าย 30 เท่า</li>
                              <li>แต้มรวม 4, 17 ทายถูกจ่าย 60 เท่า</li>
                            </ul>
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "whitesmoke",
                              }}
                            >
                              อัตราต่อรองการเล่นไฮโลออนไลน์ หรือ ซิกโบ
                            </a>
                            <br />
                            <br />
                            เทคนิคทายแต้ม
                            ด้วยอัตราการทายแต้มที่ให้ผลตอบแทนหรือได้เงินที่สูงซึ่งหากถูกมาก็คุ้มค่าแก่การลงทุนโดยวิธีการแทงแบบนี้จำเป็นอย่างยิ่งที่คุณจะต้องมีกระดาษและปากกาเพื่อจดแต้มและสถิติการออก
                            โดยปกติแล้วแต้มที่ไฮโลมักจะออกคือ 9, 10, 11, 12
                            ด้วยอัตราการจ่ายถึง 6 เท่า
                            ทำให้ใช้เงินลงทุนที่น้อยอีกทั้งสถิติการออกเลข 3-4
                            มีสูงมาก ส่งผลให้แค่ต้องการอีกแค่ 2, 3, 4, 5
                            แต้มเท่านั้นเพื่อให้ออกได้ตามแต้มที่ต้องการจึงจำเป็นที่คุณต้องคอยจดสถิติในการออกของเต๋าแต่ละตาเพื่อให้ง่ายต่อการวิเคราะห์ให้ได้เงินนั่นเอง
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "whitesmoke",
                              }}
                            >
                              ไฮโลออนไลน์กับไฮโลพื้นบ้านแตกต่างกันอย่างไร
                            </a>
                            <br />
                            <br />
                            ด้วยไฮโลพื้นบ้านในการที่จะวางเดิมพันนั้นกระดาษที่กางเบอร์จะมีขนาดเล็กเพราะต้องคอยพับเก็บจึงทำให้รูปแบบการแทงมีน้อยกว่าแบบออนไลน์
                            อีกทั้งการแทงแบบออนไลน์จะให้ผู้เล่นแทงก่อนที่จะเขย่าอีกทั้งจะไม่มีการวางเรียงเต๋าจึงทำให้ยากที่จะคาดเดาแต้มได้
                            พร้อมกันนี้ยังมีฝาครอบที่เป็นแก้วใสทำให้มองเห็นแต้มได้ชัด
                            ผิดกับไฮโลบ้านที่ต้องเขย่าก่อนค่อยแทงและที่สำคัญฝาครอบทึบจึงทำให้มองไม่เห็นซึ่งอาจมีการเปลี่ยนเต๋าภายในได้นั่นเอง
                            <br />
                            <br />
                            ด้วยรูปแบบการเล่นไฮโลออนไลน์แบบสดนั้นจึงปราศจากกลโกงอย่างแน่นอน
                            ใครพร้อมที่จะบวกก็สามารถมาสมัครเป็น สมัครสมาชิก
                            ufabet ได้เลย ทั้งโบนัสแรกเข้า
                            โบนัสพิเศษและโปรโมชั่นต่าง ๆ
                            ที่รอคุณอยู่รีบเข้ามาสมัครเพื่อรับเอาโบนัสก่อนที่จะเล่นจริงไปก่อนได้เลย
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
                              ไฮโลออนไลน์ UFABET ไม่โกง สมัครเล่นง่ายๆ บนมือถือ
                            </span>
                            <img
                              style={{ width: "100%" }}
                              src="https://www.ufabetcn.com/wp-content/uploads/2019/10/HiLo-01-1024x557.jpg.webp"
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
                            Sicbo ตำนานเกมเดิมพันสู่
                            <a
                              style={{
                                color: "red",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              ไฮโลออนไลน์{" "}
                            </a>
                            โดย ufabet
                            <a
                              style={{
                                color: "red",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              เกมไฮโล{" "}
                            </a>
                            ถือเป็นเกมการพนันที่มีประวัติมาอย่างยาวนานมากกว่าหลายร้อยปี
                            โดยเป็นการนำเข้ามาเล่นในเมืองไทยตั้งแต่สมัยกรุงรัตนโกสินทร์ตอนต้นโดยพ่อค้าชาวจีน
                            ซึ่งในปัจจุบันถือว่ามีความนิยมเล่นเป็นอย่างสูงโดยเฉพาะตามแถบชนบทของประเทศไทย
                            โดยครั้งหนึ่งเคยเกิดบ่อนวิ่งที่จะมีตระเวนเล่นกันไปตามแต่ละตำบลแต่ละอำเภอขึ้นอยู่กับเจ้ามือและคนในพื้นที่ว่าจะเล่นมากน้อยแค่ไหน
                            โดยในบ่อนการพนันทั่วไปไฮโลถือเป็นเกมในลำดับต้นๆ
                            ที่ต้องมีไว้คอยบริการผู้เล่น
                            เพราะรูปแบบการเล่นที่เข้าใจง่ายจึงทำให้ใครหลายคนนิยมชอบ
                            <a
                              style={{
                                color: "red",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              เล่นไฮโล{" "}
                            </a>
                            เป็นอย่างมาก
                            <br />
                            <img
                              width="100%"
                              src="https://www.ufabet-th191.com/img/hilo.jpg"
                            />
                            <br />
                            <br />
                            ศิลปะเขย่าเต๋าและเซียนหูทิพย์กับศิลปะการเขย่าลูกเต๋าที่สามารถจะคาดเดาได้ง่าย
                            ไม่ว่าจะเขย่าถอยหลังดึงกลับ,
                            เขย่าดันไปข้างหน้าล้วนสามารถคาดเดาผลการออกของตัวเลขลูกเต๋าได้
                            เทคนิคการรินถ้วยเพื่อฟังเสียงต่างๆ
                            ที่ทำให้คนที่ฝึกฝนสามารถหากินเป็นเซียนพนันไฮโลได้
                            <br />
                            <br />
                            <img
                              width="100%"
                              src="https://www.ufabetcn.com/wp-content/uploads/2019/10/HiLo-03-1024x557.jpg.webp"
                            />
                            <br />
                            <br />
                            แต่ถึงกระนั้นเจ้ามือก็หาวิธีการโกงผู้เล่นอยู่เสมอ
                            ไม่ว่าจะเป็นรีโมทลูกเต๋า, ลูกเต๋าออกสูง,
                            ลูกเต๋าออกต่ำ สารพัดวิธีที่จะ
                            <a
                              style={{
                                fontWeight: "bold",
                                color: "red",
                              }}
                            >
                              โกงผู้เล่นไฮโล
                            </a>
                            คนอื่นๆ จนทำให้ขาดเสน่ห์ในการเล่นไป
                            <br />
                            <br />
                            แต่ด้วยเทคโนโลยีที่เปลี่ยนไปการนำพนันไฮโลจึงเป็นโจทย์ของเจ้ามือว่าจะทำอย่างไรที่จะนำเกมพนันไฮโลนี้ขึ้นมาอยู่บนโลกออนไลน์โดยปราศจากข้อกังขาว่าไม่มีการโกงอย่างแน่นอน
                            เพราะหากใช้วิธีแบบเดิมๆ คนคงไม่เล่น
                            เพราะหลายคนรู้ว่ามีรีโมทในการปรับเปลี่ยนลูกเต๋าได้
                            ยิ่งเป็นการแทงออนไลน์บนเว็บยูฟ่าเบทด้วยแล้วยิ่งตรวจสอบเจ้ามือลำบากจึงมีการคิดค้นวิธีให้คนเล่นด้วยการกำหนดฝาครอบเป็นแก้วใส
                            พร้อมกล้องซูมให้เห็นลูกเต๋าชัด ๆ
                            แต่ผู้เล่นจะต้องวางเดิมพันก่อน
                            จากนั้นเจ้ามือจะทำการเขย่าโดยใช้ปุ่มกดด้วยกลไกจึงทำให้ลูกเต๋าเด้งไปมาภายในฝาครอบแก้วใสนั้นจนนิ่ง
                            ด้วยวิธีการนี้ถือว่ามีความแฟร์อยู่มาก
                            จึงทำให้นักพนันหลายคนเลือกที่จะเล่นกัน
                            แต่ด้วยวิธีนี้ห้ามเจ้ามือทำการสัมผัสลูกเต๋า
                            ไม่ว่าจะออกหน้าเลขอะไรก็ให้ทำการเขย่าต่อไป
                            ถือว่าเป็นผลดีต่อผู้เล่นไฮโลที่ไม่ต้องกังวลว่าจะโดนโกงได้
                            เพราะบางครั้งการเรียงเลขหน้าก็สามารถที่จะกดรีโมทให้พลิกไปมาได้นั่นเอง
                            แต่ด้วยที่ครอบเป็นแก้วใสทำให้โกงได้ยากขึ้น
                            เพราะถ้าเห็นลูกเต๋ากระตุกผิดปกติเมื่อไรก็ให้เลิกเล่นแค่นั้นเอง
                            ด้วยชื่อเสียงของคาสิโนออนไลน์ที่มีลูกค้าหลายหมื่นคนคงไม่คิดที่จะทุบหม้อข้าวตนเองอย่างแน่นอน
                            ซึ่งคุณสามารถที่จะติดตามและเล่นเกมไฮโลออนไลน์ได้ที่นี่
                            <br />
                            <br />
                            <img
                              width="100%"
                              src="https://www.ufabetcn.com/wp-content/uploads/2019/10/HiLo-05-1024x557.jpg.webp"
                            />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "whitesmoke",
                              }}
                            >
                              เริ่มเล่นไฮโลออนไลน์กับเว็บ ufabet.com
                              พร้อมเงินรางวัลมากมาย เว็บไซต์พนัน
                            </a>
                            <br />
                            <br />
                            UfabetCN
                            คาสิโนออนไลน์ที่ดีที่สุดเปิดให้บริการเกมไฮโลหรือ
                            Sicbo
                            ออนไลน์ทั้งรูปแบบสดและเกมโต๊ะจากต่างประเทศซึ่งทำให้คุณสามารถที่จะเดิมพันได้ตลอด
                            24 ชั่วโมง พร้อมกันนี้ยังมีโหมดความเร็วหรือ Fast
                            Mode
                            เพื่อที่จะทำให้นักเล่นทั้งหลายสามารถที่จะทำกำไรได้รวดเร็วกว่าเดิมโดยมีระยะเวลาการรอที่สั้นลง
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "whitesmoke",
                              }}
                            >
                              วิธีการเล่นซิกโบหรือไฮโลออนไลน์ Sicbo
                            </a>
                            <br />
                            <br />
                            Sicbo หรือไฮโลออนไลน์จะใช้ลูกเต๋าด้วยกันทั้งหมด 3
                            ลูกโดยแต่ละลูกจะมีหน้าเต๋าทั้งหมด 6 ด้านมีเลข 1
                            จนถึงเลข 6
                            กำกับเอาไว้ในแต่ละด้านโดยรูปแบบการเล่นผู้เล่นสามารถที่จะเลือกแทงตามหมายเลขที่ต้องการได้
                            เช่น 1 2 3 4 5 และ 6
                            หรือจะเป็นการเลือกแทงสูงต่ำโดยตัวเลขที่ผลรวมกันตั้งแต่
                            3-10 แต้มนั้นจะถือว่าเป็นแต้มต่ำในขณะที่แต้มตั้งแต่
                            11 จนถึง 18 นั้นจะถือว่าเป็นแต้มสูง
                            พร้อมกันนี้ยังมีการแทงเลขเต็งเลขโต๊ด, คู่-คี่
                            หรือจะเป็นการแทงผลรวมเอาอัตราผลตอบแทนที่สูงขึ้นก็ได้
                            <br />
                            <br />
                            <img
                              width="100%"
                              src="https://www.ufabetcn.com/wp-content/uploads/2019/10/HiLo-06-1024x557.jpg.webp"
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
                              สำหรับการเล่นไฮโลออนไลน์อย่างละเอียดนั้นสามารถดูวิธีการเล่นไฮโลได้ดังนี้
                            </a>
                            <br />
                            <br />
                            <li>
                              Login เข้าเว็บไซต์
                              <a href="/"> ufabet.com</a>
                              <br />
                              แล้วเปลี่ยนภาษาเป็นภาษาไทยจากนั้นเลือกเกมไฮโลหรือ
                              Sicbo
                              โดยคุณสามารถเลือกที่จะเล่นเกมไฮโลในรูปแบบของแทงสดได้โดยมีราคาเล่นขั้นต่ำอยู่ที่ครั้งละ
                              50 บาท หากใครจะเล่นตาละ 10 บาทนั้น
                              แนะนำให้เลือกรูปแบบของเกมโต๊ะซึ่งจะต้องเข้าตั้งแต่ก่อนที่จะเลือกเกม
                            </li>
                            <li>
                              เมื่อเข้าสู่โต๊ะไฮโลตามที่ต้องการแล้วก็สามารถที่จะเดิมพันได้ในทันที
                              หากเข้าไปแล้วยังไม่ทันรอบเดิมพันก็ให้รอสักครู่ก่อนเพื่อให้เกิดการเขย่าลูกเต๋าในตาต่อไปจากนั้นก็แทงตามตัวเลขหรือตามใจที่ต้องการได้เลย
                            </li>
                            <li>
                              เมื่อหมดเวลาวางเดิมพัน
                              เจ้ามือจะกดปุ่มเพื่อเขย่าลูกเต๋าสำหรับเกมไฮโลออนไลน์นั้นจะไม่สามารถโกงการแข่งขันใดๆได้เลยเพราะฝาที่ครอบจะเป็นฝาใสมุมกล้องที่ซูมใกล้จึงทำให้ไม่สามารถจะเปลี่ยนลูกเต๋าใดๆได้
                              โดยการเขย่าเต๋านั้นเจ้ามือจะเป็นคนกดปุ่มให้ลูกเต๋าหมุน
                              โดยผู้เล่นจะต้องเป็นคนวางเดิมพันก่อน
                            </li>
                            <img
                              width="100%"
                              src="https://www.ufabet-th191.com/img/hilo1.jpg"
                            />
                            <br />
                            <li>
                              จากนั้นเจ้ามือถึงจะกดปุ่มทำการเขย่าลูกเต๋าซึ่งผู้เล่นสามารถที่จะมองเห็นลูกเต๋าหมุนไปมาอยู่ภายในภาชนะได้เมื่อผลลัพธ์ที่ออกมาถ้าคุณแทงถูกต้องจะมีแสงขึ้นในกระดานที่คุณแทงแล้วสรุปยอดออกมา
                              หากไม่ถูก เงินเดิมพันของคุณก็จะโดนยึดไปนั่นเอง
                            </li>
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "whitesmoke",
                              }}
                            >
                              อัตราต่อรองการเล่นไฮโลออนไลน์ หรือ ซิกโบ
                            </a>
                            <br />
                            <br />
                            <img
                              width="100%"
                              src="https://www.ufabetcn.com/wp-content/uploads/2019/10/HiLo-08-1024x557.jpg.webp"
                            />
                            <br />
                            <br />
                            สำหรับอัตราต่อรองการจ่ายเงินเดิมพันของซิกโบออนไลน์นั้นจะคล้ายกันกับไฮโลตามบ่อนทั่วไป
                            ดังนี้
                            <br />
                            <br />
                            <ol>
                              <li>
                                แทงเต็งตัวเลข
                                ซึ่งหากคุณทายตัวเลขบนลูกเต๋าโดยแทงเต็งเลข 3
                                ตัวเดียว ถ้าเขย่าลูกเต๋าแล้วออก 3 จำนวน 1 ตัว
                                ก็จะทำให้คุณได้รางวัล 1 เท่า แต่ถ้าเกิดออก 3
                                จำนวน 2 ตัวก็จะได้ 2 เท่า เขย่าออก 3 จำนวน 3 ตัว
                                ก็จะได้ 3 เท่า
                              </li>
                              <li>
                                แทงโต๊ด 2 ตัวเลข เช่น คุณทายว่าเลขที่ออกมี 3 กับ
                                4 เมื่อเขย่าลูกเต๋าออกมาแล้วมี 3 กับ 4
                                ออกมาด้วยก็จะทำให้คุณได้เงินรางวัลถึง 5
                                เท่าเลยทีเดียว
                              </li>
                              <li>
                                แทงสูงหรือแทงต่ำ อัตราการจ่ายจะอยู่ที่ 1
                                เท่าโดยแทงสูงจะเป็นผลแต้มตั้งแต่ 11 จนถึง 18
                                แต้มในขณะที่แทงต่ำจะเป็นแต้มตั้งแต่ 3 แต้ม จนถึง
                                10 แต้ม เป็นต้น
                              </li>
                              <img
                                width="100%"
                                src="https://www.ufabet-th191.com/img/hilo3.jpg"
                              />
                              <li>
                                แทงคู่หรือแทงคี่โดยเป็นการทายว่าคะแนนหรือแต้มลูกเต๋าที่ออกมาทั้ง
                                3 ลูกนั้นรวมกันได้แต้มคู่หรือแต้มคี่เท่านั้น
                                หากทายถูกก็จะได้เงินรางวัล 1 เท่า
                              </li>
                              <li>
                                การแทงลูกเบิ้ล คือการแทงว่าจะมีแต้มเหมือนกัน 2
                                ลูก เช่น ออก 2 จำนวน 2 ลูก
                                ซึ่งจะทำให้คุณได้กำไรอัตราการจ่ายที่ 8 เท่า
                                โดยจะไม่เหมือนกับการแทงเต็งที่จะออกเพียงแค่ลูกละ
                                1 เท่านั้นเอง
                              </li>
                              <li>
                                แทงตอง คือการทายว่าลูกเต๋าจะออกเหมือนกันทั้ง 3
                                ลูก เช่น ออกหน้า 3 ทั้ง 3 ลูก ก็จะมีการจ่ายที่
                                180 เท่าถือว่าเป็นการจ่ายที่เยอะมาก
                              </li>
                              <img
                                width="100%"
                                src="https://www.ufabetcn.com/wp-content/uploads/2019/10/HiLo-10-1024x557.jpg.webp"
                              />
                              <li>
                                แทงจำนวนแต้ม การทายแบบระบุแต้มลงไปเลยว่าเต๋าทั้ง
                                3 ลูกนั้นเขย่าออกมาแล้วผลรวมของแต้มทั้ง 3
                                จะตรงกับเท่าไรซึ่งจะมีอัตราการจ่ายจะแตกต่างกันไปดังนี้
                              </li>
                            </ol>
                            <br />
                            <ul>
                              <li>แต้มรวม 9, 10, 11, 12 ทายถูกจ่าย 6 เท่า</li>
                              <li>แต้มรวม 8, 13 ทายถูกจ่าย 8 เท่า</li>
                              <li>แต้มรวม 7, 14 ทายถูกจ่าย 12 เท่า</li>
                              <li>แต้มรวม 6, 15 ทายถูกจ่าย 18 เท่า</li>
                              <li>แต้มรวม 5, 16 ทายถูกจ่าย 30 เท่า</li>
                              <li>แต้มรวม 4, 17 ทายถูกจ่าย 60 เท่า</li>
                            </ul>
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "whitesmoke",
                              }}
                            >
                              อัตราต่อรองการเล่นไฮโลออนไลน์ หรือ ซิกโบ
                            </a>
                            <br />
                            <br />
                            เทคนิคทายแต้ม
                            ด้วยอัตราการทายแต้มที่ให้ผลตอบแทนหรือได้เงินที่สูงซึ่งหากถูกมาก็คุ้มค่าแก่การลงทุนโดยวิธีการแทงแบบนี้จำเป็นอย่างยิ่งที่คุณจะต้องมีกระดาษและปากกาเพื่อจดแต้มและสถิติการออก
                            โดยปกติแล้วแต้มที่ไฮโลมักจะออกคือ 9, 10, 11, 12
                            ด้วยอัตราการจ่ายถึง 6 เท่า
                            ทำให้ใช้เงินลงทุนที่น้อยอีกทั้งสถิติการออกเลข 3-4
                            มีสูงมาก ส่งผลให้แค่ต้องการอีกแค่ 2, 3, 4, 5
                            แต้มเท่านั้นเพื่อให้ออกได้ตามแต้มที่ต้องการจึงจำเป็นที่คุณต้องคอยจดสถิติในการออกของเต๋าแต่ละตาเพื่อให้ง่ายต่อการวิเคราะห์ให้ได้เงินนั่นเอง
                            <br />
                            <br />
                            <a
                              style={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "whitesmoke",
                              }}
                            >
                              ไฮโลออนไลน์กับไฮโลพื้นบ้านแตกต่างกันอย่างไร
                            </a>
                            <br />
                            <br />
                            ด้วยไฮโลพื้นบ้านในการที่จะวางเดิมพันนั้นกระดาษที่กางเบอร์จะมีขนาดเล็กเพราะต้องคอยพับเก็บจึงทำให้รูปแบบการแทงมีน้อยกว่าแบบออนไลน์
                            อีกทั้งการแทงแบบออนไลน์จะให้ผู้เล่นแทงก่อนที่จะเขย่าอีกทั้งจะไม่มีการวางเรียงเต๋าจึงทำให้ยากที่จะคาดเดาแต้มได้
                            พร้อมกันนี้ยังมีฝาครอบที่เป็นแก้วใสทำให้มองเห็นแต้มได้ชัด
                            ผิดกับไฮโลบ้านที่ต้องเขย่าก่อนค่อยแทงและที่สำคัญฝาครอบทึบจึงทำให้มองไม่เห็นซึ่งอาจมีการเปลี่ยนเต๋าภายในได้นั่นเอง
                            <br />
                            <br />
                            ด้วยรูปแบบการเล่นไฮโลออนไลน์แบบสดนั้นจึงปราศจากกลโกงอย่างแน่นอน
                            ใครพร้อมที่จะบวกก็สามารถมาสมัครเป็น สมัครสมาชิก
                            ufabet ได้เลย ทั้งโบนัสแรกเข้า
                            โบนัสพิเศษและโปรโมชั่นต่าง ๆ
                            ที่รอคุณอยู่รีบเข้ามาสมัครเพื่อรับเอาโบนัสก่อนที่จะเล่นจริงไปก่อนได้เลย
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

export default hilo;
