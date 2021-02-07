
var nodemailer = require('nodemailer');

var maillist = [
    'kiddykayes@gmail.com',
    'kayesfahimvlogs@gmail.com',
    'mrfawofficial@gmail.com',
  ];

  maillist.toString();

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mrfawbd@gmail.com',
    pass: '@Kayes321'
  }
});

var mailOptions = {
  from: 'mrfawbd@gmail.com',
  to: maillist,
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});