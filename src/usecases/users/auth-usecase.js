const { ErrorGeneric } = require("../../utils")

module.exports = class AuthUseCase {
    constructor(userRepository, encrypter, tokenGenerator){
        this.userRepository = userRepository
        this.encrypter = encrypter
        this.tokenGenerator = tokenGenerator
    }

    async autenticate(user, password){
        if(!user){
            throw new ErrorGeneric(400, 'insvalid user!')
        }
        if(!password){
            throw new ErrorGeneric(400, 'insvalid password!')
        }

        const userRep = await this.userRepository.load(user)
        const valid = user && this.encrypter.compare(password)

        if(valid){
            return this.tokenGenerator.generate(userRep._id)
        }

        return false
    }
}