import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);



function CarPage({ users }) {

  const carMakersLabel = [...new Set(users.map((user) => user.vehicle.manufacturer))].sort()
  const carAgeLabel = [...new Set(users.map((user) => user.vehicle.age))].sort()

  const carMakersData = {
    labels: carMakersLabel,
    datasets: [
      {
        label: '#Cars',
        data: carMakersLabel.map((manufacturer) => {
          return (users.reduce((acc, curr) => {
            if (curr.vehicle.manufacturer === manufacturer) {
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
            if (curr.vehicle.age === age) {
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


  console.log(users)
  console.log(carAgeLabel)
  return (
    <div className='main-div'>
      <div className='ageFiter'>
        <input type='radio' name='age'/>
      </div>
      <div>
        <Pie data={carMakersData} />
      </div>
      <div>
        <Pie data={carAgeData} />
      </div>
    </div>
  )
}

export default CarPage