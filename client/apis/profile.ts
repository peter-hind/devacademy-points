import request from 'superagent'
import { StudentData } from '../../models/profile'
const profileUrl = '/api/v1/profile'

export async function getProfile(): Promise<StudentData[]> {
  const profileResp = await request.get(profileUrl)
  return profileResp.body
}
