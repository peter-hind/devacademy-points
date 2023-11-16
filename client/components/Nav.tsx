import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div className="nav">
      <p>
        <Link to="/history">History</Link>
      </p>
      <p>
        <Link to="/award">Award</Link>
      </p>
      <p>
        <Link to="/students">Students</Link>
      </p>
      <p>
        <Link to="/teachers">Teachers</Link>
      </p>
    </div>
  )
}
