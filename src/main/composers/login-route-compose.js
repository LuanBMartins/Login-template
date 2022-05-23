const LoginRoute = require('../../presentation/routes/login-router')
const AuthUseCase = require('../../usecases/users/auth-usecase')
const UserRepository = require('../../infra/repositories/load-user-repository')
const Encrypter = require('../../utils/encrypter')

module.exports = class LoginRouterCompose {
    static compose() {
        const userRepository = UserRepository
        const encrypter = new Encrypter()
        const authUseCase = new AuthUseCase({ userRepository, encrypter })

        return new LoginRoute({
            authUseCase
        })
    }
}