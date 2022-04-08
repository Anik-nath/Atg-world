import React from "react";
import { Col, Row } from "react-bootstrap";
import loginImage from "../../Utilitis/images/Group 3.png";
import facebook from "../../Utilitis/images/f_logo_RGB-Blue_1024.png";
import google from "../../Utilitis/images/search.png";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Authentication/Hooks/useAuth";

const Register = ({click,setClick}) => {
  const {googleSignIn,login,error} = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogle = (e) =>{
    googleSignIn(location,navigate);
    e.preventDefault();
  }
  return (
    <div className="h-100 d-flex justify-content-center align-items-center w-100">
      <div>
        {/* <div className="close-button d-flex justify-content-center align-items-center mb-4 ">
          <span>X</span>
        </div> */}
        <div className="login-card">
          <h6 className="login-subtitle p-3 rounded-3">
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </h6>
          <Row className="px-4 pt-4">
            <Col lg={6}>
              <h5 className="create">Create Account</h5>
              <form className="login-form mt-4 pb-4">
                <div className="d-flex flex-row">
                  <input
                    type="text"
                    name="firstname"
                    id="firstName"
                    placeholder="First Name"
                  />
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Last Name"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div className="position-relative">
                  <input
                    className=""
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                  />
                  <div className="position-absolute bottom-0 text-muted end-0 h-100 d-flex align-items-center px-2">
                    <i className="fas fa-eye"></i>
                  </div>
                </div>
                <div>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                  />
                </div>
                <div>
                  <button className="create-button w-100 border-0 text-white text-capitalize">
                    create account
                  </button>
                </div>
                <div>
                  <button className="sign-up-button position-relative d-flex justify-content-center align-items-center gap-2">
                    <img className="img-fluid" src={facebook} alt="" />
                    Sign up with Facebook
                  </button>
                </div>
                <div>
                  <button onClick={handleGoogle} className="sign-up-button position-relative d-flex justify-content-center align-items-center gap-2">
                    <img className="img-fluid" src={google} alt="" />
                    Sign up with Google
                  </button>
                </div>
              </form>
            </Col>
            <Col lg={6}>
              <p className="mb-0 text-md-end text-center">
                Already have an account?{" "}
                <a onClick={() => setClick(!click)}
                  style={{ textDecoration: "none", fontWeight: "600" }}
                  href="#"
                >
                  Sign In
                </a>
              </p>

              <div className="d-flex flex-column align-items-center h-100 justify-content-center">
                <img className="img-fluid sign-image" src={loginImage} alt="" />
                <p className="mb-0 terms mt-md-4 pb-4 pb-md-0">
                  By signing up, you agree to our Terms & conditions, Privacy
                  policy
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Register;
