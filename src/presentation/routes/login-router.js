const { ErrorGeneric } = require('../../utils')

module.exports = class LoginRoute {
    constructor({authUseCase}){
        this.authUseCase = authUseCase
    }

    async route(httpRequest){
        try {    
            
            const {email, password} = httpRequest.body       
            if(!email){
                throw new ErrorGeneric(400, 'Invalid user field!')
            }
            if(!password){
                throw new ErrorGeneric(400, 'Invalid password field!')
            }

            const accessToken = await this.authUseCase.autenticate(email, password)

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