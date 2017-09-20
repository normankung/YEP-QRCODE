var mongoose = require('mongoose')
var schema = mongoose.Schema

var userSchema = schema({
    name: String,
    phone: String,
    serialNumber: String,
    no: Number,
});


module.exports ={
    userSchema:userSchema
}