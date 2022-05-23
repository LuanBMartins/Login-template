const { ErrorGeneric } = require('../../utils')

module.exports = class LoginRoute {
    constructor({authUseCase}){
        this.authUseCase = authUseCase
    }

    async route(httpRequest){
        try {    
            
            const {user, password} = httpRequest.body       
            if(!user){
                throw new ErrorGeneric(400, 'Invalid user field!')
            }
            if(!password){
                throw new ErrorGeneric(400, 'Invalid password field!')
            }

            const accessToken = await this.authUseCase.autenticate(user, password)

            if(!accessToken){
                return {
                    status: 401,
                    body: accessToken
                }
            }

            return {
                status: 200,
                body: accessToken
            }
        } catch (error) {
            console.log(error)
            return {
                status: error.status || 500,
                body: error.message || 'Server Error!'
            }   
        }
    }
}