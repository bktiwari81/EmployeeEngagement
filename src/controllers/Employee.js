'use strict';

var utils = require('../utils/writer.js');
var Employee = require('../service/EmployeeService');

module.exports.addEmployee = function addEmployee (req, res, next) {
  var empId = req.swagger.params['EmpId'].value;
  var empName = req.swagger.params['EmpName'].value;
  var empAccount = req.swagger.params['EmpAccount'].value;
  var email = req.swagger.params['Email'].value;
  var empAddress = req.swagger.params['EmpAddress'].value;
  var manager = req.swagger.params['Manager'].value;
  var managerEmail = req.swagger.params['ManagerEmail'].value;
  var contact = req.swagger.params['Contact'].value;
  var team = req.swagger.params['Team'].value;
  var organisation = req.swagger.params['Organisation'].value;
  Employee.addEmployee(empId,empName,empAccount,email,empAddress,manager,managerEmail,contact,team,organisation)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.employeeStatus = function employeeStatus (req, res, next) {
  Employee.employeeStatus()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateEmployee = function updateEmployee (req, res, next) {
  var empId = req.swagger.params['EmpId'].value;
  var empName = req.swagger.params['EmpName'].value;
  var empAddress = req.swagger.params['EmpAddress'].value;
  var empAccount = req.swagger.params['EmpAccount'].value;
  var email = req.swagger.params['Email'].value;
  var manager = req.swagger.params['Manager'].value;
  var contact = req.swagger.params['Contact'].value;
  var team = req.swagger.params['Team'].value;
  var organisation = req.swagger.params['Organisation'].value;
  Employee.updateEmployee(empId,empName,empAddress,empAccount,email,manager,contact,team,organisation)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
