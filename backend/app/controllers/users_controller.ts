// backend/app/Controllers/Http/UsersController.ts
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UserService from 'App/Services/UserService' // 1. On importe notre "Cerveau"
import UserValidator from 'App/Validators/UserValidator' // 2. On importe notre "Gardien"

export default class UsersController {
  
  /**
   * Route: GET /users
   * [cite: 14]
   */
  public async index({ response }: HttpContextContract) {
    // 3. On demande au Service de nous donner les utilisateurs
    const users = UserService.getAll()

    return response.ok(users)
  }

  /**
   * Route: POST /users
   * 
   */
  public async store({ request, response }: HttpContextContract) {
    // 4. On demande au Validateur de vérifier les données
    // S'il y a une erreur, il s'arrête ici et renvoie une erreur 422
    const payload = await request.validate(UserValidator)

    // 5. Si les données sont valides, on les envoie au Service pour création
    const newUser = UserService.create(payload)

    // 6. On renvoie le nouvel utilisateur avec un statut 201 (Created)
    return response.created(newUser)
  }
}