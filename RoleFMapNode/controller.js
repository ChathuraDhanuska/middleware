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

        if (roles.Role[0] == "BranchManager"){
          if(list[i].BranchManager == "yes") {
            arr.push(list[i].FeatureName);
          }
        } 
        else if (roles.Role[0] == "ChiefManager"){
          if(list[i].ChiefManager == "yes") {
            arr.push(list[i].FeatureName);
          }
        } 
        else if (roles.Role[0] == "Member"){
          if(list[i].Member == "yes") {
            arr.push(list[i].FeatureName);
          }
        }
      }

      res.json('{"Features": ' + JSON.stringify(arr) + '}');
    });
  });
};
