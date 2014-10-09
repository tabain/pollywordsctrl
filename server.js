var express = require("express");
var mongoose = require("mongoose");
var jobModel = require("./models/Job")
var app = express();


app.set('views', __dirname);
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));
app.get('/api/jobs', function(req, res) {
    mongoose.model('Job').find({}).exec(function(error, collection){
        res.send(collection);
    })
    
})
app.get('*', function(req, res){
   res.render('index'); 
});

// mongoose.connect('mongodb://localhost/pollywordsapi');
mongoose.connect('mongodb://api:admin@ds043180.mongolab.com:43180/pollywordsapi'); 
var conn = mongoose.connection;
conn.once('open', function(){
    console.log('connect to mongodb successfully')
    jobModel.seedJobs();
});

app.listen(process.env.PORT, process.env.IP);