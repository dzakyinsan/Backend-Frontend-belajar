const {MongoClient,ObjectID}=require('mongodb')

const url=`mongodb+srv://dzakyinsan20:pangya20@cluster0-fw2pw.mongodb.net/test?retryWrites=true&w=majority`

module.exports={
    MongoClient,ObjectID,url
}