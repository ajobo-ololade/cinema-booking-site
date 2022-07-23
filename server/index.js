const express=require('express')
const app =express()
const bodyParser=require('body-parser')
// app.use(express.static(__dirname+'/build'))
app.use(bodyParser.urlencoded({extended:true,limit:"50mb"}))
app.use(bodyParser.json({limit:"50mb"}))
const cors=require('cors')
app.use(cors())
require('dotenv').config()
const mongoose=require("mongoose")
const URI=`mongodb+srv://AboladeTikristi:tikristi@cluster0.8i7iv.mongodb.net/hospital_management?retryWrites=true&w=majority`
require('dotenv').config()
const PORT=process.env.PORT||5006
const userRouter=require("./routes/users.route")
app.get('/',(req,res)=>{
  res.send({name:'fish'})
})
// app.get('/*'),(req,res)=>{
//   res.sendFile(__dirname+"/build/index.html")
// }
// app.use(userRouter)
app.use(userRouter)
mongoose.connect(URI,(err)=>{
      if (err) {
        console.log("mongoose not connected yet")
        console.log(err)    
      }
      else{console.log('mongoose connected successfully')}
})
var connection=app.listen(PORT,()=>{
    console.log(`app is listening on port ${PORT}`)
})

