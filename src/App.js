import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import './App.css';
import { useEffect, useState } from "react";
import { createUsers } from "./functions/faker";

function App() {
  const [user,setUser]=useState()

  useEffect(()=>{
    createUsers(10,setUser)
  },[])
  
  console.log(user)
  
  return (
    <div className="App">
      <Navbar/>
      <div className="container">
        <Sidebar/>
        <div className="main-div">Main div</div>
      </div>

      
    </div>
  );
}

export default App;
