const express = require('express');
const server = express();

// Complete your server here!
// Do NOT `server.listen()` inside this file!

//Routers 
const actionRouter = require('./actions/actions-router');
const projectRouter = require('./projects/projects-router');

//Use
server.use(express.json());
server.use('/api/actions', actionRouter);
server.use('/api/projects', projectRouter);


//testing out my endpoint & server//
server.get('/', (req, res) => {
    res.send(`
      <h2>Sprint Challenge</h2>
      <p>Build a Web API!</p>
    `);
  });

module.exports = server;
