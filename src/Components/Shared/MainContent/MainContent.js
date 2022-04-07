import React from "react";
import { Card, Col, Nav, NavLink, Row } from "react-bootstrap";
import image from '../../../Utilitis/images/Rectangle 5.png'
import author from '../../../Utilitis/images/Rectangle 3.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes,faEllipsis,faCircleExclamation ,faThumbsUp} from "@fortawesome/free-solid-svg-icons";
import vector from '../../../Utilitis/images/Vector.png'
import vector2 from '../../../Utilitis/images/Vector2.png'

const MainContent = () => {
  return (
    <div className="container main-container">
      <div className="main-content-nav mt-5 border-bottom d-flex align-items-center justify-content-between">
          <Nav className="gap-4">
              <Nav.Item className="border-bottom bold border-2 pb-3 border-secondary">All Posts(32)</Nav.Item>
              <Nav.Item className="pb-3">Article</Nav.Item>
              <Nav.Item className="pb-3">Event</Nav.Item>
              <Nav.Item className="pb-3">Education</Nav.Item>
              <Nav.Item className="pb-3">Job</Nav.Item>
          </Nav>
          {/* write and join group button  */}
          <div className="d-flex flex-row gap-3 mb-1">
              <button className="Write-button d-flex flex-row gap-3 align-items-center">
                  Write a Post
                <img src={vector} alt="arrow down icon" />
              </button>
              <button className="join-button d-flex flex-row gap-1 align-items-center">
              <img src={vector2} alt="join group icon" />
                  Join Group
                </button>
          </div>
      </div>
      <Row className="main-content g-5">
        <Col lg={8}>
          <Card className="mb-4">
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title className="d-flex flex-row alig-items-center gap-1"><span className="fs-6">✍️</span> Article</Card.Title>
              <div className="d-flex gap-5 flex-row align-items-top py-2 justify-content-between">
                <h4 className="article-title">What if famous brands had regular fonts? Meet RegulaBrands!</h4>
               <div className="position-relative">
                   <FontAwesomeIcon style={{color:"#000",cursor:"pointer"}} icon={faEllipsis} />
                   <div style={{width:"160px"}} className="menu shadow-sm card position-absolute mt-2 end-0">
                    <NavLink className="fs-6 text-black">Edit</NavLink>
                    <NavLink className="fs-6 text-black">Report</NavLink>
                    <NavLink className="fs-6 text-black">Option 3</NavLink>
                   </div>
                </div>
              </div>

              <Card.Text className="article-content">
              I’ve worked in UX for the better part of a decade. From now on, I plan to rei...
              </Card.Text>
              <div id="TimeNLocation" className="d-flex flex-row gap-4 align-items-center pb-4">
                  <div id="date" className="d-flex flex-row align-items-center gap-2">
                      <i className="fas fa-calendar"></i>
                      <h6 className="mb-0 text-black">Fri, 12 Oct, 2018</h6>
                  </div>
                  <div id="location" className="d-flex flex-row align-items-center gap-2">
                      <i className="fas fa-map-marker-alt"></i>
                      <h6 className="mb-0 text-black">Ahmedabad, India</h6>
                  </div>
              </div>
              <div className="Visit-button">
                  <button className="w-100 btn btn-outline-danger text-capitalize">Visit website</button>
              </div>
              {/* <div className="apply-button">
                  <button className="w-100 btn btn-outline-success text-capitalize">Apply on Timesjobs</button>
              </div> */}
            </Card.Body>
            <Card.Footer className="bg-white border-0">
                <div className="d-flex justify-content-between flex-row">
                    {/* author image and name */}
                    <div className="author-info">
                        <div className="d-flex flex-row align-items-center">
                            <div className="author-image-container"><img src={author} className="img-fluid" alt="pro pic" /></div>
                            <h6 className="author-name">Sarthak Kamra</h6>
                        </div>
                    </div>
                    {/* views and share */}
                    <div className="post-views d-flex flex-row align-items-center gap-5">
                        <div className="d-flex flex-row align-items-center gap-2">
                            <i className="fas fa-eye"></i>
                            <p className="mb-0">1.4k views</p>
                        </div>
                        <div className="share-button">
                        <FontAwesomeIcon style={{color:"#2D2D2D"}} icon={faShareNodes} />
                        </div>
                    </div>
                </div>
            </Card.Footer>
          </Card>
        </Col>
        <Col className="pt-3 ps-5" lg={4}>
            <div className="d-flex justify-content-between align-items-center  border-bottom py-3">
                <div className="d-flex gap-2 align-items-center text-black"> 
                    <i className="fas fa-map-marker-alt fs-6"></i>
                    <p className="mb-0">Noida, India</p>
                </div>
                <div>
                    <i className="fas fa-pen fs-6"></i>
                </div>
            </div>
            <div className="mt-4 d-flex text-secondary align-items-top">
            <FontAwesomeIcon className="me-2 fs-6" icon={faCircleExclamation} />
            <p style={{fontSize:"13px"}} className="mb-0">Your location will help us serve better and extend a personalised experience.</p>
            </div>
            {/* Recommends group */}
            <section className="mt-5 pt-2" id="group">
              <div className="text-uppercase pb-3 d-flex flex-row gap-1">
              <FontAwesomeIcon className="text-secondary" icon={faThumbsUp} />
            <h6>Recommended Groups</h6>
            </div>
            {/* group list */}
              <div id="group-list" className="d-flex flex-row justify-content-between align-items-top">
                  <div id="group-name" className="d-flex flex-row align-items-center gap-4">
                      <div className="group-image">
                        <img className="img-fluid" src={author} alt="grp pic" />
                      </div>
                  <h6 className="group-name">Leisure</h6>
                  </div>
                  <div id="follow-button">
                      <button className="follow-button">follow</button>
                       {/* <button className="followed-button">followed</button> */}
                  </div>
              </div>
              {/* see more group button */}
              <NavLink><p style={{fontSize:"12px"}} className="mb-0 mt-5 text-end">See More...</p></NavLink>
            </section>
        </Col>
      </Row>
    </div>
  );
};

export default MainContent;
