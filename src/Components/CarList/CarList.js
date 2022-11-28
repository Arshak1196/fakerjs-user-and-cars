import React, { memo, useEffect, useState } from 'react'
import './CarList.css'

function CarList({ cars, users }) {
    const [listData, setListData] = useState([])
    const [currentpage, setCurrentpage] = useState(1)
    const [rowperPage, setRowperPage] = useState(15)
    const [carUsers, setCarUsers] = useState([])
    const [carName, setCarName] = useState('')

    useEffect(() => {
        setListData(cars.slice(0, rowperPage))
    }, [cars])

    const handleNext = () => {
        if (currentpage < cars.length / rowperPage) {
            setListData(cars.slice((currentpage * rowperPage), (currentpage * rowperPage) + rowperPage))
            setCurrentpage(currentpage + 1)
        }
    }

    const handlePrevious = () => {
        if (currentpage === 1) {
            return
        }
        setListData(cars.slice((currentpage - 2) * rowperPage, (currentpage - 1) * rowperPage))
        setCurrentpage(currentpage - 1)
    }

    const handleUserList = (carName) => {
        let userList = users.filter((user) => {
            return user.vehicle.manufacturer === carName
        })
        setCarName(carName)
        setCarUsers(userList)
    }
    console.log(carUsers)


    return (
        <div className='carlist'>
            <div className='cardiv'>
                <h4>CARS</h4>
                <ul>
                    {listData.map((car, index) => (
                        <li key={index} onClick={() => handleUserList(car)}>{car}</li>
                    ))}
                </ul>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ display: 'inline-block' }} >
                        <p className='pagination-btn' onClick={() => handlePrevious()}>&laquo;</p>
                        <p className='pagination-btn'>{currentpage}</p>
                        <p className='pagination-btn' onClick={() => handleNext()}>&raquo;</p>

                    </div>
                </div>
            </div>
            <div className="cardiv">
                <h4>USERS : {carName}</h4>
                <ul>
                    {carUsers.map((user, index) => (
                        <li key={index}>{user.userName}</li>
                    ))}
                </ul>

            </div>
        </div>

    )
}

export default memo(CarList)