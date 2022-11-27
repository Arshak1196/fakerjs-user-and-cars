import React, { useEffect, useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function CarPage(props) {
  const [users,setUsers]=useState([])
  const carMakersLabel = [...new Set(users.map((user) => user?.vehicle.manufacturer))].sort()
  const carAgeLabel = [...new Set(users.map((user) => user?.vehicle.age))].sort()

  useEffect(()=>{
    setUsers(props.users)
  },[props.users])

  const carMakersData = {
    labels: carMakersLabel,
    datasets: [
      {
        label: '#Cars',
        data: carMakersLabel.map((manufacturer) => {
          return (users.reduce((acc, curr) => {
            if (curr?.vehicle.manufacturer === manufacturer) {
              acc++
            }
            return acc
          }, 0))
        }),
        backgroundColor: [
          'rgba(54, 162, 235,0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.7)',
        ]
      }
    ],
  }

  const carAgeData = {
    labels: carAgeLabel.map((car) => `${car} years`),
    datasets: [
      {
        label: '#Cars',
        data: carAgeLabel.map((age) => {
          return (users.reduce((acc, curr) => {
            if (curr?.vehicle.age === age) {
              acc++
            }
            return acc
          }, 0))
        }),
        backgroundColor: [
          'rgba(54, 162, 235, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.7)',
        ]
      }
    ],
  }

  const handlefilter=(e)=>{
    if(e.target.value==='all'){
      setUsers(props.users)
    }else if(e.target.value==='50'){
      setUsers(props.users.filter((user)=>{
        if(user.age>=50){
          return user
        }
      }))
    }else{
      const value=Number(e.target.value)
      setUsers(props.users.filter((user)=>{
        if(user.age>=value && user.age<(value+10)){
          return user
        }
      }))
    }
  }
  
  return (
    <div className='main-div'>
      <div className='ageFiter'>
        <h2>Piegraph for Cars</h2>
        <form onChange={handlefilter}>
          <input id="personal-account" type="radio" value="all" name="age" className="inline" defaultChecked /> All Users
          <input id="personal-account" type="radio" value="20" name="age" className="inline" /> 20-30
          <input id="personal-account" type="radio" value="30" name="age" className="inline" /> 31-40
          <input id="personal-account" type="radio" value="40" name="age" className="inline" /> 41-50
          <input id="personal-account" type="radio" value="50" name="age" className="inline" /> 51-60
        </form>
        <p>Total Users: {users.length}</p>
      </div>
      <div className='piegraph'>
        <div className='sub-div'>
          <h3>Owners of Each company</h3>
          <Pie data={carMakersData} />
        </div>
        <div className='sub-div'>
          <h3>Average age of cars</h3>
          <Pie data={carAgeData} />
        </div>
      </div>

    </div>
  )
}

export default CarPage