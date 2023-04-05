const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();

const url = 'mongodb+srv://kalshettyshrikant:shrikant@cluster0.atojjzi.mongodb.net/?retryWrites=true&w=majority';
const dbName = 'binary-tree-db';
const collectionName = 'binary-tree';

async function breadthFirstSearch(startNodeValue) {
  const client = await MongoClient.connect(url);
  const db = client.db(dbName);
  const collection = db.collection(collectionName);

  const queue = [startNodeValue];
  const visited = new Set();

  while (queue.length > 0) {
    const curr = queue.shift();

    if (visited.has(curr)) {
      continue;
    }

    const node = await collection.findOne({ value: curr });

    console.log(node.value);

    visited.add(curr);

    if (node.left) {
      queue.push(node.left.value);
    }

    if (node.right) {
      queue.push(node.right.value);
    }
  }
console.log(queue)
  client.close();
}

app.get('/breadth-first-search/:startNode', (req, res) => {
  const startNode = req.params.startNode;

  breadthFirstSearch(startNode)
    .then(() => {
      res.send('Breadth-first search completed.');
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('internal server error')})});

      app.listen(3000, () => {
        console.log('Server started on port 3000');
        });
