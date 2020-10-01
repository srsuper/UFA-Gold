import React, { useEffect, useState } from 'react';
import { Col, Row, Container, Button, Card, Input, InputGroup, InputGroupAddon, InputGroupText, Label, CardImg } from 'reactstrap';
import LoginCard from './logincard'
import BannerF from '../img/banner-footer.jpg'
import game1pix from '../img/game1.jpg'
import game2pix from '../img/game2.jpg'
import game3pix from '../img/game3.jpg'

const Login = () => {

    return (
        <div style={{ backgroundColor: 'black' }} >
            <Container fluid={true} style={{ maxWidth: '100vh' }}>
                <Row style={{ backgroundColor: 'black', height: '23vh' }}>
                    <Col style={{ backgroundColor: 'red' }}>
                        <h1>Header</h1>
                    </Col>
                </Row>
                <Row>
                    <Col style={{ backgroundColor: 'black', height: '100%' }}>
                        <Row style={{ flex: 'display', alignItems: 'center', justifyContent: 'center', backgroundColor: 'gold', height: '15vh' }}>
                            <Col xs="4" >
                                <Card style={{ border: '1px solid #555' }}>
                                    <CardImg src={game1pix}>
                                    </CardImg>
                                </Card>
                            </Col>
                            <Col xs="4" >
                                <Card style={{ border: '1px solid #555' }}>
                                    <CardImg src={game2pix}>
                                    </CardImg>
                                </Card>
                            </Col>
                            <Col xs="4" >
                                <Card style={{ border: '1px solid #555' }}>
                                    <CardImg src={game3pix}>
                                    </CardImg>
                                </Card>
                            </Col>

                        </Row>
                        <Row style={{ justifyItems: 'center', flex: "display", flexWrap: 'wrap-reverse' }}>
                            <Col sm="8" style={{ backgroundColor: 'black' }}>
                                <Card style={{ border: '1px solid #555', marginTop: '10px', marginBottom: '10px', backgroundColor: '#141414' }}>
                                    <span style={{ margin: '20px', marginBottom: '5px', fontSize: '20px', fontWeight: 'bold', color: "#d6b318" }}>
                                        แทงบอลออนไลน์ UFABET ยูฟ่าเบท | UFABET.COM
                                    </span>
                                    <Label style={{ margin: '20px', marginTop: '5px', color: 'whitesmoke' }}>
                                        ตัวแทนที่ได้รับสิขสิทธิ์อย่างเป็นทางการจาก UFABET ยูฟ่าเบท เว็บแทงบอลออนไลน์ ที่ได้มาตรฐานระดับโลกที่ดี
                                        ที่สุดในประเทศไทย ท่านสามารถเดิมพันกีฬาออนไลน์ แทงบอลออนไลน์ บอลสเต็ป บอลชุด<br /> บาคาร่า คาสิโนออนไลน์
                                    หวย มวย ได้ทุกชนิดโดยเปิดราคามากกว่าเจ้าอื่น สะดวกสบายยิ่งขึ้นสามารถวางเดิมพันได้ทุกที่ทุกเวลา
                                    รองรับมือถือทุกรุ่นทุกระบบ และที่สำคัญเป็นภาษาไทยทั้งระบบ<br />
                                        <br />

                                    เว็บไซต์ยูฟ่าเบท UFABET มีความปลอดภัยมาตรฐานระดับโลก การป้องกันข้อมูลมากกว่า 10 ชั้น ทำให้ท่านลูกค้า
                                    ไม่ต้องกังวลกับความปลอดภัยด้านข้อมูลส่วนตัว ที่รองรับการพนันบอลออนไลน์ ผ่านอินเตอร์เน็ต และคาสิโน
                                    ออนไลน์ที่มีให้เลือกมากกว่า 1000 เกมส์ พร้อมทั้งยังมีคาสิโนที่ถ่ายทอดสดตลอด 24 ชั่วโมง พร้อมโปรโมชั่นมากมาย
                                    UFABET มีความยินดีให้บริการทุกท่านตลอด 24 ชั่วโมง กับทีมงานมืออาชีพพร้อมแก้ไขปัญหาและรับใช้
                                    ทุกท่านในการฝากถอนภายใน 5 นาที <br />
                                    </Label>
                                </Card>
                                <Card style={{ border: '1px solid #555', marginBottom: '10px', height: '18vh', backgroundColor: '#141414' }}>
                                    <span style={{ color: 'whitesmoke' }}>
                                        ขั้นตอน
                                    </span>
                                </Card>
                                <Card style={{ border: '1px solid #555', marginBottom: '10px', backgroundColor: '#141414' }}>

                                    <span style={{ margin: '20px', marginBottom: '5px', fontSize: '20px', fontWeight: 'bold', color: "#d6b318" }}>
                                        UFABETCN.COM (UFABET) พนันและแทงบอลออนไลน์ที่ดีที่สุด
                                    </span>
                                    <Label style={{ margin: '20px', marginTop: '5px', color: 'whitesmoke' }}>
                                        UFABET ในปัจจุบันนั้นเว็บพนันออนไลท์นั้นเกิดขึ้นอย่างแพร่หลาย และมีมากมายไห้ลูกค้าได้เลือกหาที่จะเล่นกัน แต่วันนี้เราจะมาแนะนำเว็บไซค์น้องใหม่ล่าสุดสดๆ ร้อนๆ นั้นก็คือ
                                        เว็บไซต์น้องใหม่มาแรงแซงทุกเว็บ ของยุคนี้ สีสันสดใส เข้าใจง่าย ตัวหนังสือชัดเจน รองรับหลายภาษา รวมถึงภาษาไทย เรียบง่ายไม่ยุ่งยาก คัดสรรค์กีฬามามากมาย <br />
                                        <br />
                                        ไม่ว่าจะเป็น ฟุตบอล บาสเกตบอล เทนนิส วอลเล่ย์บอล แม้แต่แบตมินตันก็ยังมีไห้ลูกค้าได้เสี่ยงโชคกัน ในส่วนของฟุตบอลนั้นมีฟุตบอลๆหลากหลายประเทศ ลีคต่างๆ มีไห้เล่นกันเยอะมาก
                                        ในส่วนของฟุตบอลไทยนั้นทางเว็บก็ยังใส่ไว้ไห้ลูกค้าได้เล่นกัน ลูกค้าจะพบกับการเดิมพันหลากหลายทำไห้คุณเพลิดเพลินและยังได้รับส่วนลดการเดิมพันซึ่งจะทำไห้ได้รับเงินเป็นจำนวนเงินที่มากขึ้นกว่าการเดิมพันที่เกิดขึ้นจริง<br />
                                        <br />
                                        การแทงบอลออนไลน์สามารถเลือกการแทงได้หลายแบบ เช่น การแทงแบบราคาแฮนดิแคป แทงสกอร์สูงต่ำ แทงจำนวนแตะมุม และการแทงใบเหลืองใบแดง สามาถเล่นบอลสดได้ตลอด 90 นาทีทำให้ลูกค้าได้รับความได้เปรียบในการแทงบอลออนไลน์เป็นอย่างมาก โดยที่ UFABET (ยูฟ่าเบท) ได้เปิดอัตราต่อรองทุกรูปแบบทุกราคาต่อรอง<br />
                                    </Label>
                                    <span style={{ margin: '20px', marginBottom: '5px', fontSize: '20px', fontWeight: 'bold', color: "#d6b318" }}>
                                        สมัครยูฟ่าเบท พร้อมให้บริการ UFA เว็บพนันออนไลน์ 24 ชั่วโมง 365 วัน
                                    </span>
                                    <Label style={{ margin: '20px', marginTop: '5px', color: 'whitesmoke' }}>
                                        ยูฟ่าเบท เว็บให้บริการพนันออนไลน์ ที่ได้รับการยอมรับจากทั่วโลก เราพร้อมให้บริการเว็บพนันออนไลน์ คุณสามารถสมัครยูฟ่าเบท เพื่อเข้าใช้บริการระบบต่างๆ อาทิเช่น บาคาร่ายูฟ่า และ ยูฟ่าสล็อต  คุณสามารถสมัครยูฟ่า กับทางทีมงาน UFA เว็บตรงไม่ผ่านเอเย่นต์ได้หลากหลายช่องทาง เช่น ทางหน้าเว็บไซต์ โดยกรอกรายละเอียดการสมัครด้วยตัวเอง<br />
                                        <br />
                                        เพื่อความสะดวกของและป้องกันปัญหาการใช้งาน เรายังมีช่องทางการเข้าใช้งาน UFA ที่คอยอัพเดท ทางเข้ายูฟ่าเบท ที่ช่วยให้สมาชิกที่สมัครเข้ามา สามารถเข้าเล่นได้ตลอด 24 ชั่วโมง 365 วัน โดยไม่ติดขัด ลิ้งเข้าเว็บไซต์ ufabet หลัก เช่น www.ufabet.com, www.betufa.com และ
                                        ลิ้งเข้าระบบ ufabet รองอื่นๆอีกมากมาย เช่น www.ufabet9999.com, www.ufabet7777.com, www.ufabet6666.com เป็นต้น<br />
                                        <br />
                                        สมัคร ufabet ออนไลน์ กับเว็บไซต์ยอดนิยม เช่น ยูฟ่าเบท88888, ยูฟ่าเบท168, ยูฟ่าเบท365, ยูฟ่าเบท777, ยูฟ่า191 และ ยูฟ่า168
                                        หรือคุณสามารถ สมัครยูฟ่า เพื่อเล่น คาสิโนออนไลน์ บาคาร่า สล๊อต แทงบอลออนไลน์ หรือ กีฬาอื่นๆ www.ufabet.com เริ่มเดิมพัน พันออนไลน์ มั่นคงปลอดภัย<br />
                                    </Label>
                                    <span style={{ margin: '20px', marginBottom: '5px', fontSize: '20px', fontWeight: 'bold', color: "#d6b318" }}>
                                        สมัครบาคาร่า 888 ufabet สมัครเว็บบาคาร่า 1688
                                    </span>
                                    <Label style={{ margin: '20px', marginTop: '5px', color: 'whitesmoke' }}>
                                        สมัครบาคาร่า เกมส์คาสิโนออนไลน์ กับ ufabet.com เว็บคาสิโนยอดนิยมที่ได้รับการยอมรับจากทั่วโลก ถ้าคุณเคย สมัครเว็บบาคาร่า อื่นๆมาแล้ว อาทิเช่น สมัคร Gclub ก็ไม่ยากเลยที่จะลองมา สมัครเล่นบาคาร่า กับยูฟ่าเบท ซึ่งมีเกมส์ไพ่ในรูปแบบต่างๆให้ได้เลือกเล่นมากมาย เช่น Sexy Baccarat ซึ่งคนแจกไพ่จะแต่งตัวเซ็กซี่ และมีท่าเต้นที่สนุกสนานช่วยเพิ่มความเพลิดเพลินและเพิ่มสีสันในการเล่น<br />
                                        <br />
                                    </Label>
                                    <span style={{ margin: '20px', marginBottom: '5px', fontSize: '20px', fontWeight: 'bold', color: "#d6b318" }}>
                                        สมัคร ufabet เว็บแทงบอล vip 888 โปรโมชั่น ดี คืนยอดเสีย ทุกเดือน
                                    </span>
                                    <Label style={{ margin: '20px', marginTop: '5px', color: 'whitesmoke' }}>
                                        นอกจากนี้เว็บ ufabetcn ยังเป็นตัวแทนที่ได้รับการแต่งตั้งจาก UFABET เช่นเดียวกับเว็บอื่นๆในเครือเช่น UFABET365, UFA168, UFABET168, UFA1688, UFA888, UFA69, UFABET888, UFA678, UFABET777, UFABET888, UFA9999, UFA7777, UFA191 เป็นต้น เรามีโปรโมชั่น ufabet คืนยอดเสีย 5% ทุกวันที่ 1 ของทุกเดือน <br />
                                    </Label>
                                </Card>
                            </Col>
                            <Col >
                                <LoginCard />
                            </Col>
                        </Row>
                        <Col>
                            <Row style={{ height: '35vh', backgroundColor: 'darkgoldenrod' }}>
                                <h1>Promotion 1</h1>
                            </Row>
                            <Row style={{ height: '35vh', backgroundColor: 'darkred' }}>
                                <h1>Promotion 2</h1>
                            </Row>
                            <Row style={{ height: '35vh', backgroundColor: 'deeppink' }}>
                                <h1>Promotion 3</h1>
                            </Row>
                        </Col>
                    </Col>
                </Row>
                <Row>
                    <Col style={{ backgroundImage: `url(${BannerF})`, minHeight: '6vh' }}>

                    </Col>
                </Row>
            </Container >
        </div >
    )
}

export default Login;