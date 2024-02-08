
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [data,setdata] = useState("");
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Enter Your name :</h1>
        <input type="text" onChange={(e)=>setdata(e.target.value)}></input>
        {
          data &&  <p>Hello {data}</p>
        }
       
    </div>
  )
}

export default App
