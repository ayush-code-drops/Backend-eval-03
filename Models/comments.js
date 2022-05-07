const mongoose = require('mongoose');

const comment = new mongoose.Schema({
    "body": { type: String, required: true },
    "timeStamps": { type: String, required: true,default:Date.now() },
   
});

module.exports = mongoose.model('comment', comment);