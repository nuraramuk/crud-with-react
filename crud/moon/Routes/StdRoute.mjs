import express from 'express'
import { getStd , postStd, updateStd, deleteStd } from '../Controllers/StudentController.mjs'

const router = express.Router()

router.get('/students',getStd)

router.post('/create',postStd)

router.put('/update/:student_id',updateStd)

router.delete('/remove/:student_id',deleteStd)

export default router;