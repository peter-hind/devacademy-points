import React, { useState } from 'react'
import Profile from './Profile'
import SingleComment from './SingleComment'
import { StudentData } from '../../models/profile'
import { Comment, CommentData } from '../../models/comment'
import { useProfiles } from '../hooks/useProfiles'
import { addComment } from '../apis/comments'

// interface FormProps {
//   student: StudentData;
// }

const Form: React.FC = () => {
  const { data: profileData } = useProfiles()
  const [points, setPoints] = useState<number>(0)
  const [comment, setComment] = useState<string>('')
  const [student, setStudent] = useState<string>('Pete')

  const handlePointsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPoints(Number(e.target.value))
  }

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value)
  }

  const handleStudentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStudent(e.target.value)
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newComment: CommentData = {
      comment_content: comment,
      student_name: student,
      teacher_name: 'Jatin', // Change this
      points: points,
    }

    console.log(newComment)

    addComment(newComment)

    setPoints(0)
    setComment('')
    setStudent('Pete')
  }

  return (

<div className="grid-container">
<div className="grid-1a corner"></div>
<div className="grid-1b top"></div>
<div className="grid-1c corner"></div>
<div className="grid-2a left"></div>

<div className="grid-content">
  <div className='grid-flex'>
  <div className="form">
      <form onSubmit={handleFormSubmit}>
        <label>
          Student:
          <select
            id="student-select"
            value={student}
            onChange={handleStudentChange}
          >
            {profileData?.map((pupil) => (
              <option key={pupil.student_id}>{pupil.student_name}</option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Points:
          <input type="number" value={points} onChange={handlePointsChange} />
        </label>
        <br />
        <label>
          Comment:
          <input type="text" value={comment} onChange={handleCommentChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</div>

<div className="grid-2c right"></div>
<div className="grid-3a corner"></div>
<div className="grid-3b bottom"></div>
<div className="grid-3c corner"></div>
</div>


  )
}

export default Form
