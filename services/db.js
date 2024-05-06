const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/contact')
const users = mongoose.model('users',{
    id:String,
    username:String,
    email:String,
    phone:String,
    address:String

})

module.exports={
    users
}