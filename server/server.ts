import express from 'express'
import * as Path from 'node:path'
import profileRoutes from './routes/profiles'
import commentRoutes from './routes/comments'
import teacherRoutes from './routes/teachers'

const server = express()

server.use(express.json())
//Pete - added middleware to redirect profile routes to profiles router.
server.use('/api/v1/profiles', profileRoutes)
server.use('/api/v1/comments', commentRoutes)
server.use('/api/v1/teachers', teacherRoutes)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
