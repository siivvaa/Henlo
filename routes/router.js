const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const post = require("../models/post.js");



router.get('/', (req,res) => {
    res.render('start');
})

router.get('/index', (req,res) => {
    
    post.find()
        .then((resPost)=>{
            const messageList = [];
            resPost.forEach((post)=>{
            messageList.unshift(post);
            })

            res.render('home', {messageList});
    })
})

router.get('/create', (req,res) => {
    res.render('create');
})

router.post('/create', (req,res) => {
    var whenInfo = new Date().toLocaleString();
    user = req.body.name;
    body = req.body.body;

    const message = new post({
        user: user,
        body: body,
        when: whenInfo
    })

    message.save();
    res.redirect('/index');
})
module.exports = router