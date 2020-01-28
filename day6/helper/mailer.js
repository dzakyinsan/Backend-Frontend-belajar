const nodemailer = require('nodemailer')



const transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'dzakyinsan20@gmail.com',
        pass:'fkylewlipbvndghn'
    },
    tls:{
        rejectUnauthorized:false
    }
})

module.exports=transporter