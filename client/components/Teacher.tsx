import { TeacherData } from '../../models/teachers'

function TeachersPage({ teacher_name, favorite_thing }: TeacherData) {
  return (
    <div className="grid-box">
    <div className="grid-1a corner"></div>
    <div className="grid-1b top"></div>
    <div className="grid-1c corner"></div>
    <div className="grid-2a left"></div>
    
    <div className='grid-content'>
    <h3>{teacher_name}</h3>
      <p>Favorite thing: {favorite_thing}</p>
    </div>

    <div className="grid-2c right"></div>
    <div className="grid-3a corner"></div>
    <div className="grid-3b bottom"></div>
    <div className="grid-3c corner"></div>
  </div>  

  )
}
export default TeachersPage
