import db from './connection.ts'
import { StudentData } from '../../models/profile'

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

export function getAllTeachers() {
  return db('teachers').select()
}

export function getTeacher(id: number) {
  return db('teachers').select().where('teacher_id', id).first()
}
