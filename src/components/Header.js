import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Container,
} from "reactstrap";


function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Container fluid>
      <Navbar expand="sm" className="navbar-dark">
        <NavbarBrand href="/">Fast Food</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/components/">RESTAURANTES</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/menu">MENU</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Ver Carrito</NavbarText>
        </Collapse>
      </Navbar>
     

     
    </Container>
  );
}

export default Header;
