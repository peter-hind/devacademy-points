import db from './connection.ts'
import { StudentData } from '../../models/profile'
import { CommentData } from '../../models/comment.ts'

export function getStudent(id: number) {
  return db('students').select().where('student_id', id).first()
}

export function getComment(id: number) {
  return db('comments').select().where('comment_id', id).first()
}
//Pete - simple 'get everybody' function to display everyone on dashboard.
export function getAllStudents() {
  return db('students').select()
}

export function getAllComments() {
  return db('teachers')
    .join('comments', 'comments.teacher_id', 'teachers.teacher_id')
    .join('students', 'students.student_id', 'comments.student_id')
    .select(
      'teachers.teacher_name',
      'students.student_name',
      'comments.comment_id',
      'comments.comment_content',
      'comments.points',
    )
}

export async function addComment(newComment: CommentData) {
  const studentId = await db('students')
    .where('student_name', newComment.student_name)
    .select('student_id')
    .first()
  console.log(studentId)
  const teacherId = await db('teachers')
    .where('teacher_name', newComment.teacher_name)
    .select('teacher_id')
    .first()
  console.log(teacherId)

  const addedComment = {
    comment_content: newComment.comment_content,
    student_id: studentId.student_id,
    teacher_id: teacherId.teacher_id,
    points: newComment.points,
  }

  return db('comments').insert(addedComment)
}
