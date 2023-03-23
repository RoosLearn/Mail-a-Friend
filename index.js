require('dotenv').config();

const nodemailer = require('nodemailer');
const express = require('express')
const app = express()
const port = 3000


app.listen(port, () => {
  console.log(`nodemailerProject is listening at http://localhost:${port}`)
})


let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN
    }
  });

  let mailOptions = {
    from: 'xxx@gmail.com',
    to: 'yyy@gmail.com',
    subject: 'Nodemailer Project',
    html: '<h1>Hello There, Welcome to your Email</h1><h2>This email is send to you using nodemailer.</h2><p>Here is an image for your Warm Welcome. Enjoy !!! </p><a href="https://www.animatedimages.org/cat-good-morning-1225.htm"><img src="https://www.animatedimages.org/data/media/1225/animated-good-morning-image-0025.gif" border="0" alt="animated-good-morning-image-0025" /></a><h3>Write back if you need to know more</h3><a href="https://www.animatedimages.org/cat-welcome-707.htm"><img src="https://www.animatedimages.org/data/media/707/animated-welcome-image-0126.gif" border="0" alt="animated-welcome-image-0126" /></a>'
  };
  

  transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      console.log("Error " + err);
    } else {
      console.log("Email sent successfully");
    }
  });
