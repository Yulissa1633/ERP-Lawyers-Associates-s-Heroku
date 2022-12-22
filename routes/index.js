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
  const { id } = req.params;
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
      const sql = `UPDATE Collaborator SET name='${newStatsData.name}', email='${newStatsData.email}' dni='${newStatsData.dni}' WHERE idCollaborator=${newStatsData.idCollaborator}`;
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

  const getClients = async (req, res, next) => {
    try {
      const { recordset } = await db.execute("SELECT * FROM Client");
  
      res.send(recordset);
    } catch (err) {
      console.error(err);
      res.send([]);
    }
    };
  
  const getClient = async (req, res, next) => {
    const { id } = req.params;
    try {
      const sql = `SELECT * FROM Client WHERE idClient=${id}`;
      const { recordset } = await db.execute(sql);
  
      res.send(recordset);
    } catch (err) {
      console.error(err);
      res.send([]);
    }
    };
  
    const createClients = async (req, res, next) => {
      try {
        const newStats = {
          idClient: req.body.idClient,
          name: req.body.name,
          lastname: req.body.lastname,
          phonenumber: req.body.phonenumber,
          idNumber: req.body.idNumber,
          type: req.body.type,
          idUser: req.body.idUser
        };
        const sql = `INSERT INTO Client VALUES ('${newStats.name}', '${newStats.lastname}', '${newStats.phonenumber}','${newStats.idNumber}','${newStats.type}','${newStats.idUser}')`;
        await db.execute(sql);
  
        res.send({ msg: "Insert successfully." });
      } catch (err) {
        console.error(err);
        res.send({ msg: "Insert failed." });
      }
    };
  
    const updateClient = async (req, res, next) => {
      try {
    
        const newStatsData = {
          idClient: req.body.idClient,
          name: req.body.name,
          lastname: req.body.lastname,
          phonenumber: req.body.phonenumber,
          idNumber: req.body.idNumber,
          type: req.body.type,
          idUser: req.body.idUser
        }
        const sql = `UPDATE Client SET name='${newStatsData.name}', lastname='${newStatsData.lastname}' phonenumber='${newStatsData.phonenumber}' idNumber='${newStatsData.idNumber}' type='${newStatsData.type}' idUser='${newStatsData.idUser}'WHERE idClient=${newStatsData.idClient}`;
        await db.execute(sql);
  
        res.send({ msg: "Updated." });
      } catch (err) {
        console.error(err);
        res.send({ msg: "Update failed." });
      }
    };
  
    const deleteClient = async (req, res, next) => {
      const { id } = req.params;
      try {
        const sql = `DELETE FROM Client WHERE idClient=${id}`;
        await db.execute(sql);
  
        res.send({ msg: "Deleted." });
      } catch (err) {
        console.error(err);
        res.send({ msg: "Delete failed." });
      }
    };

    const getUsers = async (req, res, next) => {
      try {
        const { recordset } = await db.execute("SELECT * FROM [User]");
    
        res.send(recordset);
      } catch (err) {
        console.error(err);
        res.send([]);
      }
      };
    
    const getUser = async (req, res, next) => {
      const { id } = req.params;
      try {
        const sql = `SELECT * FROM [User] WHERE idUser=${id}`;
        const { recordset } = await db.execute(sql);
    
        res.send(recordset);
      } catch (err) {
        console.error(err);
        res.send([]);
      }
      };
    
      const createUsers = async (req, res, next) => {
        try {
          const newStats = {
            idUser: req.body.idUser,
            email: req.body.email,
            password: req.body.password,
            rolId: req.body.rolId
          };
          const sql = `INSERT INTO [User] VALUES ('${newStats.email}', '${newStats.password}', '${newStats.rolId}')`;
          await db.execute(sql);
    
          res.send({ msg: "Insert successfully." });
        } catch (err) {
          console.error(err);
          res.send({ msg: "Insert failed." });
        }
      };
    
      const updateUser = async (req, res, next) => {
        try {
      
          const newStatsData = {
            idUser: req.body.idUser,
            email: req.body.email,
            password: req.body.password,
            rolId: req.body.rolId
          }
          const sql = `UPDATE [User] SET email='${newStatsData.email}', password='${newStatsData.password}' rolId='${newStatsData.rolId}' WHERE idCollaborator=${newStatsData.idUser}`;
          await db.execute(sql);
    
          res.send({ msg: "Updated." });
        } catch (err) {
          console.error(err);
          res.send({ msg: "Update failed." });
        }
      };
    
      const deleteUser = async (req, res, next) => {
        const { id } = req.params;
        try {
          const sql = `DELETE FROM [User] WHERE idUser=${id}`;
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
    .delete('/api/v1/collaborators/delete/:id',deleteCollaborator)
    .get('/api/v1/clients/get', getClients)
    .get('/api/v1/clients/getById/:id', getClient)
    .post('/api/v1/clients/post', createClients)
    .put('/api/v1/clients/put/:id', updateClient)
    .delete('/api/v1/clients/delete/:id',deleteClient)
    .get('/api/v1/users/get', getUsers)
    .get('/api/v1/users/getById/:id', getUser)
    .post('/api/v1/users/post', createUsers)
    .put('/api/v1/users/put/:id', updateUser)
    .delete('/api/v1/users/delete/:id',deleteUser);

module.exports = routes;

