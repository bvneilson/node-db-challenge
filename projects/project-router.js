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

module.exports = router;
