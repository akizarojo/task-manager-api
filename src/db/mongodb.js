//CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
    if (error){
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)
    // db.collection('users').insertOne({
    //     name: 'Anja',
    //     age: 25
    // }, (error, result) => {
    //     if (error){
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })


    // db.collection('users').insertMany([{
    //     name: 'Jen',
    //     age: 28
    // }, {
    //     name: 'kaye',
    //     age: 30
    // }], (error, result) => {
    //     if (error){
    //         return console.log('Unable to insert documents')
    //     }

    //     console.log(result.ops)

    // })

    // db.collection('task').insertMany([
    //     {
    //         description: 'WAsh Dishes',
    //         completed: false
    //     },{
    //         description: 'cook food',
    //         completed: true
    //     }, {
    //         description: 'do laundry',
    //         completed: true
    //     }
    // ], (error, result) =>{
    //     if (error){
    //         return console.log('Cannot insert document!')
    //     }

    //     console.log(result.ops)
    // })


    // db.collection('users').findOne( {_id: new ObjectID("5f69bda63646877e937c6cd7")}, (error, user) => {
    //     if (error) {
    //         return console.log('unable to fetch')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({ age: 25 }).toArray((error, users) => { 
    //     if (error){
    //         console.log('Error')
    //     }
    //     console.log(users)
    // })

    // db.collection('task').findOne({ _id: new ObjectID("5f69cb876a9f278df3ef88a4")}, (error, task) => {
    //     console.log(task)
    // })

    // db.collection('task').find({ completed: false }).toArray((error, task) => {
    //     console.log(task)
    // })

//    db.collection('users').updateOne({
//         _id: new ObjectID("5f69c531b631f086f1e539c2")
//     },{
//         $inc: {
//             age: 5
//         }
//     }).then((result)=> {
//         console.log(result)
//     }).catch((error) => {
//         console.log(error)
//     })


    // db.collection('task').updateMany({
    //     completed: false
    // },{
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log('modified account')
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').deleteMany({
    //     age: 25
    // }).then((result) => {
    //     console.log('deleted')
    // }).catch((error) => {
    //     console.log(error)
    // })    

    db.collection('task').deleteOne({
        description: 'cook food'
    }).then((result) => {
        console.log('deleted')
    }).catch((error) => {
        console.log('error')
    })

})
