import express from 'express';
import { createStudent , getStudents ,deleteStudent} from '../controller/student.js';


const router = express.Router();


router.post('/create',createStudent)
router.get('/get',getStudents)
router.delete('/delete/:id',deleteStudent)

export default router;