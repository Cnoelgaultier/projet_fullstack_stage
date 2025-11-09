import router from '@adonisjs/core/services/router'
import UsersController from '#controllers/users_controller'

router.get('/users', [UsersController, 'index'])
router.post('/users', [UsersController, 'store'])