var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mrfawbd@gmail.com',
    pass: '@Kayes321'
  }
});

var mailOptions = {
  from: 'mrfawbd@gmail.com',
  to: 'kiddykayes@gmail.com',
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