var jwt = require('jsonwebtoken');


async function main(){
    const token = jwt.sign({ email: 'luan@email.com', password: '12345' }, '123456789', {
        expiresIn: '999d'
    });
    console.log(token);
    const data = jwt.verify(token, '123456789')
    console.log(data);
}

main()