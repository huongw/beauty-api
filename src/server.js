const dotenv = require("dotenv");
dotenv.config();

const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 5000;
const express = require("express");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.post("/email", (req, res) => {
  const {name, email, message} = req.body;

  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    host: process.env.EMAIL_HOST,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PWD
    }
  });

  const mailOptions = {
    from: email, 
    to: process.env.EMAIL,
    subject: `New message from ${name}`,
    text: message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.json({ message: "Cannot send email right now. Please try again later!" });
    } else {
      console.log(`Email sent: ${info.response}`);
      res.json({ message: `Thank you for your message, ${name}! We will get back to you shortly.` });
    }
  });
});


app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}!`)
});
