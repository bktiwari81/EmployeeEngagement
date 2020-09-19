'use strict';


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
exports.addEmployee = function(empId,empName,empAccount,email,empAddress,manager,contact,team,organisation) {
  return new Promise(function(resolve, reject) {
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

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb+srv://EmployeeEngagement:Hackathon2020@cluster0.2txht.azure.mongodb.net/"
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("EmployeeEngagement");

//   var Appreciation = [
//     { EmpId: '2370004', Appreciation_Description: '', Wishes: '', Gift: '', ManagerComment:''},
//     { EmpId: '2361353', Appreciation_Description: '', Wishes: '', Gift: '', ManagerComment:''},
//   ];
// //   var Employees = [
// //     { EmpId: '2370004', EmpName: 'Ashish Mehta', EmpAddress: 'Delhi', EmpAccount: 'FRB', Email:'ashish.mehta@mphasis.com', Manager: 'Brijesh Tiwari', ManagerEmail:'brijesh.t@mphasis.com',Contact: '9028596846', Team: 'Digital Technology', Organization: 'Mphasis'},
// //     { EmpId: '2361353', EmpName: 'Rohit Jaiswal', EmpAddress: 'Delhi', EmpAccount: 'FRB', Email:'rohit.jaiswal@mphasis.com', Manager: 'Brijesh Tiwari', ManagerEmail:'brijesh.t@mphasis.com', Contact: '7073723149', Team: 'Digital Technology', Organization: 'Mphasis'},
// //   ];
//    dbo.collection("Appreciation").find({}).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//    });
//   dbo.collection("Appreciation").insertMany(Appreciation, function(err, res) {
//     if (err) throw err;
//     console.log("Number of documents inserted: " + res.insertedCount);
//     db.close();
//   });
// });



