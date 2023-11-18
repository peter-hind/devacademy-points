import request from 'superagent'
import User from '../../models/user.ts'

export async function handleUser(user: User): Promise<any> {
  await request.post('/api/v1/user').send({ user })
}
