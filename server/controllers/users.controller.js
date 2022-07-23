const userModel = require('../models/users.model')
const cloudinary = require('cloudinary');
const SECRET = process.env.JWT_SECRET;
const bcrypt = require('bcryptjs');
const hbs = require('nodemailer-express-handlebars')
const nodemailer = require('nodemailer')
const path = require('path')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

const LandingPage=(res,req)=>{
    res.send("I am here o")
}
const sendToken = (req,res) => {
    const email = req.body.email
    const name=req.body.name

    console.log(req.body)

    // initialize nodemailer
    var transporter = nodemailer.createTransport(
        {
            service: 'gmail',
            auth: {
                user: 'ladyj2183@gmail.com',
                pass: 'sydorencexfzcmdc'
            }
        }
    );
console.log('here')
    // point to the template folder
    const handlebarOptions = {
        viewEngine: {
            partialsDir: path.resolve('./views/'),
            defaultLayout: false,
        },
        viewPath: path.resolve('./views/'),
    };

    // use a template file with nodemailer
    transporter.use('compile', hbs(handlebarOptions))
    // Importing modules

     const num = Math.floor(100000 + Math.random() * 900000);
  
    var mailOptions = {
        from: '"Joanna" <ladyj2183@gmail.com>', // sender address
        to: email, // list of receivers
        subject: 'Welcome!',
        template: 'email', // the name of the template file i.e email.handlebars
        context: {// replace {{name}} with Adebola
            company: 'BookIt',
            email: email,
            token: num,
            name:name

        },
    };

    // trigger the sending of the E-mail
    transporter.sendMail(mailOptions, function (error, info) {
        console.log(info)
        if (error) {
            console.log(error);
            res.send({ status: false, message: "error sending token" })
        }
        else if(info!==null) {
            console.log('Message sent: ' + info.response);
            res.send({ status: true, message: num, response:"An unique has been sent to your email to process your payment", email: email,token:num})
           

        }
    });


}
const Payment = (req, res) => {
    console.log(req.body)
    const name = req.body.obj.fullname
    const email = req.body.obj.email
    const picture = req.body.obj.profilePic
    const seatNo = req.body.obj.selected
    const phonenumber = req.body.phonenumber
    const category = req.body.obj.category
    const cinemaAddress = req.body.obj.cinemaAddress
    const cinema = req.body.obj.cinema
    const dateBooked = req.body.date
    const amount=req.body.amount
    const num = Date.now()
    cloudinary.v2.uploader.upload(picture,
        {
            folder: 'Ava Cinema Bookers pictures',
            //  public_id:`/${id1}`,
            format: 'jpg'
        },

        (err, result) => {
            if (err) {
                console.log(err)
                res.send({ message: "upload failed" })
            }
            else {
                console.log(result)
                const details = {
                    fullname: name,
                    email: email,
                    Image: result.secure_url,
                    seat: seatNo,
                    mobileNumber: phonenumber,
                    category: category,
                    amountPaid:amount,
                    cinema:`${cinema} ${cinemaAddress}`,
                    date: dateBooked,
                    ticketId:num
                }
                const form = new userModel(details)
                form.save((err, saved) => {
                    if (err) {
                        console.log(err)
                        console.log(`error`)
                        res.send({ message: "user signup failed, please try again later", status: false })
                    }
                    else {
                        // initialize nodemailer
                        var transporter = nodemailer.createTransport(
                            {
                                service: 'gmail',
                                auth: {
                                    user: 'ladyj2183@gmail.com',
                                    pass: 'sydorencexfzcmdc'
                                }
                            }
                        );

                        // point to the template folder
                        const handlebarOptions = {
                            viewEngine: {
                                partialsDir: path.resolve('./views/'),
                                defaultLayout: false,
                            },
                            viewPath: path.resolve('./views/'),
                        };

                        // use a template file with nodemailer
                        transporter.use('compile', hbs(handlebarOptions))
                        
                        var mailOptions = {
                            from: '"Joanna" <ladyj2183@gmail.com>', // sender address
                            to: email, // list of receivers
                            subject: 'Welcome!',
                            template: 'ticket', // the name of the template file i.e email.handlebars
                            context: {
                                name: name, // replace {{name}} with Adebola
                                company: 'Avo Cinema',
                                email: email,
                                bookerId: num,
                                category: category,
                                seatNo: seatNo,
                                image_url: result.secure_url,

                            },
                        };

                        // trigger the sending of the E-mail
                        transporter.sendMail(mailOptions, function (error, info) {
                            if (error) {
                                console.log(error);
                                res.send({ status: false, message: "error sending token" })
                            }
                            else if(info!==null) {

                                res.send({ status: true, message: num, email:email,response:"Ticket Generated" })
                                console.log('Message sent: ' + info.response);
                                //         res.send({message:"registration successful",status:true})
                            }
                        });


                        //     }
                        // })

                    }

                });
            }
        });


}
module.exports = { LandingPage,Payment, sendToken }