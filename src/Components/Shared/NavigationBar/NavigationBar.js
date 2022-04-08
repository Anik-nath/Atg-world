import React, { useState } from "react";
import logo from "../../../Utilitis/logo/whole.png";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
} from "react-bootstrap";
import useAuth from "../../../Authentication/Hooks/useAuth";

const NavigationBar = () => {
  const {user,signout} = useAuth();
  const handleSignOut =()=>{
    signout();
  }
  const [show,setShow] = useState(false);
  return (
    <Navbar className="nabvar" expand="lg">
      <Container fluid className="ATG-container">
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
          {
            !user.email ? 
          <Nav className="d-flex gap-1 flex-row align-items-center create-account">
            Create an account.{" "}
            <p className="text-primary font-weight-bold mb-0">
              {" "}
              It's free!{" "}
              <span>
                <i className="fas fa-chevron-down"></i>
              </span>{" "}
            </p>
          </Nav>
            :
            <Nav className="d-flex gap-2 flex-row align-items-center">
              <div className="rounded-circle" style={{width:"36px",height:"36px"}}>
                <img className="img-fluid rounded-circle" src={user.photoURL} alt="" />
              </div>
              {user.displayName}
              <p className="text-dark font-weight-bold mb-0">
              <div onClick={()=> setShow(!show)} className="position-relative">
                <i className="fas fa-chevron-down"></i>
                {
                  show &&
               
                <div className="position-absolute logout end-0 card px-2 py-2">
                  <span onClick={handleSignOut}>Logout</span>
                </div>
                  }
              </div>
            </p>
            </Nav>
            }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
