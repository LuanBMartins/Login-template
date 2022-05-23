const bcrypt = require('bcrypt')
const salt = 8
const text = '12345'
const outherText = 'BEFIT'



async function main(text, salt){
    const textHash = await bcrypt.hash(text, salt)
    console.log(textHash)
    const compare = await bcrypt.compare('12345', '$2b$08$2vtlqvMO0tY27lhopjmkTenn0dqyP7cUN/nJuYQFdzwhGAPU3XmwW')
    console.log(compare);
}

main(text, salt)