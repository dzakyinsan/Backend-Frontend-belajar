const express=require('express')
const app=express()
const BodyParser=require('body-parser')
const cors=require('cors')
// const bearerToken=require('express-bearer-token')
const {MongoClient,url}=require('./connection')


const PORT=2020

app.use(cors())
// app.use(bearerToken())
app.use(BodyParser.urlencoded({ extended: false }));
app.use(BodyParser.json())
app.use(express.static('public'))

app.get('/',(req,res)=>{
    return res.status(200).send('<h1>Selamat datang di api ini</h1>')
})

const {
    userRouters,
    AuthRouters
}=require('./routers')

app.use('/auth',AuthRouters)
app.use('/user',userRouters)


app.listen(PORT,()=>console.log(`aktif di port ${PORT}`))


