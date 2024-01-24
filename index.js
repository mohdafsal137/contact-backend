const express = require('express')

const cors = require('cors')

const logic = require('./services/logic')

const conServer = express()

conServer.use(cors({
    origin:'http://localhost:3000'
}))

conServer.use(express.json())

conServer.listen(8000,()=>{
    console.log('contact server listening on port 8000');
})

conServer.get('/get-user',(req,res)=>{
    logic.getAllUsers().then((response)=>{
        res.status(response.statusCode).json(response);
    })
})

  //API call for add an user
  conServer.post('/add-user',(req,res)=>{
    logic.adddata(req.body.id,req.body.username,req.body.email,req.body.phone,req.body.address).then((response)=>{
      res.status(response.statusCode).json(response);
    })
  })

//API call for delete user
conServer.delete('/delete-user/:id',(req,res)=>{
  logic.deletedata(req.params.id).then((response)=>{
    res.status(response.statusCode).json(response);
  })
})

//API call for view an user
conServer.get('/view-user/:id',(req,res)=>{
  logic.viewdata(req.params.id).then((response)=>{
    res.status(response.statusCode).json(response);
  })
})

//API call for edit an user
conServer.post('/update-user/:id',(req,res)=>{
  logic.updateemp(req.params.id,req.body.username,req.body.email,req.body.phone,req.body.address).then((response)=>{
    res.status(response.statusCode).json(response);
  })
})