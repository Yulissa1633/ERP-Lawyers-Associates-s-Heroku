const express = require('express');
const fs = require('fs');
const path = require('path');
const MSSQL = require("./MSSQL");
const db = new MSSQL("163.178.173.148", "lenguajes", "lg.2022zx", "ERP Collections");

const routes = express.Router();

const config = {
  user: 'lenguajes',
  password: 'lg.2022zx',
  server: '163.178.173.148',
  database: 'ERP Collections',
  trustServerCertificate: true
};

const getCollaborators = async (req, res, next) => {
  try {
    const { recordset } = await db.execute("SELECT * FROM Collaborator");

    res.send(recordset);
  } catch (err) {
    console.error(err);
    res.send([]);
  }
  };

const getCollaborator = async (req, res, next) => {
  try {
    const sql = `SELECT * FROM Collaborator WHERE idCollaborator=${id}`;
    const { recordset } = await db.execute(sql);

    res.send(recordset);
  } catch (err) {
    console.error(err);
    res.send([]);
  }
  };

  const createCollaborators = async (req, res, next) => {
    try {
      const newStats = {
        idCollaborator: req.body.idCollaborator,
        name: req.body.name,
        lastname: req.body.lastname,
        dni: req.body.dni,
        email: req.body.email,
      };
      const sql = `INSERT INTO Collaborator VALUES ('${newStats.name}', '${newStats.lastname}', '${newStats.dni}','${newStats.email}')`;
      await db.execute(sql);

      res.send({ msg: "Insert successfully." });
    } catch (err) {
      console.error(err);
      res.send({ msg: "Insert failed." });
    }
  };

  const updateCollaborator = async (req, res, next) => {
    try {
  
      const newStatsData = {
        idCollaborator: req.body.idCollaborator,
        name: req.body.name,
        dni: req.body.dni,
        email: req.body.email,
      }
      const sql = `UPDATE Collaborator SET name='${newStatsData.name}', email='${newStatsData.email}' dni='${newStatsData.dni}' WHERE idCollaborator=${id}`;
      await db.execute(sql);

      res.send({ msg: "Updated." });
    } catch (err) {
      console.error(err);
      res.send({ msg: "Update failed." });
    }
  };

  const deleteCollaborator = async (req, res, next) => {
    const { id } = req.params;
    try {
      const sql = `DELETE FROM Collaborator WHERE idCollaborator=${id}`;
      await db.execute(sql);

      res.send({ msg: "Deleted." });
    } catch (err) {
      console.error(err);
      res.send({ msg: "Delete failed." });
    }
  };

  routes
    .get('/api/v1/collaborators/get', getCollaborators)
    .get('/api/v1/collaborators/getById/:id', getCollaborator)
    .post('/api/v1/collaborators/post', createCollaborators)
    .put('/api/v1/collaborators/put/:id', updateCollaborator)
    .delete('/api/v1/collaborators/delete/:id',deleteCollaborator);

module.exports = routes;

