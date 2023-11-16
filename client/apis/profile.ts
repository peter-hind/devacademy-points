import request from 'superagent'
import { StudentData } from '../../models/profile'
const profileUrl = '/api/v1/profiles'

//Pete - changed from 'Profile' to 'Profiles' at getting all students
export async function getProfiles(): Promise<StudentData[]> {
  const profileResp = await request.get(profileUrl)
  return profileResp.body
}
