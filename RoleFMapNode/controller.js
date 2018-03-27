'use strict';

var mongoose = require('mongoose');
  
var FeatureList = mongoose.model('FeatureList');
var UserDetails = mongoose.model('UserDetails');
var FeatureRoleMap = mongoose.model('FeatureRoleMapping');

exports.get_feature_list = function(req, res) {
  
  var url = require("url");
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;

  UserDetails.findOne({ UserID: query.userId}, function(err, roles) {
    if (err)
      res.send(err);
    
    FeatureRoleMap.find({}, function(err, list) {
      if (err)
        res.send(err);

      var arr = [];

      for (var i = 0; i < list.length; i++) {
        if(list[i][roles.Role[0]] == "yes"){
          arr.push(list[i].FeatureName);
        }
      }

      res.json('{"Features": ' + JSON.stringify(arr) + '}');
    });
  });
};
