import React from 'react'
import { StudentData } from '../../models/profile'

function Profile(props: StudentData) {
  return (
    <div>
      <h3>{props.student_name}</h3>
      <p>Points: {props.student_points}</p>
    </div>
  )
}
export default Profile
