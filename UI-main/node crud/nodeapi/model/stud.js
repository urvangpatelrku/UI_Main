var mongoose = require('mongoose');

var studSchema = mongoose.Schema({
    name:String,
    age:String,
    active:Boolean
})

module.exports = mongoose.model("datas",studSchema);