
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = "mongodb://localhost:27017/";
const dbName = 'ayodele_db';

const myMovies = [
    {
        movie: "The Banker",
        year: "2020",
        rating: 8
    },
    {
        movie: "Bad Boys",
        year: "2020",
        rating: 7
    },
    {
        movie: "Bloodspot",
        year: "2020",
        rating: 7.5
    },
    {
        movie: "First Cow",
        year: "2020",
        rating: 6.5
    }
]

const insertMovies = function(db, callback) {
  const collection = db.collection('myMovies');
  collection.insertMany(myMovies, function(err, result){
      assert.equal(err, null);
      assert.equal(4, result.result.n);
      assert.equal(4, result.ops.length);
      console.log("Inserted 4 movies into the collection");
      console.log(result);
      callback(result);
  });
}

const client = new MongoClient(url, {useNewParser: true});

client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  insertMovies(db, (documents) => {
    client.close();
  });
});
