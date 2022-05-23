const LoginRoute = require('../../presentation/routes/login-router')
const AuthUseCase = require('../../usecases/users/auth-usecase')
const UserRepository = require('../../infra/repositories/load-user-repository')
const Encrypter = require('../../utils/encrypter')
const TokenGenerator = require('../../utils/token-jwt')

module.exports = class LoginRouterCompose {
    static compose() {
        const userRepository = UserRepository
        const encrypter = new Encrypter()
        const tokenGenerator = new TokenGenerator()
        const authUseCase = new AuthUseCase({ userRepository, encrypter, tokenGenerator })

        return new LoginRoute({
            authUseCase
        })
    }
}