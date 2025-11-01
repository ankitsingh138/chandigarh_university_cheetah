import express from 'express'
import { pingController } from '../controllers/pingController.js'

const router = express.Router()

router.get('/', pingController)

export default router
