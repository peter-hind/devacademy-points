import db from './connection.ts'
import { StudentData } from '../../models/profile'

export function getStudent(id: number) {
  return db('students').select().where('student_id', id).first()
}
