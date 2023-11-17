import { Link } from 'react-router-dom'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton.tsx'
import { useAuth0 } from '@auth0/auth0-react'
import TeacherProfile from './TeacherProfile.tsx'

export default function Nav() {
  const { user, isAuthenticated } = useAuth0()
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
      <TeacherProfile />
      {user ? <LogoutButton /> : <LoginButton />}
    </div>
  )
}
