import React from 'react'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import './Pages.css'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


function UserPage({ users }) {

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: ' USERS BASED ON THEIR COUNTRY OF ORIGIN',
      },
    },
  };

  const labels = [...new Set(users.map((user) => user.address.country))].sort()
  const data = {
    labels,
    datasets: [
      {
        label: 'Users',
        data: labels.map((country) => {
          return (users.reduce((acc, curr) => {
            if (curr.address.country === country) {
              acc++
            }
            return acc
          }, 0))
        }),
        backgroundColor: 'rgb(204, 0, 153)'
      }
    ]
  }

  return (
    <div className="main-div">
      <Bar options={options} data={data} />
    </div>
  )
}

export default UserPage