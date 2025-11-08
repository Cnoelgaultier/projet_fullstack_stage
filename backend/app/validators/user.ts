// backend/app/Validators/UserValidator.ts
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UserValidator {
  constructor(protected ctx: HttpContextContract) {}


  public schema = schema.create({
    name: schema.string([rules.trim()]),
    email: schema.string([rules.trim(), rules.email()]), 
    role: schema.string([rules.trim()]),
  })


  public messages = {
    'name.required': 'Le nom est requis',
    'email.required': "L'email est requis",
    'email.email': "L'email n'est pas valide",
    'role.required': 'Le rôle est requis',
  }
}