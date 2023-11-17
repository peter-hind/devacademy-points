import { StudentData } from '../../models/profile'
import { useProfiles } from '../hooks/useProfiles'
import Profile from './Profile'

function StudentsPage() {
  const { data: studentData } = useProfiles()
  return (
    <div>
      {studentData?.map((student) => (
        <Profile
          key={student.student_id}
          student_name={student.student_name}
          student_points={student.student_points}
          student_id={student.student_id}
          student_picture={student.student_picture}
        />
      ))}
    </div>
  )
}

export default StudentsPage
