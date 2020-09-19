var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://EmployeeEngagement:Hackathon2020@cluster0.2txht.azure.mongodb.net/"
MongoClient.connect(url, function(err, db) {
if (err) throw err;
var dbo = db.db("EmployeeEngagement");
let teams = {'Digital Technology': 100, 'Deposits': 100, 'Lending': 100, 'Digital PWM': 100, 'RCT': 100}
Object.keys(teams).forEach(team => {
    dbo.collection("EmployeeNew").find({"Team":team}).toArray(function(err, result) {
        if (err) throw err;
        let countter = 0
        result.forEach(record => {
            countter += countter + record.AppriciationCounter
        })
        console.log("Team processes is", team, parseInt((countter/teams[team])*100));
        if(countter >= 50){
            console.log('Green')
        } else if(countter >= 30 && countter < 50){
            console.log('Yellow')
        } else {
            console.log('Red')
        }
        db.close();
    });
})
});