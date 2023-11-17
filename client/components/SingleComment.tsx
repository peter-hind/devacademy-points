import { Comment } from '../../models/comment'

export default function SingleComment({
  comment_content,
  student_name,
  teacher_name,
  points,
}: Comment) {
  return (
    // <div className="box single">
    //   <h3>{`${teacher_name} awarded ${student_name} with ${points} points!`}</h3>
    //   <h4>Reason:</h4>
    //   <p>{comment_content}</p>
    // </div>
    
    <div className="grid-container">
      <div className="grid-1a corner"></div>
      <div className="grid-1b top"></div>
      <div className="grid-1c corner"></div>
      <div className="grid-2a left"></div>
      
      <div className="grid-content">
        <div className='grid-flex'>
          <img src="/images/teacher-hair-short.svg" alt={teacher_name} className="teacher" />
          <div className="comment">
            <h3>
              <span className="bold">{teacher_name}</span>
              {` awarded `}
              <span className="bold">{student_name}</span>
              {` with `}
              <div className="sprite"></div>
              {` x `}
              <span className="bold">{points}</span>
              {` points!`}
            </h3>
            <p>{comment_content}</p>
          </div>
          <img src="/images/student-hair-short.svg" alt={student_name} className="student" />
        </div>
      </div>

      <div className="grid-2c right"></div>
      <div className="grid-3a corner"></div>
      <div className="grid-3b bottom"></div>
      <div className="grid-3c corner"></div>
    </div>

  )
}
