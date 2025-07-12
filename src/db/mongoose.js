const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {})

// const me = new User({
//     name: '   Lore   ',
//     email: 'MYEMAIL@mail.Com     ',
//     password: '       phone098!        ',
//     // age: -1
// })

// me.save().then((me) => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })

// const task = new Task({
//     description: '      Eat lunch'
//     // completed: false
// })

// task.save().then((task) => {
//     console.log(task)
// }).catch((error) => {
//     console.log(error)
// })