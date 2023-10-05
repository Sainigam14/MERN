import React,{useState,useEffect} from "react";
import axios from "axios"

function App() {
  const[sname,setStudentName]=useState(" ");
  const[tech,setTech]=useState(" ");
  const[status,setStatus]=useState(" ");

  const handleSubmit =()=>{
    axios.post("http://localhost:9000/aliens",{name:sname,tech:tech,sub:status}).then(
     console.log("success")
    )
  }
  return (
    <div className="App">
      <div>
      <label>Student Name</label>
      <input name="sname" value={sname} onChange={(e)=>{setStudentName(e.target.value)}} ></input>
      </div>
      <div>
      <label>Technology</label>
      <input name="tech" value={tech} onChange={(e)=>{setTech(e.target.value)}}></input>
      </div>
      <div>
      <label>Status</label>
      <input name="status" value={status} onChange={(e)=>{setStatus(e.target.value)}}></input>
      </div>
      <div>
      <button onClick={handleSubmit()}>Submit</button>
      </div>
    
  </div>
  );
}

export default App;