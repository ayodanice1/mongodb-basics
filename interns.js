const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
const creator = "ayodele";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbopen = db.db("ayodele_db");
    dbopen.createCollection("interns", function(err, res) {
        if (err) throw err;
        console.log("Interns collection created");
        db.close();
    });
});
