'use strict';

var utils = require('../utils/writer.js');
var Notify = require('../service/NotifyService');

module.exports.notify = function notify (req, res, next) {
  var empId = req.swagger.params['EmpId'].value;
  var wishes = req.swagger.params['Wishes'].value;
  var gift = req.swagger.params['Gift'].value;
  var appreciationDescription = req.swagger.params['AppreciationDescription'].value;
  Notify.notify(empId,wishes,gift,appreciationDescription)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
