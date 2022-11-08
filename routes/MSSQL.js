class MSSQL {
    #mssql;
    #config;
    #pool;
    constructor(server, user, password, database) {
      this.#mssql = require("mssql");
      this.#config = {
        user,
        password,
        server,
        database,
        options: {
          encrypt: false,
          trustServerCertificate: false,
        },
      };
    }
  
    disconnect() {
      this.#pool.close();
    }
  
    execute(sql) {
      return new Promise(async (resolve, reject) => {
        try {
          this.#pool = await this.#mssql.connect(this.#config);
          const query = await this.#pool.request().query(sql);
          resolve(query);
        } catch (err) {
          console.log(err);
          reject(err);
        }
      });
    }
  }
  
  module.exports = MSSQL;