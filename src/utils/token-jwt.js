var jwt = require('jsonwebtoken');

module.exports = class TokenJWT {
    generate(data){
        return jwt.sign(data, '123456789', {
            expiresIn: '999d'
        });
    }
}