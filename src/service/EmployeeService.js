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
     var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://EmployeeEngagement:Hackathon2020@cluster0.2txht.azure.mongodb.net/"
 MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("EmployeeEngagement");
      var DailyStatus = [
        { 
           "Do you know what is expected today": "true",
          "Do you have skills to do your job": "false",
          "Did you get help when needed": "true",
          "Did you learn something": "true",
          "Did you feel appreciated": "true",
          "employeeID": "2335088"
        }
      ];
      //  dbo.collection("DailyStatus").find({}).toArray(function(err, result) {
      //     if (err) throw err;
      //     console.log(result);
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
    resolve();
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
