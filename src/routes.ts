import { Router } from 'express'
import { CreateUserController } from './controllers/CreateUserController'
import { CreateTagController } from './controllers/CreateTagController'

const router = Router()

const createUserControlle = new CreateUserController()
const createTagControlle = new CreateTagController()

router.post('/users', createUserControlle.handle)
router.post('/tags', createTagControlle.handle)

export { router }
