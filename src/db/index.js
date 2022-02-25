const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const env = process.env.NODE_ENV;

const connectInMemory = async () => {
  try {
    const mobDB = await MongoMemoryServer.create();
    const uri = mobDB.getUri();
    await mongoose.connect(uri);
  } catch (err) {
    if (err) return console.log(err);
  }
};

const connect = async (db, name) => {
  try {
    if (env !== 'test') {
      await mongoose.connect(db);
      console.log(`Connecté à la base de donnée ${name}`);
    } else {
      await connectInMemory();
    }
  } catch (err) {
    if (err) return console.log(err);
  }
};

const close = async () => {
  try {
    await mongoose.disconnect();
  } catch (err) {
    if (err) return console.log(err);
  }
};

clearDatabase = async () => {
  try {
    const collections = mongoose.connection.collections;
    for (const key in collections) {
      const collection = collections[key];
      collection.deleteMany(null, null, (err) => {
        if (err) return console.log(err);
      });
    }
  } catch (err) {
    if (err) return console.log(err);
  }
};

module.exports = {
  connect,
  connectInMemory,
  close,
  clearDatabase
};