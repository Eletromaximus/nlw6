import { Router } from 'express'
import { CreateUserController } from './controllers/CreateUserController'
import { CreateTagController } from './controllers/CreateTagController'
import { ensureAdmin } from './middlewares/ensureAdmin'

const router = Router()

const createUserControlle = new CreateUserController()
const createTagControlle = new CreateTagController()

router.post('/users', createUserControlle.handle)

router.post('/tags', ensureAdmin, createTagControlle.handle)

export { router }
