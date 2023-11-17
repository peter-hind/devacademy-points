import { StudentData } from '../../models/profile'
import { useProfiles } from '../hooks/useProfiles'
import Profile from './Profile'

function StudentsPage() {
  const { data: studentData } = useProfiles()
  return (
    <div>
      {studentData?.map((student) => (
        <div key={student.student_id}>
          <Profile
            student_name={student.student_name}
            student_points={student.student_points}
            student_id={student.student_id}
          />
          <img
            src={`/images/student-${student.student_name}.svg`}
            alt={student.student_name}
          />
        </div>
      ))}
    </div>
  )
}

export default StudentsPage
