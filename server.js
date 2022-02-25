const app = require('./app');
const server = require('./src/db/index');
const { name, db } = require('./config');
const PORT = 4000;

const listen = app.listen(PORT, () => {
  const message = `L'application à démarrer sur le port: ${PORT}`;
  console.log(message);
});

const main = async () => {
  try {
    await server.connect(db, name);
    return listen;
  } catch (err) {
    if (err) return console.log(err);
  }
};

if (require.main === module) {
  return main();
};