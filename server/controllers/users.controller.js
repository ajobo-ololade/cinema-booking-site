const userModel = require('../models/user.model')
const cloudinary = require('cloudinary');
const SECRET = process.env.JWT_SECRET;
const bcrypt = require('bcryptjs');
const hbs = require('nodemailer-express-handlebars')
const nodemailer = require('nodemailer')
const path = require('path')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});


const sendToken = () => {
    const email = req.body.email

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
        to: user.email, // list of receivers
        subject: 'Welcome!',
        template: 'email', // the name of the template file i.e email.handlebars
        context: {
            name: `${user.firstname} ${user.lastname}`, // replace {{name}} with Adebola
            company: 'Medicare',
            email: user.email,
            token: num,

        },
    };

    // trigger the sending of the E-mail
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.send({ status: false, message: "error sending token" })
        }
        else {

            res.send({ status: true, message: num, email: user.email })
            console.log('Message sent: ' + info.response);

        }
    });


}
const Payment = (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const picture = req.body.picture
    const seatNo = req.body.seatNo
    const phonenumber = req.body.phonenumber
    const category = req.body.category
    const cinemaAddress = req.body.cinemaAddress
    const dateBooked = req.body.date

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
                    name: name,
                    email: email,
                    picture: result.secure_url,
                    seatNo: seatNo,
                    phonenumber: phonenumber,
                    category: category,
                    cinemaAddress: cinemaAddress,
                    date: dateBooked
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
                        const num = Math.floor(100000 + Math.random() * 900000);
                        var mailOptions = {
                            from: '"Joanna" <ladyj2183@gmail.com>', // sender address
                            to: user.email, // list of receivers
                            subject: 'Welcome!',
                            template: 'ticket', // the name of the template file i.e email.handlebars
                            context: {
                                name: `${user.firstname} ${user.lastname}`, // replace {{name}} with Adebola
                                company: 'Avo Cinema',
                                email: user.email,
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
                            else {

                                res.send({ status: true, message: num, email: user.email })
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
module.exports = { Payment, sendToken }