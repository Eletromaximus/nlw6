import { Response, Request } from 'express'
import { ListTagService } from '../services/ListTagService'

class ListTagsController {
  async handle (request: Request, response: Response) {
    const listTagsService = new ListTagService()

    const tags = await listTagsService.exectue()

    return response.json(tags)
  }
}

export { ListTagsController }
