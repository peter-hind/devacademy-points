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
      <div className="comment-1a corner"></div>
      <div className="comment-1b top"></div>
      <div className="comment-1c corner"></div>
      <div className="comment-2a left"></div>
      
      <div className="single-comment">
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
      
      <div className="comment-2c right"></div>
      <div className="comment-3a corner"></div>
      <div className="comment-3b bottom"></div>
      <div className="comment-3c corner"></div>
    </div>

  )
}
