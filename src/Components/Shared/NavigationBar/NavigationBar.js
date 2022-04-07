import React from "react";
import logo from "../../../Utilitis/logo/whole.png";
import {
  Navbar,
  Container,
  Nav,
  Button,
  Form,
  FormControl,
  NavLink,
} from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar className="nabvar" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="100%"
            height="100%"
            className="d-inline-block"
            alt="ATG WORLD lOGO"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Form className="d-flex top-search-field align-items-center">
              <i className="fas fa-search search-icon"></i>
              <FormControl
                type="search"
                placeholder="Search for your favorite groups in ATG"
                className="me-2 border-0 input-box bg-transparent"
                aria-label="Search"
              />
            </Form>
          </Nav>
          <Nav className="d-flex gap-1 flex-row align-items-center create-account">
            Create an account.{" "}
            <p className="text-primary font-weight-bold mb-0">
              {" "}
              It's free!{" "}
              <span>
                <i className="fas fa-chevron-down     "></i>
              </span>{" "}
            </p>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
