const express = require("express");


const nodemailer = require("nodemailer");

const usermail =async (req, res, next) => {
  try{
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.PASS_KEY,
      },
    });
     
    const {date,
      doctorname,
      departmentname,
      gender,
      slot,
      name,
      age,
      message,
      phone,
      department: selectedDept,
      doctor: selectedDoc,
      email} = req.body;

    var mailOptions = {
      from: "kumariujwalas@gmail.com",
      to: [`${email} alialsabr@gmail.com`],
      subject: `${name} Booked Succefully`,
      html: `<div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
      <h2 style="text-align: center; text-transform: uppercase;color: teal;">Welcome to the AL-OSRAH INTERNATIONAL HOSPITAL</h2>
      <div><div style="font-size: 14px margin">
      <div style="padding : 4px 0px 0px 0px"><h3> Name: </h3>${name}</div>
      <div style="padding : 4px 0px 0px 0px"><h3>Age: </h3>${age}</div>
      <div style="padding : 4px 0px 0px 0px"><h3 >Phone:</h3>${phone}</div>
      <div style="padding : 4px 0px 0px 0px"><h3>Email </h3>${email}</div>
      <div style="padding : 4px 0px 0px 0px"><h3>Booking Date</h3>${date}</div>
      <div style="padding : 4px 0px 0px 0px"><h3>Booking Slot</h3>${slot}</div>
      <div style="padding : 4px 0px 0px 0px"><h3>Doctor </h3>${doctorname}</div>
      <div style="padding : 4px 0px 0px 0px"><h3>Department </h3>${departmentname}</div>
      <div style="padding : 4px 0px 0px 0px"><h3>Message</h3>${message}</div>
      
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
        
        next()
      }
    });}catch (err) {
      return res.status(500).json({msg: err.message})
  }
  };


module.exports = usermail;