import React from "react"
import { Nav, Navbar } from 'react-bootstrap';
import {Link} from "react-router-dom";
import "./css/style.css";

function Navigation () {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand><Link to="/">PWA</Link></Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link><Link to="/">Home</Link></Nav.Link>
          <Nav.Link><Link to="/users">Users</Link></Nav.Link>
          <Nav.Link><Link to="/about">About</Link></Nav.Link>
          <Nav.Link><Link to="/chat">Chat</Link></Nav.Link>
          {/*<Nav.Link><Link to="/video-call">Call</Link></Nav.Link>*/}
        </Nav>
      </Navbar>
    </>
  )
}

export default Navigation;