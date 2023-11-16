import request from 'superagent'
import { Comment } from '../../models/comment'
const commentUrl = '/api/v1/comments'

//Pete - changed from 'Profile' to 'Profiles' at getting all students
export async function getComments(): Promise<Comment[]> {
  const profileResp = await request.get(commentUrl)
  return profileResp.body
}
