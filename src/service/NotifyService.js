'use strict';
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'rohitjaizz666@gmail.com',
      pass: 'Badmorning@123'
    }
});  

/**
 * Send notification to  user
 * This can only be done by the logged in user.
 *
 * empId Integer Employee id of  employee
 * wishes String Send Wish to employee (optional)
 * gift String Send gift to  employee (optional)
 * appreciationDescription String Appreciation description of employee (optional)
 * no response value expected for this operation
 **/
exports.notify = function(empId,wishes,gift,appreciationDescription) {
  return new Promise(function(resolve, reject) {
      var MongoClient = require('mongodb').MongoClient;
      var url = "mongodb+srv://EmployeeEngagement:Hackathon2020@cluster0.2txht.azure.mongodb.net/"
      MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("EmployeeEngagement");
        dbo.collection("EmployeeNew").find({"EmpId":`${empId}`}).toArray(function(err, result) {
          if (err) throw err;
          console.log(result);
          var mailOptions = {
            from: 'FRBEmployeeAppreciation@mphasis.com',
            to: `${result[0].ManagerEmail}, ${result[0].Email}`,
            subject: 'Congratulation !!! New Appreciation Recived',
            text: appreciationDescription
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              reject(error);
            } else {
              let response = {
                "payload": 'Email sent: ' + info.response
              }
              resolve(response);
            }
          });
          db.close();
        });
      });
  });
}

