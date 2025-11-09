import type { HttpContext } from '@adonisjs/core/http'
import UserService from '#services/UserService'
import { createUserValidator } from '#validators/user'

export default class UsersController {
  async index({ response }: HttpContext) {
    const users = UserService.getAll()
    return response.ok(users)
  }

  async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createUserValidator)
    const newUser = UserService.create(payload)
    return response.created(newUser)
  }
}