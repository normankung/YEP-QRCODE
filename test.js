var QRCode = require('qrcode')
var fs = require('fs')
QRCode.toDataURL('https://www.npmjs.com/package/qrcode', function (err, url) {
    let pic = url.slice(22)
    console.log(pic)
    let picBuffer = new Buffer.from(pic,'base64')
    fs.writeFileSync('test.png',picBuffer)
})