import Card from "../card";
import React from "react";
import Contacts from "../contacts";
import Avatar from "../Avatar";
// const contactCards = [];

// Contacts.forEach(function(Contact) {
//   contactCards.push(
//     <Card
//       name={Contact.name}
//       image={Contact.imgURL}
//       num={Contact.phone}
//       mail={Contact.email}
//     />
//   );
// });

// function App() {
//   return (
//     <div>
//       <h1 className="heading">My Contacts</h1>
//       <Card 
//       name= {Contacts[0].name}
//       image= {Contacts[0].imgURL}
//       num= {Contacts[0].phone}
//       mail= {Contacts[0].email}
//       />
//       <Card 
//       name= {Contacts[1].name}
//       image={Contacts[1].imgURL}
//       num=  {Contacts[1].phone}
//       mail= {Contacts[1].email}
//       />
//       <Card 
//       name= {Contacts[2].name}
//       image= {Contacts[2].imgURL}
//       num= {Contacts[2].phone}
//       mail= {Contacts[2].email}
//       />
//      </div>
    
//   );
// }
function createCard(contacts) {
  return (
  <Card 
  name= {contacts.name}
  image = {contacts.imgURL}
  num = {contacts.phone}
  mail = {contacts.email}
  />);
}

function App() {
  return (
    <div>
      <Avatar
          image = {Contacts[1].imgURL}
          />
      <h1 className="heading">My Contacts</h1>
      {Contacts.map(createCard)}
    </div>
  );
}

export default App;
