import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div className="nav">
      <div className='button'>
        <div className='button-left'></div>
        <Link to="/history">
          <div className='button-mid'>
            History
          </div>
        </Link>
        <div className='button-right'></div>
      </div>

      <div className='button'>
          <div className='button-left'></div>
          <Link to="/award">
            <div className='button-mid'>
              Award
            </div>
          </Link>
          <div className='button-right'></div>
      </div>

      <div className='button'>
        <div className='button-left'></div>
          <Link to="/students">
          <div className='button-mid'>
          Students
          </div>
        </Link>
        <div className='button-right'></div>
      </div>

      <div className='button'>
        <div className='button-left'></div>
          <Link to="/teachers">
          <div className='button-mid'>
          Teachers
          </div>
          </Link>
        <div className='button-right'></div>
      </div>
      
    </div>
  )
}
