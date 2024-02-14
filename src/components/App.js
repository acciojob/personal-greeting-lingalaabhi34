import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [data, setData] = useState("");
  return (
    <div>
      {/* Do not remove the main div */}
      <p>Enter Your name :</p> {/* Include the text before input */}
      <input type="text" onChange={(e) => setData(e.target.value)}></input>
      {data && <p>Hello {data}!</p>}
    </div>
  );
};

export default App;
