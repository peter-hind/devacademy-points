import { StudentData } from '../../models/profile'
//Pete- Just slightly altered to destructure the props to make it a bit cleaner.
function Profile({ student_name, student_points }: StudentData) {
  return (
    <div>
      <h3>{student_name}</h3>
      <p>Points: {student_points}</p>
    </div>
  )
}
export default Profile
