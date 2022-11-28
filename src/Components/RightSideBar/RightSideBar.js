import './RightSideBar.css'

function RightSideBar({close,user}) {
    return (
        <div className='rightSidebar'>
            <p  onClick={()=>{close(false)}} className='close-btn'>&times;</p>
            <p style={{marginTop:'2rem'}}>Name : <span>{user.userName}</span></p>
            <p> Age : <span>{user.age}</span> </p>
            <p>Occupation : <span>{user.occupation}</span></p>
            <p>Address : <span>{user.address.streetName}, {user.address.city}, {user.address.state}, {user.address.country}</span></p>
            <p>Phone : <span>{user.phoneNumber}</span></p>
            <h5>Vehicle Details</h5>
            <p>Model : <span>{user.vehicle.model}</span></p>
            <p>Manufacturer : <span>{user.vehicle.manufacturer}</span></p>
            <p>Color : <span>{user.vehicle.color}</span></p>
            <p>Age : <span>{user.vehicle.age}</span></p>
            <p>Fuel : <span>{user.vehicle.fuel}</span></p>
            
            <p></p>

        </div>
    )
}

export default RightSideBar