import Heading from './Heading'
import Comments from './Comments'
import Form from './Form'
import Profile from './Profile'
import { useQuery } from '@tanstack/react-query'
import { getProfiles } from '../apis/profile'
import { useProfiles } from '../hooks/useProfiles'

function App() {
  //Pete - call useQuery/useProfiles hook to get all student profiles by calling API getProfiles function
  const { data: profileData } = useProfiles()
  return (
    <>
    <div className='tile-top'></div>
    <div className="content">
      <div className="container">
        <Heading />
        <Form />
        <Comments />
        {/* Pete - Iterate through profileData array and create a Profile component for each student, passing down the necessary props indicated by Katie */}
        {profileData &&
          profileData.map((student) => (
            <Profile
              key={student.student_id}
              student_name={student.student_name}
              student_points={student.student_points}
              student_id={student.student_id}
            />
          ))}
      </div>
    </div>
    <div className='tile-bottom'></div>
    </>
  )
}

export default App
