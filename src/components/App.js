
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [data,setdata] = useState("");
  return (
    <div>
        {/* Do not remove the main div */}
        <p>Enter Your name :</p>
        <input type="text" onChange={(e)=>setdata(e.target.value)}></input>
        {
          data &&  <p>{data}</p>
        }
       
    </div>
  )
}

export default App
