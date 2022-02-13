const express = require('express');
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    when: {
        type: String
    }
});

//Model

const Post = mongoose.model('Post', postSchema);
module.exports = Post;