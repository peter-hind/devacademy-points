import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div className="nav">

      <div className='button-left'></div>
      <div className='button-mid'>
        <Link to="/history">History</Link>
      </div>
      <div className='button-right'></div>

      <div className='button-left'></div>
      <div className='button-mid'>
        <Link to="/award">Award</Link>
      </div>
      <div className='button-right'></div>

      <div className='button-left'></div>
      <div className='button-mid'>
        <Link to="/students">Students</Link>
      </div>
      <div className='button-right'></div>

      <div className='button-left'></div>
      <div className='button-mid'>
        <Link to="/teachers">Teachers</Link>
      </div>
      <div className='button-right'></div>
      
    </div>
  )
}
