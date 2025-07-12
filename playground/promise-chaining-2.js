require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('6870ead232c82dd9e35613ce').then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})
    return count
}

deleteTaskAndCount('6870ff1de1107af12f65e0c6').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})