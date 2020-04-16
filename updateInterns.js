
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = "mongodb://localhost:27017/";
const dbName = 'ayodele_db';


const updateMovie = function(db, callback) {
  const collection = db.collection('myMovies');
  collection.updateOne({movie: "The Banker"},
    {$set: {movie: 'Brightburn', year: "2020", rating: 6.5 }}, function(err, result){
      assert.equal(err, null);
      //assert.equal(1, result.result.n);
      console.log(result);
      callback(result);
    });
}

const client = new MongoClient(url);
client.connect((err) => {
  assert.equal(err, null);
  console.log("Connected correctly to server");

  const db = client.db(dbName);

  updateMovie(db, () => {
    client.close();
  });
});
