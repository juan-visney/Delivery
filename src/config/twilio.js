const twi = {}
//Both should be environment vars 
const ACCOUNT_SID = 'AC0ffb60d4e9a8a84d32ce8afb9cc554be';
const AUTH_TOKEN = '54c1691254526794d7d8ce7c39e88b4b';

const MY_PHONE_NUMBER = 'whatsapp:+14155238886';

twi.init = async(numero, mensaje)=>{
    const client = require('twilio')(ACCOUNT_SID, AUTH_TOKEN)
    client.messages.create({
        to: 'whatsapp:+591'+numero,
        from: MY_PHONE_NUMBER,
        body: mensaje
    })
    .then(message => console.log(message.sid))
}
module.exports = twi