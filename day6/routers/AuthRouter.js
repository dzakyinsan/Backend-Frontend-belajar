const express=require('express')
const {AuthController}= require('../controllers')

const router=express.Router()

router.get('/hashpassword',AuthController.belajarcrypto)
router.post('/register',AuthController.register)
router.post('/registerver',AuthController.registerver)
router.get('/login',AuthController.login)
router.get('/sendmail',AuthController.sendmail)
router.put('/verifikasiemail',AuthController.emailverifikasi)

module.exports=router