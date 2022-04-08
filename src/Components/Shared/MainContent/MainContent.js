import React, { useEffect, useState } from "react";
import { Col, Modal, Nav, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import vector from "../../../Utilitis/images/Vector.png";
import vector2 from "../../../Utilitis/images/Vector2.png";
import Login from "../../Login/Login";
import ArticleCard from "../ArticleCard/ArticleCard";
import Recomendations from "../Recomendations/Recomendations";
import Register from "../../Register/Register";
import useAuth from "../../../Authentication/Hooks/useAuth";

const MainContent = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const{user} = useAuth();
  const [click, setClick] = useState(false);

  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch("./article.json")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  return (
    <div className="container main-container">
      <div className="main-content-nav mt-5 border-bottom d-flex align-items-center justify-content-between">
        <Nav className="gap-4">
          <Nav.Item className="border-bottom bold border-2 pb-3 border-secondary">
            All Posts(32)
          </Nav.Item>
          <Nav.Item className="pb-3 for-mobile">Article</Nav.Item>
          <Nav.Item className="pb-3 for-mobile">Event</Nav.Item>
          <Nav.Item className="pb-3 for-mobile">Education</Nav.Item>
          <Nav.Item className="pb-3 for-mobile">Job</Nav.Item>
        </Nav>
        {/* write and join group button  */}
        <div className="d-flex flex-row gap-3 mb-1">
        <div className="d-md-none arrow-for-mobile"><i className="fas fa-arrow-left fs-5 text-white"></i></div>
          <button className="Write-button for-mobile d-flex flex-row gap-3 align-items-center">
            Write a Post
            <img src={vector} alt="arrow down icon" />
          </button>
          <button className="Write-button d-md-none d-flex flex-row gap-3 align-items-center">
            Filter All
            <img src={vector} alt="arrow down icon" />
          </button>

          {
            !user.email ?
            <button
            onClick={handleShow}
            className="join-button d-flex flex-row gap-1 align-items-center"
          >
            <img src={vector2} alt="join group icon" />
            Join Group
          </button>
          :
          <button
            className="join-button bg-white text-dark border d-flex flex-row gap-1 align-items-center"
          >
            <img src="https://i.ibb.co/yYT7xFV/Vector.png" alt="join group icon" />
            Leave Group
          </button>
          }

        </div>
      </div>
      <Row className="main-content g-5">
        <Col lg={8} sm={12} xs={12} md={8}>
          {post.map((singlePost) => (
            <ArticleCard
              key={singlePost.id}
              singlePost={singlePost}
            ></ArticleCard>
          ))}
        </Col>
        <Col className="pt-3 ps-5" lg={4} sm={12} xs={12} md={4}>
          {/* <div className="d-flex justify-content-between align-items-center  border-bottom py-3">
            <div className="d-flex gap-2 align-items-center text-black">
              <i className="fas fa-map-marker-alt fs-6"></i>
              <p className="mb-0">Noida, India</p>
            </div>
            <div>
              <i className="fas fa-pen fs-6"></i>
            </div>
          </div> */}

          <div className="position-relative">
            <label htmlFor="text" className="border-0 border-bottom w-100">
              <i className="fas fa-map-marker-alt fs-6 position-absolute mt-2"></i>
              {/* <span className="position-absolute ms-4">Noida, India</span> */}
              <i className="fas fa-pen fs-6 position-absolute end-0 mt-1"></i>
              {
                !user.email ?
                <input disabled placeholder="Noida, India" type="text" className="location-search py-1 ps-4 border-0 w-100 bg-transparent"/>
                :
                <input  placeholder="Noida, India" type="text" className="location-search py-1 ps-4 border-0 w-100 bg-transparent"/>
              }
            </label>
          </div>


          <div className="mt-4 d-flex text-secondary align-items-top">
            <FontAwesomeIcon className="me-2 fs-6" icon={faCircleExclamation} />
            <p style={{ fontSize: "13px" }} className="mb-0">
              Your location will help us serve better and extend a personalised
              experience.
            </p>
          </div>
          {/* Recommends group */}
          <Recomendations></Recomendations>
        </Col>
      </Row>
      {/* -------------show modal content---------- */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>

        {!click ? (
          <Register click={click} setClick={setClick}></Register>
        ) : (
          <Login click={click} setClick={setClick}></Login>
        )}
      </Modal>
      {/* -------------show modal content---------- */}
    </div>
  );
};

export default MainContent;
