import request from 'superagent'
import { TeacherData } from '../../models/teachers'

const teachersUrl = '/api/v1/teachers'

export async function getTeachers(): Promise<TeacherData[]> {
  const teacherResp = await request.get(teachersUrl)
  return teacherResp.body
}
