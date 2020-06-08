import React from "react";
import Emoji from "../components/Emoji";
import emojipedia from "../emojipedia";

function createEmoji(emojicon) {
  return (
    <Emoji 
    key = {emojicon.id}
    emoji={emojicon.emoji} 
    name={emojicon.name} 
    meaning={emojicon.meaning} 
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      {emojipedia.map(createEmoji)}
    </div>
  );
}

export default App;
