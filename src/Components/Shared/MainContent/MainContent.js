import React from "react";
import { Card, Col, Nav, Row } from "react-bootstrap";
import image from '../../../Utilitis/images/Rectangle 5.png'
import author from '../../../Utilitis/images/Rectangle 3.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes,faEllipsis,faCircleExclamation } from "@fortawesome/free-solid-svg-icons";


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
          <div className="d-flex flex-row gap-3 mb-1">
              <button className="Write-button">Write a Post</button>
              <button className="join-button">Join Group</button>
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
               <div className=""><FontAwesomeIcon style={{color:"#000"}} icon={faEllipsis} /></div>
              </div>
              <Card.Text className="article-content">
              I’ve worked in UX for the better part of a decade. From now on, I plan to rei...
              </Card.Text>
            </Card.Body>
            <Card.Footer className="bg-white border-0">
                <div className="d-flex justify-content-between flex-row">
                    {/* author image and name */}
                    <div className="author-info">
                        <div className="d-flex flex-row align-items-center">
                            <div className="author-image-container"><img src={author} alt="pro pic" /></div>
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
        <Col className="pt-3 px-3" lg={4}>
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
            <FontAwesomeIcon className="my-2 me-2 fs-6" icon={faCircleExclamation} />
            <p className="mb-0">Your location will help us serve better and extend a personalised experience.</p>
            </div>
        </Col>
      </Row>
    </div>
  );
};

export default MainContent;
