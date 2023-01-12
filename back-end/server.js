const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors")
const app = express()
require("dotenv").config()

// middleware
app.use(express.json());
app.use(cors());

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL,
      pass: process.env.PWD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    },
   });
   

   transporter.verify((err, success) => {
    err
      ? console.log(err)
      : console.log(`=== Server is ready to take messages: ${success} ===`);
   });

   app.get("/", (req, res) => {
    res.send("Stuff is happening")
   })

   app.post("/send", (req, res) => {
    let mailOptions = {
      from: `${req.body.formInput.email}`,
      to: process.env.EMAIL,
      subject: `${req.body.formInput.subject} From ${req.body.formInput.email}`,
      text: `${req.body.formInput.name}: ${req.body.formInput.message}`,
    };
   
    transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
        res.json({
          status : "failed"
        })

      } else {
        console.log("Email sent successfully");
        res.json({ status: "sent" });
      }
    });
   });
   
   app.listen(8393, () => {
    console.log("Server is running")
})
   