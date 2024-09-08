var QRCode = require('qrcode');

QRCode.toString('yooshic', { type: 'terminal' }, function (err, data) {
  console.log(data);
});