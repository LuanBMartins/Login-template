const LoginRoute = require('../../presentation/routes/login-router')
const AuthUseCase = require('../../usecases/users/auth-usecase')
const UserRepository = {}

module.exports = class LoginRouterCompose {
    static compose() {
        const userRepository = {}
        const authUseCase = new AuthUseCase()

        return new LoginRoute({
            authUseCase
        })
    }
}