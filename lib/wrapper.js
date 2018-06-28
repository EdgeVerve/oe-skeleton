const loopback = require('loopback');
const log = require('oe-logger')('oe-skeleton');
module.exports = function (app) {
  var model = loopback.findModel('ModelDefinition');
  log.info('oe-skeleton is loaded : ', model.modelName);
};
