const LoginRoute = require('../../presentation/routes/login-router')

module.exports = class LoginRouterCompose {
    static compose() {
        return new LoginRoute()
    }
}