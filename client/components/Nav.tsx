import { Link } from 'react-router-dom'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton.tsx'
import { useAuth0 } from '@auth0/auth0-react'
import TeacherProfile from './TeacherProfile.tsx'

export default function Nav() {
  const { user, isAuthenticated } = useAuth0()
  return (
    <div className="nav">
      <TeacherProfile />
      {user ? <LogoutButton /> : <LoginButton />}
      <div className="button">
        <div className="button-left"></div>
        <Link to="/history">
          <div className="button-mid">History</div>
        </Link>
        <div className="button-right"></div>
      </div>

      <div className="button">
        <div className="button-left"></div>
        <Link to="/award">
          <div className="button-mid">Award</div>
        </Link>
        <div className="button-right"></div>
      </div>

      <div className="button">
        <div className="button-left"></div>
        <Link to="/students">
          <div className="button-mid">Students</div>
        </Link>
        <div className="button-right"></div>
      </div>

      <div className="button">
        <div className="button-left"></div>
        <Link to="/teachers">
          <div className="button-mid">Teachers</div>
        </Link>
        <div className="button-right"></div>
      </div>
    </div>
  )
}
