import { StudentData } from '../../models/profile'
import Profile from './Profile'

function StudentsPage({ studentData }: { studentData: StudentData[] }) {
  return (
    <div>
      {studentData.map((student) => (
        <Profile
          key={student.student_id}
          student_name={student.student_name}
          student_points={student.student_points}
          student_id={student.student_id}
        />
      ))}
    </div>
  )
}

export default StudentsPage
