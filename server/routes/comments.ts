import express from 'express'
import * as db from '../db/db.ts'

const router = express.Router()

router.get('/:id', async (req, res) => {
  try {
    const commentId = Number(req.params.id)
    const comment = await db.getComment(commentId)
    if (!comment) {
      res.status(404).json({ message: 'Comment not found' })
      return
    }
    res.json(comment)
  } catch (err) {
    res.status(500).json({
      message: 'An error occurred while fetching comment',
      error: err instanceof Error ? err.message : 'Unknown error',
    })
  }
})

router.get('/', async (req, res) => {
  try {
    const comments = await db.getAllComments()
    console.log(comments)
    if (!comments) {
      res.status(404).json({ message: 'No comments!' })
      return
    }
    res.json(comments)
  } catch (err) {
    res.status(500).json({
      message: 'An error occurred while fetching comments',
      error: err instanceof Error ? err.message : 'Unknown error',
    })
  }
})

export default router
