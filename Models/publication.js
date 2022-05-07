const mongoose = require('mongoose');

const publication = new mongoose.Schema({
    "name": { type: String, required: true },
    "timeStamps": { type: String, required: true,default:Date.now() },
   
});

module.exports = mongoose.model('publication', publication);