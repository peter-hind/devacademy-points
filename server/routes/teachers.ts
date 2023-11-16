import express from 'express'
import * as db from '../db/db.ts'
import { TeacherData } from '../../models/teachers.ts'

const router = express.Router()

router.get('/teachers', async (req, res) => {
  try {
    const teachers = await db.getAllTeachers()
    if (!teachers) {
      res.status(404).json({ message: 'No teachers!' })
      return
    }
    res.json(teachers)
  } catch (err) {
    res.status(500).json({
      message: 'An error occurred while fetching teachers',
      error: err instanceof Error ? err.message : 'Unknown error',
    })
  }
})

export default router
