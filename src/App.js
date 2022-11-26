import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Carpage from './Pages/CarPage'
import UserPage from "./Pages/UserPage";
import { createUsers } from "./functions/faker";
import './App.css';

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    createUsers(1000, setUsers)
  }, [])



  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Sidebar users={users} />
        <Routes>
          <Route path='/' element={<UserPage users={users} />} />
          <Route path='/cars' element={<Carpage users={users} />} />
        </Routes>
      </div>


    </div>
  );
}

export default App;
