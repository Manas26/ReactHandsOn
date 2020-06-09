import React from "react";
import Note from "./Note";


function card(props) {
  return (
    <div>
      
      <Note 
      key = {props.id}
      title= {props.title}
      content = {props.content}
      />
      
    </div>
  );
}

export default card;