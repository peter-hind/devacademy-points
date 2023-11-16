import { TeacherData } from '../../models/teachers'

function TeachersPage({ teacher_name, favorite_thing }: TeacherData) {
  return (
    <div>
      <h3>{teacher_name}</h3>
      <p>Favorite thing: {favorite_thing}</p>
    </div>
  )
}
export default TeachersPage
