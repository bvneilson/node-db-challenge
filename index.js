const express = require('express');
const projectRoutes = require('./projects/project-router.js');

const server = express();
const port = 5008;

server.use(express.json());
server.use('/api', projectRoutes);

server.listen(port, () => console.log(`Server listening on port ${port}`));
