const { adpt } = require('../adapters/express-router-adapter')
const LoginRouterCompose = require('../composers/login-route-compose')

module.exports = router => {
    router.post('/login', adpt(LoginRouterCompose.compose()))
}