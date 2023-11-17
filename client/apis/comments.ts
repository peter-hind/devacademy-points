import request from 'superagent'
import { Comment, CommentData } from '../../models/comment'
const commentUrl = '/api/v1/comments'

//Pete - changed from 'Profile' to 'Profiles' at getting all students
export async function getComments(): Promise<Comment[]> {
  const profileResp = await request.get(commentUrl)
  return profileResp.body
}

export async function addComment(newComment: CommentData): Promise<Comment> {
  const profileResp = await request.post(`${commentUrl}/add`).send(newComment)
  return profileResp.body
}
