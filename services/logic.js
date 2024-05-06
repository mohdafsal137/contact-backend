const db = require('../services/db')

const getAllUsers = ()=>{
    return db.users.find().then((result)=>{
        if(result){
            return{
                statusCode:200,
                users:result
            }
        }
        else{
            return{
                statusCode:404,
                message:'cant find users'
            }
        }
    })
}

//add a new user in the database
const adddata=(id,username,email,phone,address)=>{
    return db.users.findOne({id}).then((result)=>{
        if(result){//if employee id already exist
            return{
                statusCode:404,
                message:"user already exist"
            }
        }
        else{//id is not in the database then it save to the database
            const newData= db.users({id,username,email,phone,address})
            newData.save()
            return{
                statusCode:200,
                message:"user added successfully"
            }
        }
    })
}

const deletedata=(id)=>{
    return db.users.deleteOne({id}).then((result)=>{
            return{
                statusCode:200,
                message:"delete successfully"
            }
    })
    .catch((error)=>{
        return{
            statusCode:401,
            message:"failed to delete "
        }
    })
}
//get an employee
const viewdata=(id)=>{
    return db.users.findOne({id}).then((result)=>{
        if(result){
            return{
                statusCode:200,
                users:result
            }

        }
        else{
            return{
                statusCode:404,
                message:'cant find employee'
            }
          

        }
    })
}
//edit an employee
const updateemp=(id,username,email,phone,address)=>{
    return db.users.findOne({id}).then((result)=>{
        if(result){
            //assigning updated information to the database values
            result.id=id;
            result.username=username;
            result.email=email;
            result.phone=phone;
            result.address=address;
            //save updated details in db
            result.save()

            return{
                statusCode:200,
                message:'data updated successfully'
            }

        }
        else{
            return{
                statusCode:404,
                message:'cant find employee'
            }
          

        }
    })
}

module.exports = {
    getAllUsers,
    adddata,
    deletedata,
    viewdata,
    updateemp
}