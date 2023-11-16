import { Comment } from '../../models/comment'

export default function SingleComment({
  comment_content,
  student_name,
  teacher_name,
  points,
}: Comment) {
  return (
    <div className="box single">
      <h3>{`${teacher_name} awarded ${student_name} with ${points} points!`}</h3>
      <h4>Reason:</h4>
      <p>{comment_content}</p>
    </div>
  )
}
