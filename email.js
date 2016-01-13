var nodemailer = require('nodemailer');
var app = express();

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport('smtps://aditya.p1993@hotmail.com:GoogleEarth1993@smtp.hotmail.com');

// NB! No need to recreate the transporter object. You can use
// the same transporter object for all e-mails

// setup e-mail data with unicode symbols
var mailOptions = {
    from: 'Fred Foo ✔ <foo@blurdybloop.com>', // sender address
    to: 'Aditya Purandare <hello@adityapurandare.ml>', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ✔', // plaintext body
    html: '<b>Hello world ✔</b>' // html body
};

app.post('./app/index.html', function(req,res, next){
    console.log("Hello");
});

// send mail with defined transport object
/*transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);

});
*/
