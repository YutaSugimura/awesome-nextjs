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

  const body = req.body;
  const data = body.data;

  res.json(data);


  const db = client.db(dbName);
  const collection = db.collection('inventory');
  try {
    await collection.insert(data);
    res.statusCode = 200;
    res.json({ message: 'ok' });
  } catch {
    res.statusCode = 500;
    res.json({ message: 'Server Error' });
  }
}
export default api;
