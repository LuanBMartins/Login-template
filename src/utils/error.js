module.exports = class ErrorConfig extends Error{
    constructor(status, message){
        super(),
        this.status = status,
        this.message = message
    }
}