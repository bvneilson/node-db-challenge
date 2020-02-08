const knex = require('knex');
const config = require('../knexfile.js')
const db = knex(config.development);

function addResource(resource) {
  return db('resources').insert(resource);
}
function getResources() {
  return db('resources');
}

module.exports = {
  addResource,
  getResources
}
