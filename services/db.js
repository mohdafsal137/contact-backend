const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/contact')
const users = mongoose.model('users',{
    id:String,
    username:String,
    email:String,
    phone:String,
    address:String,
    img:String

})

module.exports={
    users
}