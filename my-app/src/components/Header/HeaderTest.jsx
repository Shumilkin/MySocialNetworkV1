import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {connect} from "react-redux";
import {takeLogoutData} from "../../redux/auth-reducer";
import s from "./header.module.css";
import * as React from "react";
import HeaderDropDown from "./HeaderDropdown";
import logo from "../../media/logo/Zeronet_logo.png";
import {FaUserFriends} from "react-icons/fa";
import {BiMessageRounded} from "react-icons/bi";
import {RiNotification2Line} from "react-icons/ri";
import {useSelector} from 'react-redux'


function Header() {
    const profileLogo = useSelector((state) => state.profilePage.profileInfo.photos.small)
    return (
        <div className={s.header}>

            <Navbar bg="light" expand={"sm"} className="mb-3">
                <Container fluid>
                    <Navbar.Brand href="#">
                        <img className={s.mainlogo} src={logo} alt="Logo"/>
                       <span className={s.logoText}>MSNet</span> </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"sm"}`}/>
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${"sm"}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${"sm"}`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${"sm"}`}>
                                Offcanvas
                            </Offcanvas.Title>
                        </Offcanvas.Header>

                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3 align-items-center">
                                <Form className="d-flex">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    {/* <Button variant="outline-success">Search</Button>*/}
                                </Form>

                                <Nav.Link href="#action2"> <FaUserFriends/></Nav.Link>
                                <Nav.Link href="#action2"> <BiMessageRounded/></Nav.Link>
                                <Nav.Link href="#action2"> <RiNotification2Line/></Nav.Link>
                                <NavDropdown
                                    title="Dropdown"
                                    id={`offcanvasNavbarDropdown-expand-${"sm"}`}
                                >
                                    <NavDropdown.Item href="#action3">
                                        <HeaderDropDown/>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider/>
                                    <NavDropdown.Item href="#action5">
                                        Something else here
                                    </NavDropdown.Item>

                                </NavDropdown>
                                <Nav.Link href="#action2">
                                    <img className={ s.profileLogo} src={profileLogo} alt="Logo"/>
                                </Nav.Link>
                            </Nav>

                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>


        </div>
    );
}


export default connect(null, {takeLogoutData})(Header)