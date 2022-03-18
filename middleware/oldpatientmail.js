const express = require("express");


const nodemailer = require("nodemailer");

const oldpatientmail =async (req, res, next) => {
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
   
      slot,
      
      message,
      
      department: selectedDept,
      doctor: selectedDoc,
      } = req.body;

      const  {patientid,fileid,name, age,  phone,email,gender} =req.patient
    var mailOptions = {
      from: "kumariujwalas@gmail.com",
      to: [`${email}`],
      subject: `${name} Booked Succefully`,
      html: `<div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
      <h2 style="text-align: center; text-transform: uppercase;color: teal;">Welcome to the Dr. Atefbassas HOSPITAL</h2>
      <div><div style="font-size: 14px margin">
      <div style="padding : 4px 0px 0px 0px"><h3> Name: </h3>${name}</div>
      <div style="padding : 4px 0px 0px 0px"><h3> File Number: </h3>${fileid}</div>
      <div style="padding : 4px 0px 0px 0px"><h3> Patient Id: </h3>${patientid}</div>
      <div style="padding : 4px 0px 0px 0px"><h3>Age: </h3>${age}</div>
      <div style="padding : 4px 0px 0px 0px"><h3 >Phone:</h3>${phone}</div>
      <div style="padding : 4px 0px 0px 0px"><h3>Email </h3>${email}</div>
      <div style="padding : 4px 0px 0px 0px"><h3>Booking Date</h3>${date}</div>
      <div style="padding : 4px 0px 0px 0px"><h3>Booking Slot</h3>${slot}</div>
      <div style="padding : 4px 0px 0px 0px"><h3>Service </h3>${doctorname}</div>
     
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
        
        
        next()
      }
    });}catch (err) {
      return res.status(500).json({msg: err.message})
  }
  };


module.exports = oldpatientmail;