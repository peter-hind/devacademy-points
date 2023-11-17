import { TeacherData } from '../../models/teachers'

function TeachersPage({ teacher_name, favorite_thing }: TeacherData) {
  return (
    <div className="grid-box">
    <div className="grid-1a corner"></div>
    <div className="grid-1b top"></div>
    <div className="grid-1c corner"></div>
    <div className="grid-2a left"></div>

    <div className='grid-content'>
      <div className='grid-flex'>
        <div className='comment'>
          <h3>{teacher_name}</h3>
          <p>Favorite thing: {favorite_thing}</p>
        </div>
        <img src={`/images/teacher-${teacher_name}.svg`} alt={teacher_name} className="student"/>
      </div>
    </div>


    <div className="grid-2c right"></div>
    <div className="grid-3a corner"></div>
    <div className="grid-3b bottom"></div>
    <div className="grid-3c corner"></div>
  </div>  

  )
}
export default TeachersPage
