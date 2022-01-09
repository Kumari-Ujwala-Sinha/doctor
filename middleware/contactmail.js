const express = require("express");


const nodemailer = require("nodemailer");

const contactmail =async (req, res, next) => {
  try{
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.PASS_KEY,
      },
    });
     
    const {
      name,
      subject,
      mailbody,
      email} = req.body;

    var mailOptions = {
      from: "kumariujwalas@gmail.com",
      to: [`alialsabr@gmail.com`],
      subject: `${name} want to cotact`,
      html: `<div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
      <h2 style="text-align: center; text-transform: uppercase;color: teal;">contact</h2>
      <div><div style="font-size: 14px margin">
      <div style="padding : 4px 0px 0px 0px"><h3> Name: </h3>${name}</div>
     
      <div style="padding : 4px 0px 0px 0px"><h3>Email </h3>${email}</div>
      <div style="padding : 4px 0px 0px 0px"><h3>Subject</h3>${subject}</div>
     
      <div style="padding : 4px 0px 0px 0px"><h3>Mailbody</h3>${mailbody}</div>
      
      </div>
      </div>
      </div>
      `,
    };

    transporter.sendMail(mailOptions, function (err, data) {
      if (err) {
        return res.status(400).json({Error: err})
       
      } else {
        console.log(data);
        return res.status(200).json({msg:"mail sent successfully"})
    
      }
    });}catch (err) {
      return res.status(500).json({msg: err.message})
  }
  };


module.exports = contactmail;