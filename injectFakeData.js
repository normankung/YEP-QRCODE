var mongoose = require('mongoose');
var fakeDate = require('./fakeData')
var config = require('./config');
var schema = require('./schema')
let userSchema = schema.userSchema;
var port = config.mongo.port;
var ip = config.mongo.ip;
var options = {
    server: {
        auto_reconnect: true
    }
};

let connect = mongoose.createConnection('mongodb://' + ip + ':' + port + '/' +'YEP', options, () => {
    console.log('connected');
})

userDb = connect.model('user',userSchema)
fakeDate.forEach((info)=>{
userDb.create(info).then((info)=>{
    console.log(`create ${JSON.stringify(info)} success`)
})

})