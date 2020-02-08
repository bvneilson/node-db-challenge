const express = require('express');

const Projects = require('./project-model.js');

const router = express.Router();

router.post('/resources', (req, res) => {
  Projects.addResource(req.body).then(response => {
    res.status(200).json(response);
  }).catch(err => {
    res.status(400).json("Name is required");
  })
})

router.get('/resources', (req, res) => {
  Projects.getResources().then(response => {
    res.status(200).json(response);
  }).catch(err => {
    res.status(404).json({message: err});
  })
})

router.post('/projects', (req, res) => {
  Projects.addProject(req.body).then(response => {
    res.status(200).json(response);
  }).catch(err => {
    res.status(400).json("Name is required");
  })
})

router.get('/projects', (req, res) => {
  Projects.getProjects().then(response => {
    res.status(200).json(response);
  }).catch(err => {
    res.status(404).json({message: err});
  })
})

router.post('/tasks', (req, res) => {
  Projects.addTask(req.body).then(response => {
    res.status(200).json(response);
  }).catch(err => {
    res.status(400).json("Description and product id are required");
  })
})

router.get('/tasks', (req, res) => {
  Projects.getTasks().then(response => {
    res.status(200).json(response);
  }).catch(err => {
    res.status(404).json({message: err});
  })
})

module.exports = router;
