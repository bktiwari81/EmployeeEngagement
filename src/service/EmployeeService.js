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

