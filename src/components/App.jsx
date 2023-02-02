import React from "react";
import emojipedia from "../emojipedia";
import Template from "./Template";

function createMap(props) {
  return (
    <div>
      <Template
        key={props.id}
        emoji={props.emoji}
        name={props.name}
        meaning={props.meaning}
      />
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
      {emojipedia.map(createMap)}
      </dl>
    </div>
  );
}

export default App;
