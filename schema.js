const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

var resultSchema =  new Schema(
   
  {
    hostName: {type : String, required:true},
    suiteId: {type:String},
    OS:  {type:String},
    suiteStatus:  {type:String},
    testCases: [
      {
        testCaseStatus:  {type:String},
        testCaseStart:  {type:String},
        testCaseEnd:  {type:String},
        testCaseMessage: {type:String},
        testCaseID:  {type:String}
      }
    ],
    suiteStartTime: {type:String},
    suiteEndTime:  {type:String},
    hostAddress:  {type:String},
    version:  {type:String}
  },{collection : 'test_report'}
);



  module.exports = mongoose.model('result',resultSchema);