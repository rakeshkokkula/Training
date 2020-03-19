var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rakeshkokkula2@gmail.com',
    pass: '9966012923'
  }
});

var mailOptions = {
  from: 'rakeshkokkula2@gmail.com',
  to: 'rakeshkokkula3@gmail.com',
  subject: 'Sending Email using Node.js',
//   text: 'That was easy!' //To send normal text
  html: '<h1>Welcome</h1><p>That was easy!</p>'//To send html text
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});