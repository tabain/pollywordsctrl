var expact = require("chai").expact;
var mongoose = require("mongoose");
var jobModel = require("../models/Job");

mongoose.connect('mongodb://localhost/pollywordsapi');

describe('get jobs', function(){
   it('Should never be empty since jobs are seeded', function(done){
       mongoose.connect('mongodb://localhost/pollywordsapi', function(){
           mongoose.model('Job').find({}).exec(function(error, jobList){
               expact(jobList.length).to.be.at.least(1);
               done();
              
           });
           
           
       });
        
   }); 
});