const con = require('../database/server');    

module.exports = {
    async ListUsers(request, response) {
        await con.query('SELECT * FROM Usuarios', (err,rows) => {
          if(err) throw err;
  
          return response.json(rows)
        });      
    },


    async AddUsers(request, response) {
        const { FirstName, LastName, Age, Senha } = request.body;
        await con.query('INSERT INTO Usuarios SET ?', request.body, (err, res) => {
          if(err) throw err;
        
          const id = res.insertId;
          return response.json({ id });
        });
      }
}