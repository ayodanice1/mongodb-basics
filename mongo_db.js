
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/ayodele_db";
var creator = "ayodele";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log('Database created by ' + creator);
  db.close();
});
