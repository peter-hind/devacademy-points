import { StudentData } from '../../models/profile'
import { useProfiles } from '../hooks/useProfiles'
import Profile from './Profile'

function StudentsPage() {
  const { data: studentData } = useProfiles()
  return (
    
  <div className='profiles'>
      {studentData?.map((student) => (
        <div key={student.student_id}>
          <Profile
            student_name={student.student_name}
            student_points={student.student_points}
            student_id={student.student_id}
          />
        </div>
      ))}
  </div>



  )
}

export default StudentsPage
