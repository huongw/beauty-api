const dotenv = require("dotenv");
dotenv.config();

const nodemailer = require("nodemailer");
const cors = require("cors");

const PORT = process.env.PORT || 5000;
const express = require("express");
const app = express();

app.use(express.json());
app.use(cors());

// const transporter = nodemailer.createTransport({
//   service: process.env.EMAIL_SERVICE,
//   host: "smtp.gmail.com",
//   port: 465,
//   secure: true,
//   auth: {
//     type: process.env.TYPE,
//     user: process.env.EMAIL,
//     pass: process.env.EMAIL_PWD,
//     clientId: process.env.CLIENT_ID,
//     clientSecret: process.env.CLIENT_SECRET,
//     refreshToken: process.env.REFRESH_TOKEN,
//     accessToken: process.env.ACCESS_TOKEN
//   }
// });

// transporter.verify((error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Ready to Send");
//   }
// });

app.post("/", (req, res) => {
  const {name, email, message} = req.body;

  res.json({ message: `Thank you for your message, ${name}! We will get back to you shortly.` });

  // const mailOptions = {
  //   from: email, 
  //   to: process.env.EMAIL,
  //   subject: `New message from ${name}`,
  //   text: message
  // };

  // transporter.sendMail(mailOptions, (error, info) => {
  //   if (error) {
  //     console.log(error);
  //     res.status(500).json({ message: 'Error sending email! Please try again later' });
  //   } else {
  //     console.log(`Email sent: ${info.response}`);
  //     res.json({ message: `Thanks for your message, ${name}! We will get back to you shortly.` });
  //   }
  // });
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}!`)
});
