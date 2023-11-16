import express from 'express'
import * as db from '../db/db.ts'
import { StudentData } from '../../models/profile.ts'

const router = express.Router()

// Get api/v1/profile
router.get('/:id', async (req, res) => {
  try {
    const studentId = Number(req.params.id)
    const student = await db.getStudent(studentId)
    if (!student) {
      res.status(404).json({ message: 'Student not found' })
      return
    }
    res.json(student)
  } catch (err) {
    res.status(500).json({
      message: 'An error occurred while fetching students',
      error: err instanceof Error ? err.message : 'Unknown error',
    })
  }
})
//Pete - added route to get all students from db instead of just one - can use the 'individuals' route above for the individual student pages
router.get('/', async (req, res) => {
  try {
    const students = await db.getAllStudents()
    if (!students) {
      res.status(404).json({ message: 'No students!' })
      return
    }
    res.json(students)
  } catch (err) {
    res.status(500).json({
      message: 'An error occurred while fetching students',
      error: err instanceof Error ? err.message : 'Unknown error',
    })
  }
})

export default router
