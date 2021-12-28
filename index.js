const express = require('express')
const ObjectId = require('mongodb').ObjectId;
const { MongoClient } = require("mongodb");
const app = express()
const port =process.env.PORT||5000
const cors = require('cors');

app.use(cors());
app.use(express.json());
const uri =
  "mongodb+srv://aliceng:CPYGPkH0idj7KPLX@cluster0.aq2lr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
console.log(uri)
async function run() {
  try {
    await client.connect();
    const database = client.db('store');
    const bikesCollection = database.collection('bikes');
    const usersCollection = database.collection('users');
    const reviewsCollection = database.collection('reviews');
    const customersCollection = database.collection('customers')
    const ordersCollection = database.collection('orders')


    console.log("database connected")
  
  } finally {
    
    // await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Hello assainment World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})