import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,

//     Link
// } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


import Home from './Home';
import Login from './Login/Login';
import ChatRoom from "./ChatRoom"
import AuthProvider from '../Context/AuthProvider';

import Map from './Location/Map';






export default class Navcomponent extends Component {
  render() {
    const nav_style= {
        backgroundColor : "#002D62",
        minHeight: "100px",
        fontSize: "20px",
        fontFamily: "serif", 
    }

    return (
        <Router>
            <div >
        
                <Navbar 
                style={nav_style} 
                collapseOnSelect expand="lg"
                variant={"dark"}
                >
                <Container>
                    <img style = {{height:"90px", padding:"15px"}}src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Radar_icon_yellow.svg/786px-Radar_icon_yellow.svg.png?20221113022713"/>
                    <Navbar.Brand >SStrong!</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" >Home</Nav.Link>
                        <Nav.Link as={Link} to="/">About</Nav.Link>
                        <Nav.Link as={Link} to="/message">Message</Nav.Link>
                        <Nav.Link as={Link} to="/location">Location & Emergency</Nav.Link>
                        <Nav.Link as={Link} to="/findmy">Find My Friend</Nav.Link>
                        
                        {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                        </NavDropdown> */}
                        
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link}  to="/login">Sign In</Nav.Link>
                        
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
            </div>
            <div>
                <AuthProvider  >
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/location" element={<Map/>} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/message" element={<ChatRoom />} />
                        {/* <Route path="/findmy" element={<Find/>} /> */}
                    </Routes>
                </AuthProvider>
                {/* <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/message" element={<ChatRoom />} />
                </Routes> */}

                {/* <Switch>
                    <Route path="/">
                        <Home />
                    </Route>

                    <Route path="/login">
                        <Login/>
                    </Route>

                    <Route path="/message">
                        <Message />
                    </Route>
                </Switch> */}
            </div>
        </Router>
    );
  }
}
