import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import notesDesc from "../notes"
import Card from "./card"



function App() {
  return (
    <div>
      <Header />
      
      { notesDesc.map(note => 
  
    <Card 
    key = {note.id}
    title= {note.title}
    content = {note.content}
    />
  
)}
      <Footer />
    </div>
  );
}

export default App;
