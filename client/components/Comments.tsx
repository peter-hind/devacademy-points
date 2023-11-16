import { useComments } from '../hooks/useComments'
import SingleComment from './SingleComment'
import { Comment } from '../../models/comment'

export default function Comments() {
  const { data: commentData } = useComments()

  return (
    <div className="box comments">
      <h1>Comments</h1>
      {commentData &&
        commentData.map((comment) => (
          <SingleComment
            key={comment.comment_id}
            comment_id={comment.comment_id}
            comment_content={comment.comment_content}
            student_name={comment.student_name}
            teacher_name={comment.teacher_name}
            points={comment.points}
          />
        ))}
    </div>
  )
}
