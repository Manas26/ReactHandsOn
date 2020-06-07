import React from "react";
import Details from "./details";
import Avatar from "./Avatar";
function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          
          <Avatar
          image = {props.image}
          />
        </div>
        <div className="bottom">
          <Details num={props.num} mail={props.mail} />
          {/* <p className="info">{props.num}</p>
          <p className="info">{props.mail}</p> */}
        </div>
      </div>
    </div>
  );
}

export default Card;
