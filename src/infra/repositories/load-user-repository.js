const User = require('../database/user-model')

module.exports = {
    load: async (email) => {
        const result = await User.findOne({
            where: { email: email},
            raw: true
        })
        return result
    }
}