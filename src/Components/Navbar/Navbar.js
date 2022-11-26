import { useNavigate } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const navigate=useNavigate()
  return (
    <header className='navbar'>
        <button className='button' onClick={()=>{navigate('/')}}>Users</button>
        <button className='button' onClick={()=>{navigate('/cars')}}>Cars</button>
    </header>
  )
}

export default Navbar