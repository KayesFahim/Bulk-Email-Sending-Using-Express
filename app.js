var nodemailer = require('nodemailer');
var fs = require('fs');

var maillist = [
    'kiddykayes@gmail.com',
    'kayesfahimvlogs@gmail.com',
    'mrfawofficial@gmail.com',
    'towfique.mdigital@gmail.com'
  ];

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mrfawbd@gmail.com',
      pass: '@Kayes321'
    }
});


fs.readFile('templete.html', {encoding: 'utf-8'}, function (err, html) {
  if (err) {
    console.log(err);
  } else {
    var mailOptions = {
      from: 'mrfawbd@gmail.com',
      to: maillist,
      subject: ' Email marketting',
      html: html
    };
    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  }
});