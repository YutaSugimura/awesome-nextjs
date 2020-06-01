import { MongoClient } from 'mongodb';

const url = 'mongodb://root:example@localhost:27017';
const dbName = 'examples';

const connectOptions = {
  useUnifiedTopology: true
}

const client = new MongoClient(url, connectOptions);

const api = async(req, res) => {
  if(!client.isConnected()) {
    await client.connect();
  }

  const db = client.db(dbName);
  const collection = db.collection('inventory');
   await collection.find({}).toArray((err, docs) => {
    if(err) {
      res.statusCode = 500;
      res.json({err});
      return;
    }
    res.statusCode = 200;
    res.json({ docs });
  });
}
export default api;
