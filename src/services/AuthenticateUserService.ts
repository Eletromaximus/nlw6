import { getCustomRepository } from 'typeorm'
import { UsersRepositories } from '../repositories/UsersRepositories'
import { CustomErrors } from '../utils/CustomErrors'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

interface IAuthenticateRequest {
  email: string;
  password: string;
}
class AuthenticateUserService {
  async execute ({ email, password }: IAuthenticateRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories)

    const user = await usersRepositories.findOne({
      email
    })

    if (!user) {
      throw new CustomErrors({ status: 401, message: 'Email/Password incorrect' })
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new CustomErrors({
        status: 401,
        message: 'Email/Password incorrect'
      })
    }

    const token = sign(
      {
        email: user.email
      },
      '613f69e71c0a906fc784e3b5899ee128',
      {
        subject: user.id,
        expiresIn: '1d'
      }
    )

    return token
  }
}

export { AuthenticateUserService }
