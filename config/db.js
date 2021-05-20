const mongoose = require('mongoose')

module.exports = () => {
    mongoose.connect(process.env.MONGO_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    mongoose.connection.on('open', () => {
        console.log("Mongo Connected")
    })


    mongoose.connection.on('error', (err) => {
        console.log("MongoDb error")
        process.exit()
    })

    mongoose.Promise = global.Promise
}