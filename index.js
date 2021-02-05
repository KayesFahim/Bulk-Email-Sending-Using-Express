
var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var app = express();


app.use(express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
    res.send(fs.readFileSync('./views/index.html', 'utf8'));

});

app.post('/', function(req, res) {
    if(req.body.mail == "" || req.body.subject == "") {
        res.send("Error: Email & Subject should not be Blank");
        return false;
    }

var smtpTransport = nodemailer.createTransport("SMTP", {
    host: "smtp.gmail.com", 
    secureConnection: true, 
    port: 465, 
        auth: {
            user: '',
            pass: ''
        }
});

var mailOptions = {
    from: "Node Emailer - <email@gmail.com>",
    to: req.body.email, 
    subject: req.body.subject + " -",
    html: "<b>"+req.body.description+"<b>"
}
smtpTransport.sendMail(mailOptions, function(error, response) {
    if (error) {
        res.send("Email could not be sent due to error:" +error);
    }else {
        res.send("Email has been sent successfully");
    }
});
});

app.listen(process.env.PORT || 3000, function() {
    console.log("LISTENING!");
});
