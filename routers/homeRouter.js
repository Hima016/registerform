const express = require('express');
const Router = express.Router();
const homeSchema = require('../models/homeSchema');

Router.get('/', (err, res) => {
    res.render('register', { title: 'Fill Form', password: '', email: '' })
})


Router.post('/register', async(req, res) => {
    try {
        const {
            name,
            number,
            email,
            passsword,
            cpassword
        } = req.body;
        console.log(name,
            number,
            email,
            passsword,
            cpassword);
        if (passsword === cpassword) {
            // const userData = new homeSchema({
            //     name,
            //     number,
            //     email,
            //     passsword,
            // })
            // userData.save(err => {
            //     if (err) {
            //         console.log('register', { title: 'sory this email_id already used', password: '', email: '' })
            //     } else {
            //         res.render('register', { title: 'Done', password: '', email: '' })
            //     }
            // })
            try {
                homeSchema.create({
                    name,
                    number,
                    email,
                    passsword,
                })
                console.log('register', { title: 'sory this email_id already used', password: '', email: '' })
            } catch (error) {
                res.render('register', { title: 'Done', password: '', email: '' })
            }

        } else {
            res.render('register', { title: '', password: 'password not mstching', email: '' })
        }


    } catch (error) {
        res.render('register', { title: 'Error in code', password: '', email: '' })
    }
})

module.exports = Router;