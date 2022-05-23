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

        const user = await this.userRepository.load(email)
        if(!user){
            throw new ErrorGeneric(401, 'Unauthorized')
        }

        const authValid = await this.encrypter.compare(password, user.password)
        console.log(authValid, password, user.password);
        const valid = user && authValid



        if(valid){
            return true
        }

        return false
    }
}