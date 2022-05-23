const { ErrorGeneric } = require("../../utils")

module.exports = class AuthUseCase {
    constructor({ userRepository, encrypter, tokenGenerator }){
        this.userRepository = userRepository
        this.encrypter = encrypter
        this.tokenGenerator = tokenGenerator
    }

    async autenticate(email, password){
        if(!email){
            throw new ErrorGeneric(400, 'insvalid user!')
        }
        if(!password){
            throw new ErrorGeneric(400, 'insvalid password!')
        }

        const userRep = await this.userRepository.load(email)
        console.log(userRep);

        const valid = userRep

        if(valid){
            return true
        }

        return false
    }
}