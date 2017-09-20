var router = require('express').Router();
var mongoose = require('mongoose');


router.get('/ticket/:ticketHash',(req,res)=>{
    console.log('receive ticket check request');
    let ticketHash = req.params.ticketHash;
    let ticketInfo = decrypt(ticketHash);
    ticketInfo = ticketInfo.split('-');
    res.send(ticketInfo)
})

function decrypt(hash){
    let byte = new Buffer.from(hash,'base64')
    // TODO: byte to decrpt byte
    let decryptByte = byte
    let str = decryptByte.toString();
    return str
}




module.exports = router
