const express= require('express')
const router = express.Router()
const userController = require("../controllers/users.controller")
router.get('/',userController.LandingPage)
router.post('/sendtoken',userController.sendToken)
router.post('/sendticket',userController.Payment)
// router.post('/docsignup',doctorController.Signup)
module.exports=router