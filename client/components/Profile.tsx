import { StudentData } from '../../models/profile'
//Pete- Just slightly altered to destructure the props to make it a bit cleaner.
function Profile({ student_name, student_points }: StudentData) {
  return (

  <div className="grid-box">
    <div className="grid-1a corner"></div>
    <div className="grid-1b top"></div>
    <div className="grid-1c corner"></div>
    <div className="grid-2a left"></div>
    
    <div className='grid-content'>
      <div className='grid-flex'>
        <div className='comment'>
          <h3>{student_name}</h3>
          <p>Points: {student_points}</p>
        </div>
        <img src={`/images/student-${student_name}.svg`} alt={student_name} className="student"/>
      </div>
    </div>

    <div className="grid-2c right"></div>
    <div className="grid-3a corner"></div>
    <div className="grid-3b bottom"></div>
    <div className="grid-3c corner"></div>
  </div>



  )
}
export default Profile
