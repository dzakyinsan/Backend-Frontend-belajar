const express=require('express')
const {userControllers}= require('../controllers')
const {auth}=require('../helper/auth')

const router=express.Router()

router.get('/users',userControllers.getUsers)
router.put('/users/:id',userControllers.updateUsers)
router.post('/postusers',userControllers.postUsers)
router.delete('/users/:id',userControllers.deleteUsers)

module.exports=router