import React, { useEffect, useState } from 'react';
import { Col, Row, Container, Button, Card, Input, InputGroup, InputGroupAddon, InputGroupText, Form, Label } from 'reactstrap';


const logincrad = () => {

    return (
        <div>
            <Card style={{ padding: '5px', backgroundColor: 'black', border: '1px solid #555', justifyContent: 'center', alignItems: 'center', marginTop: '10px', marginBottom: '10px' }}>
                <span style={{ fontSize: '20px', fontWeight: 'bold', color: "#d6b318" }}>LOGIN UFABET</span>
                <Form style={{ justifyContent: 'center', alignItems: 'center', marginBottom: "10px", marginTop: '10px' }} method="post" action="https://www.ufa6666.com/Default8.aspx?lang=EN-GB">
                    <input type="hidden" name="__EVENTTARGET" id="__EVENTTARGET" value="btnLogin" ></input>
                    <input type="hidden" name="__EVENTARGUMENT" id="__EVENTARGUMENT" value></input>
                    <input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="/wEPDwUKLTc2NjMxOTE5Nw9kFgJmD2QWBgICDxYCHgtwbGFjZWhvbGRlcgUe4LiK4Li34LmI4Lit4Lic4Li54LmJ4LmD4LiK4LmJZAIDDxYCHwAFGOC4o+C4q+C4seC4quC4nOC5iOC4suC4mWQCBA8PFgIeBFRleHQFIeC5gOC4guC5ieC4suC4quC4ueC5iOC4o+C4sOC4muC4mmRkGAEFHl9fQ29udHJvbHNSZXF1aXJlUG9zdEJhY2tLZXlfXxYBBQlidG5Mb2dpbjK0GvGzmtq4/Y17MirZEaYkr5WZJg=="></input>
                    <input type="hidden" type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="BE6BC141"></input>
                    <InputGroup >
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText style={{ maxWidth: '100px' }}>Username :</InputGroupText>
                        </InputGroupAddon>
                        <Input id='textUserName' name="txtUserName" type="text" placeholder="USERNAME" required />
                    </InputGroup>
                    <InputGroup style={{ marginTop: '5px' }}>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText style={{ width: "100%" }} >Password :</InputGroupText>
                        </InputGroupAddon>
                        <Input id="password" name="password" type="password" placeholder="PASSWORD" required />
                    </InputGroup>
                    <Button color="danger" type="submit" style={{ color: 'whitesmoke', backgroundColor: 'red', width: '100%', marginTop: '5px' }}>เข้าสู่ระบบ</Button>
                </Form>
                <Button color="sussces" style={{ color: 'whitesmoke', backgroundColor: 'green', Minwidth: "50%" }}>Add Friends</Button>
                <span style={{ color: 'whitesmoke' }}>
                    PARTNER OF UFABET.COM
                </span>
            </Card>
        </div>
    )
}

export default logincrad;