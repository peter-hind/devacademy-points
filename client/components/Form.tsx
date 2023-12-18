import React, { useState } from 'react'
import Profile from './Profile'
import SingleComment from './SingleComment'
import { StudentData } from '../../models/profile'
import { Comment, CommentData } from '../../models/comment'
import { useProfiles } from '../hooks/useProfiles'
import { addComment } from '../apis/comments'
import { useAuth0 } from '@auth0/auth0-react'
import doesUserContainName from '../../lib'
import TeachersPage from './TeachersPage'

// interface FormProps {
//   student: StudentData;
// }

const Form: React.FC = () => {
  const { user, isAuthenticated, isLoading } = useAuth0()
  const { data: profileData } = useProfiles()
  const [points, setPoints] = useState<number>(0)
  const [comment, setComment] = useState<string>('')
  const [student, setStudent] = useState<string>('Pete')

  let teacher: string
  const faciliators = [
    'Jatin',
    'Jen',
    'David',
    'DaviD',
    'Joseph',
    'Gerard',
    'Mario',
  ]

  if (doesUserContainName(user, 'jatin.puri@devacademy.co.nz')) {
    teacher = 'Jatin'
  } else if (doesUserContainName(user, 'jennifer.hurley@devacademy.co.nz')) {
    teacher = 'Jen'
  } else if (doesUserContainName(user, 'david.kavenga@devacademy.co.nz')) {
    teacher = 'David'
  } else if (
    doesUserContainName(user, 'david.gutierrez.roldan@devacademy.co.nz')
  ) {
    teacher = 'DaviD'
  } else if (doesUserContainName(user, 'joseph.quested@devacademy.co.nz')) {
    teacher = 'Joseph'
  } else if (doesUserContainName(user, 'gerard.paapu@devacademy.co.nz')) {
    teacher = 'Gerard'
  } else if (doesUserContainName(user, 'david.roldan@devacademy.co.nz')) {
    teacher = 'DaviD'
  } else if (
    doesUserContainName(user, 'david.gutierrez-roldan@devacademy.co.nz')
  ) {
    teacher = 'DaviD'
  } else if (doesUserContainName(user, 'mario@luigi.com')) {
    teacher = 'Mario'
  }
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

    if (faciliators.includes(teacher) === false) {
      alert('You are not a faciliator')
      return
    } else {
      alert('Authorized!')
    }

    const newComment: CommentData = {
      comment_content: comment,
      student_name: student,
      teacher_name: teacher,
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
        <div className="grid-flex">
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
                <input
                  type="number"
                  value={points}
                  onChange={handlePointsChange}
                />
              </label>
              <br />
              <label>
                Comment:
                <input
                  type="text"
                  value={comment}
                  onChange={handleCommentChange}
                />
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
