module.exports = class LoginRoute {
    constructor(){}

    async route(httpRequest){
        return {
            status: 404,
            body: 'Service not implemented'
        }
    }
}