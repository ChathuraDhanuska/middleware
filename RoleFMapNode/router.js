'use strict';

module.exports = function(app) {
  var controller = require('./controller');

  app.route('/getfeaturelist')
    .get(controller.get_feature_list);
};
