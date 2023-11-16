import React, { useState } from 'react';
import Profile from './Profile';
import SingleComment from './SingleComment';
import { StudentData } from '../../models/profile';
import { Comment } from '../../models/comment';

interface FormProps {
  student: StudentData;
}

const Form: React.FC<FormProps> = ({ student }) => {
  const [points, setPoints] = useState<number>(0);
  const [comment, setComment] = useState<string>('');

  const handlePointsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPoints(Number(e.target.value));
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newComment: Comment = {
      comment_content: comment,
      student_name: student.student_name,
      teacher_name: 'Your Teacher', // Change this 
      points: points,
      comment_id: Date.now().toString(), // Generate a unique ID
    };

    

    setPoints(0);
    setComment('');
  };

  return (
    <div>
      <Profile {...student} />
      <form onSubmit={handleFormSubmit}>
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
      {points !== 0 && comment && (
        <SingleComment
          student_name={student.student_name}
          teacher_name="Your Teacher"  // Change this 
          points={points}
          comment_content={comment}
        />
      )}
    </div>
  );
};

export default Form;





