// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID
const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
// console.log(id)
// console.log(id.id)
// console.log(id.id.length)
// console.log(id.toHexString())
// console.log(id.toHexString().length)
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, {useNewUrlParser: true, useUnifiedTopology: true}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    console.log('Connected to the database!')
    const db = client.db(databaseName)
    
    // db.collection('users').insertOne({
    //     // _id: id,
    //     name: 'Lair',
    //     age: 29
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user!')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Lira',
    //         age: 28
    //     }, {
    //         name: 'Leer',
    //         age: 26
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents!')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Clean the house',
    //         completed: true
    //     }, {
    //         description: 'Renew inspection',
    //         completed: false
    //     }, {
    //         description: 'Pot plants',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert tasks!')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').findOne({_id: new ObjectID('68707819879b90487c532e2d')}, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })
    
    // db.collection('users').find({age: 27}).toArray((error, users) => {
    //     console.log(users)
    // })
    
    // db.collection('users').find({age: 27}).count((error, count) => {
    //     console.log(count)
    // })

    // db.collection('tasks').findOne({_id: new ObjectID('687075bbeb63bf3a244417a8')}, (error, task) => {
    //     console.log(task)
    // })

    // db.collection('tasks').find({completed: false}).toArray((error, tasks) => {
    //     console.log(tasks)
    // })

    // db.collection('users').updateOne({
    //     _id: new ObjectID('687072c38da29b3f6c3ae256')
    // }, {
    //     // $set: {
    //     //     name: 'Lure'
    //     // }
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').deleteMany({
    //     age: 29
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').deleteOne({
    //     description: 'Clean the house'
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })
})