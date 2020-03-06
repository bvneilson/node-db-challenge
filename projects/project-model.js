const knex = require('knex');
const config = require('../knexfile.js')
const db = knex(config.development);

function addResource(resource) {
  return db('resources').insert(resource);
}
function getResources() {
  return db('resources');
}

function addProject(project) {
  return db('projects').insert(project);
}
function getProjects() {
  return db('projects');
}
function getProjectById(projectId) {
  return db.select(
    'projects.*',
    'tasks.*'
  )
  .where("projects.id", projectId)
  .from('projects')
  .innerJoin('tasks', 'projects.id', 'tasks.project_id');
}

function addTask(task) {
  return db('tasks').insert(task);
}
function getTasks() {
  return db('tasks').join('projects', 'tasks.project_id', '=', 'projects.id').select('tasks.*', 'projects.name as project_name', 'projects.description as project_description');
}

module.exports = {
  addResource,
  getResources,
  addProject,
  getProjects,
  addTask,
  getTasks,
  getProjectById
}
