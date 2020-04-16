
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = "mongodb://localhost:27017/";
const dbName = 'ayodele_db';


const findMovies = function(db, callback) {
  const collection = db.collection('myMovies');
  // a) For the first movie in the collection
  collection.find({}).limit(1).toArray( function(err, movies) {
    assert.equal(err, null);
    console.log("Found the first movie to be: ");
    console.log(movies);
    callback(movies);
  });
  // b) For all movies with rating of 7
  collection.find({rating: 7}).toArray( function(err, movies) {
    assert.equal(err, null);
    console.log("Found the following movies with rating of 7");
    console.log(movies);
    callback(movies);
  });
  // c) Showing only movie names, no year or rating
  collection.find({}).project({_id: 0, year: 0, rating: 0}).toArray( function(err, movies) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(movies);
    callback(movies);
  });
}

const client = new MongoClient(url);
client.connect((err) => {
  assert.equal(err, null);
  console.log("Connected correctly to server");

  const db = client.db(dbName);

  findMovies(db, () => {
    client.close();
  });
});
