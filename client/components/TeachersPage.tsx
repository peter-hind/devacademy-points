import { TeacherData } from '../../models/teachers'
import { useTeachers } from '../hooks/useTeachers'
import Teacher from './Teacher'

//Pete- Just slightly altered to destructure the props to make it a bit cleaner.
function TeachersPage() {
  const { data: teacherData } = useTeachers()
  return (
    <div className='profiles'>
      {teacherData?.map((teacher) => (
        <div key={teacher.teacher_id}>
          <Teacher
            teacher_name={teacher.teacher_name}
            favorite_thing={teacher.favorite_thing}
            teacher_id={teacher.teacher_id}
            teacher_picture={teacher.teacher_picture}
          />
        </div>
      ))}
    </div>
  )
}
export default TeachersPage
