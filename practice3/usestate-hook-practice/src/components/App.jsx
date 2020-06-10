import React, {useState} from "react";

function App() {

const time = new Date().toLocaleTimeString();

const [time1,setCount] = useState(time);

function GetTime() {
  
  const time2 = new Date().toLocaleTimeString()
  // useState(time)
  setCount(time2)

}

// function sayHi() {
//   const time = new Date().toLocaleTimeString();
//   const [time1,setCount] = useState(time);
  
//   }
  setInterval(GetTime, 1000);
 
  return (
    <div className="container">
      <h2>{time1}</h2>
      <button onClick={GetTime}>Get Time</button>
    </div>
  );
}

export default App;
