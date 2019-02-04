const mongoose = require('mongoose');
const schema  = mongoose.Schema;

var resultSchema =  new schema(
   
  {
    hostName: {type : String, required:true},
    suiteId: String,
    OS: String,
    suiteStatus: String,
    testCases: [
      {
        testCaseStatus: String,
        testCaseStart: String,
        testCaseEnd: String,
        testCaseMessage:String,
        testCaseID: String
      }
    ],
    suiteStartTime:String,
    suiteEndTime: String,
    hostAddress: String,
    version: String
  }
);

  var result = mongoose.model('result',resultSchema);

  module.exports = result;