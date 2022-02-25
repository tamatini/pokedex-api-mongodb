/* Charge le fichier de configuration */
const dotenv = require('dotenv');
dotenv.config();

/* Environnement de développement */
const dev = {
  name: 'Development',
  db: process.env.DEV_DB
};

/* Environnement de test */
const test = {
  name: 'Test'
};

/* Import de l'environnement lancer par le script de démarrage */
const env = process.env.NODE_ENV;

/* Export de la configuration */
const config = { dev, test };
module.exports = config[env];