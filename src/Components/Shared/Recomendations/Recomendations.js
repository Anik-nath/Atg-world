import React, { useState } from 'react';
import { NavLink } from 'react-bootstrap';
import author from '../../../Utilitis/images/Rectangle 3.png'
import { faThumbsUp} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Recomendations = () => {
    const [follow,setFollow] = useState(false);

    const groups = [
        {
            name : "Leisure",
            img: "https://i.ibb.co/gz8ncX5/Rectangle-6.png"
        },
        {
            name : "Activism",
            img: "https://i.ibb.co/HYVKgZb/Rectangle-6-1.png"
        },
        {
            name : "MBA",
            img: "https://i.ibb.co/SyfvX1j/Rectangle-6-2.png"
        },
        {
            name : "Philosophy",
            img: "https://i.ibb.co/BLtPXsS/Rectangle-6-3.png"
        },
    ]
   
    
    
    return (
        <>
          <section className="mt-5 pt-2" id="group">
              <div className="text-uppercase pb-3 d-flex flex-row gap-1">
              <FontAwesomeIcon className="text-secondary" icon={faThumbsUp} />
            <h6>Recommended Groups</h6>
            </div>
            {/* group list */}
              {
                  groups.map(group => (
                    <div id="group-list" className="d-flex mb-4 flex-row justify-content-between align-items-top">
                    <div id="group-name" className="d-flex flex-row align-items-center gap-4">
                        <div className="group-image">
                          <img className="img-fluid" src={group.img} alt="grp pic" />
                        </div>
                    <h6 className="group-name">{group.name}</h6>
                    </div>
                    <div id="follow-button">
                       
                         { 
                         follow ?  <button onClick={()=>setFollow(!follow)} className="follow-button">follow</button>
                         :
                         <button onClick={()=>setFollow(!follow)} className="followed-button">followed</button> 
                        }
                    </div>
                </div>
                  ))
              }
              {/* see more group button */}
              <NavLink><p style={{fontSize:"12px"}} className="mb-0 mt-5 text-end">See More...</p></NavLink>
            </section>  
        </>
    );
};

export default Recomendations;