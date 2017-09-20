var QRCode = require('qrcode')
var fs = require('fs')
var mongoose = require('mongoose');
var util = require('util')
var config = require('./config')
var domainName = config.domainName
var path = require('path')
function generateQRCode(name,phone,serialNumber,no){
    let encodedStr = encryptAndBase64(name,phone,serialNumber,no);

    QRCode.toDataURL(`http://${domainName}/ticket/${encodedStr}`, function (err, url) {
        let pic = url.slice(22)
        let picBuffer = new Buffer.from(pic,'base64')
        fs.writeFileSync(path.join(__dirname,'public','QRCODE',`${encodedStr}.png`),picBuffer)
    })
}


function encryptAndBase64(name,phone,serialNumber,no){
    // TODO: encryptFunction
    let str = (name+'-'+phone+'-'+serialNumber+'-'+no)
    let base64Stt = new Buffer.from(str).toString('base64')
    console.log(base64Stt)
    console.log(new Buffer(base64Stt,'base64').toString())
    return base64Stt
}


generateQRCode('norman','0930947777','017986',0)


