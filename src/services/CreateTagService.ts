import { getCustomRepository } from 'typeorm'
import { TagsRepositories } from '../repositories/TagsRepositories'
import { CustomErrors } from '../utils/CustomErrors'

class CreateTagService {
  async execute (name: string) {
    const tagsRepositories = getCustomRepository(TagsRepositories)

    if (!name) {
      throw new CustomErrors({ status: 422, message: 'Incorrect name!' })
    }

    const tagAlreadyExist = await tagsRepositories.findOne({
      name
    })

    if (tagAlreadyExist) {
      throw new CustomErrors({ status: 409, message: 'Tag already exists!' })
    }

    const tag = tagsRepositories.create({
      name
    })

    await tagsRepositories.save(tag)

    return tag
  }
}

export { CreateTagService }
