const LoginRoute = require('../../presentation/routes/login-router')
const AuthUseCase = require('../../usecases/users/auth-usecase')
const UserRepository = require('../../infra/repositories/load-user-repository')

module.exports = class LoginRouterCompose {
    static compose() {
        const userRepository = UserRepository
        const authUseCase = new AuthUseCase({ userRepository })

        return new LoginRoute({
            authUseCase
        })
    }
}