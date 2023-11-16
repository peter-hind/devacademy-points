import Heading from './Heading'
import Comments from './Comments'
import Form from './Form'
import Profile from './Profile'
import { useQuery } from '@tanstack/react-query'
import { getProfiles } from '../apis/profile'
import { useProfiles } from '../hooks/useProfiles.ts'
import { Route, Routes, Outlet } from 'react-router-dom'
import Nav from './Nav.tsx'

function App() {
  //Pete - call useQuery/useProfiles hook to get all student profiles by calling API getProfiles function
  const { data: profileData } = useProfiles()
  return (
    <div className="app">
      <div className="container">
        <Heading />
        <Nav />
        <Outlet />
      </div>
      <div className="tile-bottom"></div>
    </div>
  )
}

export default App
