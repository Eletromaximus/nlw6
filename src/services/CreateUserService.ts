import { getCustomRepository } from 'typeorm'
import { UsersRepositories } from '../repositories/UsersRepositories'
import { CustomErrors } from '../utils/CustomErrors'

interface IUserRequest {
  name: string;
  email: string;
  admin: boolean;
}

class CreateUserService {
  async execute ({ name, email, admin }: IUserRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories)

    if (!email) {
      throw new CustomErrors({ status: 422, message: 'Email incorrect' })
    }

    const userAlreadyExist = await usersRepositories.findOne({
      email
    })

    if (userAlreadyExist) {
      throw new CustomErrors({ status: 409, message: 'User already exist' })
    }

    const user = usersRepositories.create({
      name, email, admin
    })

    await usersRepositories.save(user)

    return user
  }
}

export { CreateUserService }
