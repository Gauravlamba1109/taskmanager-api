//CRUD create read update delete 

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const ObjectID = mongodb.ObjectId

// const { MongoClient,ObjectID } = require('mongodb') 

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'


MongoClient.connect(connectionURL ,{ useNewUrlParser:true } , (error, client) => {
    if(error){
        return console.log('Unable to connect to database! ')
    }

    console.log('Connected Correctly')
    const db = client.db(databaseName)
    
    // db.collection('users').insertOne({
    //     name : 'Andrew',
    //     age:27
    // }, (error,result)=>{
    //     if(error) return console.log('Unable to insert')
    //     console.log(result.ops)
    // })
    
    // db.collection('users').insertMany([
    //     {
    //         name: 'martin'
    //     }, {
    //         name : 'jenny'
    //     }
    // ], (error,result)=>{
    //         if(error) return console.log('Unable to insert')
    //         console.log(result.ops)
    // })

    // db.collection('users').deleteMany({}).then((result)=>{
    //     console.log('deleted')
    // }).catch((error)=>{
    //     console.log('error',error)
    // })
})