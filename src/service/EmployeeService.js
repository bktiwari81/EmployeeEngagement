'use strict';
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://EmployeeEngagement:Hackathon2020@cluster0.2txht.azure.mongodb.net/"

/**
 * Add a new employee detail
 * 
 *
 * empId Integer Employee id of  employee
 * empName Integer Employee Name  of  employee
 * empAccount String Employee account  of  employee
 * email String Employee email  of  employee
 * empAddress String Employee address  of  employee (optional)
 * manager String Employee manager  of  employee (optional)
 * contact Integer Employee contact  of  employee (optional)
 * team String Employee team  of  employee (optional)
 * organisation String Employee organisation  of  employee (optional)
 * no response value expected for this operation
 **/
exports.addEmployee = function(empId,empName,empAccount,email,empAddress,manager,managerEmail,contact,team,organisation) {
  return new Promise(function(resolve, reject) {
    
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("EmployeeEngagement");
      var Employee = [
        { EmpId: `${empId}`, EmpName: `${empName}`, EmpAddress: `${empAddress}`, EmpAccount: `${empAccount}`, Email:`${email}`, Manager: `${manager}`, ManagerEmail:`${managerEmail}`,Contact: `${contact}`, Team: `${team}`, Organization: `${organisation}`}
      ];

      dbo.collection("EmployeeNew").insertMany(Employee, function(err, res) {
        if (err) throw reject(err);
        else {
          let response = {
            "payload": "Number of documents inserted: " + res.insertedCount
          }
          resolve(response);
        }
        db.close();
      });
    });
    resolve();
  });
}

/**
 * Employee daily status record
 * Set Flagging for Team  Appriaciation 
 *
 * no response value expected for this operation
 **/
exports.employeeStatus = function(empId,employeeStatusCheck) {
  return new Promise(function(resolve, reject) {
    let statusCheck = JSON.parse(employeeStatusCheck)
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb+srv://EmployeeEngagement:Hackathon2020@cluster0.2txht.azure.mongodb.net/"
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("EmployeeEngagement");
      var DailyStatus = [
        { 
          "Do you know what is expected today": statusCheck["Do you know what is expected today"],
          "Do you have skills to do your job": statusCheck["Do you have skills to do your job"],
          "Did you get help when needed": statusCheck["Did you get help when needed"],
          "Did you learn something": statusCheck["Did you learn something"],
          "Did you feel appreciated": statusCheck["Did you feel appreciated"],
          "empId": empId,
          "dateTime": new Date()
        }
      ];
      dbo.collection("DailyStatus").insertMany(DailyStatus, function(err, res) {
        if (err) throw reject(err);
        else {
           let response = {
            "payload": "Number of documents inserted: " + res.insertedCount
          }
          resolve(response);
        }
          db.close();
      });
    });
  });
}


/**
 * Update an Employee
 * 
 *
 * empId Integer Employee id of  employee
 * empName Integer Employee Name  of  employee (optional)
 * empAddress String Employee address  of  employee (optional)
 * empAccount String Employee account  of  employee (optional)
 * email String Employee email  of  employee (optional)
 * manager String Employee manager  of  employee (optional)
 * contact Integer Employee contact  of  employee (optional)
 * team String Employee team  of  employee (optional)
 * organisation String Employee organisation  of  employee (optional)
 * no response value expected for this operation
 **/
exports.updateEmployee = function(empId,empName,empAddress,empAccount,email,manager,contact,team,organisation) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}
