const bcrypt = require('bcrypt')

module.exports = class Encrypter {
    async compare(data, hash){
        if(!data){
            return false
        }

        if(!hash){
            return false
        }

        return bcrypt.compare(data, hash)
    }

    async hash (item){
        return bcrypt.hash(item, 8)
    }
}