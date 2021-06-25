import { Router } from 'express'
import { CreateUserController } from './controllers/CreateUserController'
import { CreateTagController } from './controllers/CreateTagController'
import { ensureAdmin } from './middlewares/ensureAdmin'
import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { CreateComplimentController } from './controllers/CreateComplimentController'

const router = Router()

const createUserControlle = new CreateUserController()
const createTagControlle = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()
const createComplimentController = new CreateComplimentController()

router.post('/users', createUserControlle.handle)
router.post('/tags', ensureAdmin, createTagControlle.handle)
router.post('/login', authenticateUserController.handle)
router.post('/compliments', createComplimentController.handle)

export { router }
