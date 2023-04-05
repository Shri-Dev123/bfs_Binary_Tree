// const { MongoClient } = require('mongodb');
// const client =  MongoClient.connect('mongodb+srv://kalshettyshrikant:shrikant@cluster0.atojjzi.mongodb.net/?retryWrites=true&w=majority');
// const db = client.db("binary-tree-db");
// const collection = db.collection("binary-tree");

// const nodes = [
//   {
//     value: 'A',
//     left: {
//       value: 'B',
//       left: {
//         value: 'D',
//       },
//       right: {
//         value: 'E',
//       },
//     },
//     right: {
//       value: 'C',
//       left: {
//         value: 'F',
//       },
//     },
//   },
//   {
//     value: 'B',
//     left: {
//       value: 'D',
//     },
//     right: {
//       value: 'E',
//     },
//   },
//   {
//     value: 'C',
//     left: {
//       value: 'F',
//     },
//   },
//   {
//     value: 'D',
//   },
//   {
//     value: 'E',
//   },
//   {
//     value: 'F',
//   },
// ];

// collection.insertMany(nodes);

// client.close();

const { MongoClient } = require('mongodb');

async function connectToDatabase() {
  const uri = 'mongodb+srv://kalshettyshrikant:shrikant@cluster0.atojjzi.mongodb.net/?retryWrites=true&w=majority';
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();
  const database = client.db('binary-tree-db');
  return database;
}

async function insertData() {
  const database = await connectToDatabase();
  const collection = database.collection('binary-tree');

  // Insert data into collection
  const nodes = [
    {
      value: 'A',
      left: {
        value: 'B',
        left: {
          value: 'D',
        },
        right: {
          value: 'E',
        },
      },
      right: {
        value: 'C',
        left: {
          value: 'F',
        },
      },
    },
    {
      value: 'B',
      left: {
        value: 'D',
      },
      right: {
        value: 'E',
      },
    },
    {
      value: 'C',
      left: {
        value: 'F',
      },
    },
    {
      value: 'D',
    },
    {
      value: 'E',
    },
    {
      value: 'F',
    },
  ];
  await collection.insertMany(nodes);
}

insertData();
