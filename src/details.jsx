import React from "react";


function Details(props) {
  return (
    <div>
    <p className="info">{props.num}</p> 
    <p className="info">{props.mail}</p>
    </div> 
  )
}

export default Details;