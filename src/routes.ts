import { Router } from 'express'
import { CreateUserController } from './controllers/CreateUserController'

const router = Router()

const createUserControle = new CreateUserController()

router.post('/users', createUserControle.handle)

export { router }
