import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Carpage from './Pages/CarPage'
import UserPage from "./Pages/UserPage";
import { createUsers } from "./functions/faker";
import './App.css';
import RightSideBar from "./Components/RightSideBar/RightSideBar";

function App() {
  const [users, setUsers] = useState([])
  const [display, setDisplay] = useState(false)
  const [userDetails,setUserDetails]=useState('')

  useEffect(() => {
    createUsers(100000, setUsers)
  }, []) 

 



  return (
    <>
      <div className="App">
        <Navbar />
        <div className="container">
          <Sidebar users={users} open={setDisplay} setUser={setUserDetails} />
          <Routes>
            <Route path='/' element={<UserPage users={users} />} />
            <Route path='/cars' element={<Carpage users={users} />} />
          </Routes>
        </div>


      </div>
      {display && <RightSideBar close={setDisplay} user={userDetails} />}
    </>
  );
}

export default App;
