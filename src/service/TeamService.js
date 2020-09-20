'use strict';
/**
 * Set Flagging for Team Level appriciation
 * Set Flagging for Team  Appriaciation 
 *
 * no response value expected for this operation
 **/
exports.teamFlagging = function() {
  return new Promise(function(resolve, reject) {
	var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://EmployeeEngagement:Hackathon2020@cluster0.2txht.azure.mongodb.net/"
MongoClient.connect(url, function(err, db) {
if (err) throw err;
var dbo = db.db("EmployeeEngagement");
let teams = {'Digital Technology': 100, 'Deposits': 100, 'Lending': 100, 'Digital PWM': 100, 'RCT': 100}
let responseJson=[];
let counter=0;
Object.keys(teams).forEach(team => {
     dbo.collection("EmployeeNew").find({"Team":team}).toArray ( 
        function(err, result) {
        if (err) throw err;
        let countter = 0
        counter++
        result.forEach(record => {
            countter += countter + record.AppriciationCounter
        })
        let percentile= parseInt((countter/teams[team])*100)
        if(countter >= 50){
            responseJson.push({
              text: team,
              color: 'green',
              Percentile: percentile
            })
        }
         else if(countter >= 30 && countter < 50){
            responseJson.push({
              text: team,
              color: 'yellow',
              Percentile: percentile
            })
        } else {
            responseJson.push({
              text: team,
              color: 'red',
              Percentile: percentile
            })
        }
        if(counter==Object.keys(teams).length){
          resolve(responseJson)
        }
        db.close();
    });
})
});
});
}


