import React, { useState } from "react";
import { Card, NavLink } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes,faEllipsis} from "@fortawesome/free-solid-svg-icons";

const ArticleCard = ({singlePost}) => {
    const [show,setShow] = useState(false);
    return (
        <>
           <Card className="mb-4">
            <Card.Img variant="top" src={singlePost?.thumbnail} />
            <Card.Body>
              <Card.Title className="d-flex flex-row alig-items-center gap-1"><span className="fs-6">✍️</span> {singlePost.tag}</Card.Title>
              <div className="d-flex gap-5 flex-row align-items-top py-2 justify-content-between">
                <h4 className="article-title">{singlePost.title}</h4>
               <div className="position-relative">
                   <FontAwesomeIcon onClick={() => setShow(!show)} style={{color:"#000",cursor:"pointer"}} icon={faEllipsis} />
                {show && 
                   <div style={{width:"160px"}} className={`menu shadow-sm card position-absolute mt-2 end-0`}>
                    <NavLink className="fs-6 text-black">Edit</NavLink>
                    <NavLink className="fs-6 text-black">Report</NavLink>
                    <NavLink className="fs-6 text-black">Option 3</NavLink>
                   </div>
                } 

                </div>
              </div>

              <Card.Text className="article-content">
              {singlePost?.details}
              </Card.Text>
              <div id="TimeNLocation" className="d-flex flex-row gap-4 align-items-center pb-4">
                  <div id="date" className="d-flex flex-row align-items-center gap-2">
                      {singlePost?.date ? <i className="fas fa-calendar"></i> : ""}
                      {
                          singlePost?.company && <i className="fas fa-calendar"></i>
                      }
                      <h6 className="mb-0 text-black">{singlePost?.date}</h6>
                      {
                          singlePost?.company && <h6 className="mb-0 text-black">{singlePost?.company}</h6>
                      }
                  </div>
                  <div id="location" className="d-flex flex-row align-items-center gap-2">
                      {singlePost.location ? <i className="fas fa-map-marker-alt"></i>: ""}
                      <h6 className="mb-0 text-black">{singlePost.location}</h6>
                  </div>
              </div>
              { 
              singlePost?.tag === "Job" &&  
                <div className="apply-button">
                  <button className="w-100 btn btn-outline-success text-capitalize">Apply on Times jobs</button>
                </div>
                
              }
              {
                singlePost?.tag === "Article" ? 
                <div className="Visit-button">
                <button className="w-100 btn btn-outline-danger text-capitalize">Visit website</button>
                </div> : ""
              }
              {
                singlePost?.tag === "Meetup" ?  
                <div className="Visit-button">
                <button className="w-100 btn btn-outline-danger text-capitalize">Visit website</button>
                </div> : ""
              }
            </Card.Body>
            <Card.Footer className="bg-white border-0">
                <div className="d-flex justify-content-between flex-md-row flex-row lg-align-items-top align-items-center">
                    {/* author image and name */}
                    <div className="author-info">
                        <div className="d-flex flex-row align-items-center">
                            <div className="author-image-container"><img src={singlePost?.authorImage} className="img-fluid" alt="pro pic" /></div>
                            <h6 className="author-name">{singlePost.authorName}</h6>
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
        </>
    );
};

export default ArticleCard;