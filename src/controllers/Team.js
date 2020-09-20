'use strict';

var utils = require('../utils/writer.js');
var Team = require('../service/TeamService');

module.exports.teamFlagging = function teamFlagging (req, res, next) {
  Team.teamFlagging()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
