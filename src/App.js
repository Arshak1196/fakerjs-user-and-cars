import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import { createUsers } from "./functions/faker";
import './App.css';

function App() {
  const [users,setUsers]=useState([])

  useEffect(()=>{
    createUsers(100,setUsers)
  },[])
  
  
  
  return (
    <div className="App">
      <Navbar/>
      <div className="container">
        <Sidebar users={users}/>
        <div className="main-div">Main div</div>
      </div>

      
    </div>
  );
}

export default App;
