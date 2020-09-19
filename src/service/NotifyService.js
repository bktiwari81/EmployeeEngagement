'use strict';


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
    resolve();
  });
}

