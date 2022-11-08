const express = require('express');
const fs = require('fs');
const path = require('path');
const sql = require("mssql");

const routes = express.Router();

const config = {
  user: 'lenguajes',
  password: 'lg.2022zx',
  server: '163.178.173.148',
  database: 'ERP Collections',
  trustServerCertificate: true
};

const getCollaborators = async (req, res, next) => {
  sql.connect(config).then(pool => {

    return pool.request().query('SELECT TOP (1000) [idCollaborator],[name],[lastname],[dni],[email]FROM [ERP Collections].[dbo].[Collaborator]')

    }).then(result => {

        res.send(result);

        })
  };

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

