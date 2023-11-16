import Heading from './Heading'
import Comments from './Comments'
import Form from './Form'
import Profile from './Profile'
import { useQuery } from '@tanstack/react-query'
import { getProfiles } from '../apis/profile'
import { useProfiles } from '../hooks/useProfiles'
import { getTeachers } from '../apis/teachers'
import { useTeachers } from '../hooks/useTeachers'
import { Link } from 'react-router-dom'
import StudentsPage from './StudentsPage'
import TeachersPage from './TeachersPage'

function App() {
  //Pete - call useQuery/useProfiles hook to get all student profiles by calling API getProfiles function
  const { data: profileData } = useProfiles()
  const { data: teacherData } = useTeachers()
  return (
    <>
      <div className="tile-top"></div>
      <div className="content">
        <div className="container">
          <Heading />
          <Form />
          <Comments />
          {/* Pete - Iterate through profileData array and create a Profile component for each student, passing down the necessary props indicated by Katie */}
          {profileData &&
            profileData.map((student) => (
              <div key={student.student_id}>
                <Profile
                  student_name={student.student_name}
                  student_points={student.student_points}
                  student_id={student.student_id}
                />
              </div>
            ))}
        </div>
        {teacherData &&
          teacherData.map((teacher) => (
            <div key={teacher.teacher_id}>
              <TeachersPage
                teacher_name={teacher.teacher_name}
                teacher_id={teacher.teacher_id}
                favorite_thing={teacher.favorite_thing}
              />
            </div>
          ))}
      </div>
      <div className="tile-bottom"></div>
    </>
  )
}
export default App
