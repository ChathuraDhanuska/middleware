'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserDetails = new Schema({
  UserID: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  Role: {
    type: [{
      type: String,
      enum: ['ChiefManager', 'BranchManager', 'Member']
    }],
    default: ['Member']
  }
});

var FeatureList = new Schema({
  FeatureID: {
    type: Number,
    required: 'Kindly enter the feature id'
  },
  FeatureName: {
    type: String,
    required: 'Kindly enter feature name corresponding to feature id'
  }
});

var FeatureRoleMapping = new Schema({
  FeatureName: {
    type: String,
    required: 'Kindly enter feature name'
  },
  ChiefManager: {
    type: [{
      type: String,
      enum: ['yes', 'no']
    }],
    default: 'no'
  },
  BranchManager: {
    type: [{
      type: String,
      enum: ['yes', 'no']
    }],
    default: 'no'
  },
  Member: {
    type: [{
      type: String,
      enum: ['yes', 'no']
    }],
    default: 'no'
  }
});

var UserDetailsSchema = mongoose.model('UserDetails', UserDetails, 'UserDetails');
var FeatureListSchema = mongoose.model('FeatureList', FeatureList, 'FeatureList');
var FeatureRoleMapSchema = mongoose.model('FeatureRoleMapping', FeatureRoleMapping, 'FeatureRoleMapping');

module.exports = {
  UserDetails: UserDetailsSchema,
  FeatureList: FeatureListSchema,
  FeatureRoleMapping: FeatureRoleMapSchema
};