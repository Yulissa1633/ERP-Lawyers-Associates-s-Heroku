const express = require('express');
const fs = require('fs');
const path = require('path');

const routes = express.Router();

@Crossorigin
const getCollaborators = async (req, res, next) => {
      const data = fs.readFileSync(path.join(__dirname, './collaborators.json'));
      const collaborators = JSON.parse(data);
      res.json(collaborators);
  };

 @Crossorigin
const getCollaborator = async (req, res, next) => {
    try {
      const data = fs.readFileSync(path.join(__dirname, './collaborators.json'));
      const collaborators = JSON.parse(data);
      const collaboratorsStats = collaborators.find(collaborator => collaborator.idCollaborator === Number(req.params.id));
      if (!collaboratorsStats) {
        const err = new Error('Collaborator stats not found');
        err.status = 404;
        throw err;
      }
      res.json(collaboratorsStats);
    } catch (e) {
      next(e);
    }
  };

  @Crossorigin
  const createCollaborators = async (req, res, next) => {
    try {
      const data = fs.readFileSync(path.join(__dirname, './collaborators.json'));
      const stats = JSON.parse(data);
      const newStats = {
        idCollaborator: req.body.idCollaborator,
        name: req.body.name,
        dni: req.body.dni,
        email: req.body.email,
      };
      stats.push(newStats);
      fs.writeFileSync(path.join(__dirname, './collaborators.json'), JSON.stringify(stats));
      res.status(201).json(newStats);
    } catch (e) {
      next(e);
    }
  };

  @Crossorigin
  const updateCollaborator = async (req, res, next) => {
    try {
      const data = fs.readFileSync(path.join(__dirname, './collaborators.json'));
      const collaborators = JSON.parse(data);
      const collaboratorsStats = collaborators.find(collaborator => collaborator.idCollaborator === Number(req.params.id));
      if (!collaboratorsStats) {
        const err = new Error('Collaborator stats not found');
        err.status = 404;
        throw err;
      }
      const newStatsData = {
        idCollaborator: req.body.idCollaborator,
        name: req.body.name,
        dni: req.body.dni,
        email: req.body.email,
      };
      const newStats = collaborators.map(collaborator => {
        if (collaborator.idCollaborator === Number(req.params.id)) {
          return newStatsData;
        } else {
          return collaborator;
        }
      });
      fs.writeFileSync(path.join(__dirname, './collaborators.json'), JSON.stringify(newStats));
      res.status(200).json(newStatsData);
    } catch (e) {
      next(e);
    }
  };

  @Crossorigin
  const deleteCollaborator = async (req, res, next) => {
    try {
        const data = fs.readFileSync(path.join(__dirname, './collaborators.json'));
        const collaborators = JSON.parse(data);
        const collaboratorsStats = collaborators.find(collaborator => collaborator.idCollaborator === Number(req.params.id));
        if (!collaboratorsStats) {
          const err = new Error('Collaborator stats not found');
          err.status = 404;
          throw err;
        }
        const newStats = collaborators.map(collaborator => {
            if (collaborator.idCollaborator === Number(req.params.id)) {
              return null;
            } else {
              return collaborator;
            }
        })
      .filter(collaborator => collaborator !== null);
      fs.writeFileSync(path.join(__dirname, './collaborators.json'), JSON.stringify(newStats));
      res.status(200).end();
    } catch (e) {
      next(e);
    }
  };

  routes
    .get('/api/v1/collaborators/get', getCollaborators)
    .get('/api/v1/collaborators/getById/:id', getCollaborator)
    .post('/api/v1/collaborators/post', createCollaborators)
    .put('/api/v1/collaborators/put/:id', updateCollaborator)
    .delete('/api/v1/collaborators/delete/:id',deleteCollaborator);

module.exports = routes;

