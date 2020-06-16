import React, { useState } from "react";

function App() {

  const [fname,setFname] = useState("")
  const [lname,setLname] = useState("")

  function changeFname(event) {
    setFname(event.target.value);
  }
  function changeLname(event) {
    setLname(event.target.value);

  }

  return (
    <div className="container">
      <h1>Hello {fname} {lname}</h1>
      <form>
        <input 
        onChange= {changeFname}
        name="fName" 
        placeholder="First Name"
        />
        <input 
        onChange= {changeLname}
        name="lName" 
        placeholder="Last Name" 
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
