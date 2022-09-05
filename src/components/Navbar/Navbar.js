import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../media/img/4panas-Logo-noBG.png'
import './Navbar.css'
import {BiUserCircle} from 'react-icons/bi';


const Navbarc = () => {
  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo} height="70"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-1"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavDropdown title="Productos" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Monitores</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Notebooks</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Teclados</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Mouse</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Gabinetes</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Mothers</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Placas de Video
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Todos los productos
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action2">Marcas</Nav.Link>
            <Nav.Link href="#action2">¿Quienes somos?</Nav.Link>
            <Nav.Link href="#action2">Contactanos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <button class="icon-btn add-btn">
        <div class="add-icon"></div>
        <div class="btn-txt"><BiUserCircle/></div>
      </button>
    </Navbar>
  );};

export default Navbarc;