import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import TeacherProfile from './TeacherProfile'

export default function Heading() {
  const { user, isAuthenticated } = useAuth0()

  return (
    <div className="box">
      <img
        src="/images/dap-logo.svg"
        alt="Dev Academy Points Logo"
        className="heading"
      />
      <TeacherProfile />
      {user ? <LogoutButton /> : <LoginButton />}
    </div>
  )
}
