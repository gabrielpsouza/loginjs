const mysql = require('mysql');

const con = mysql.createConnection({
  host: '127.0.0.1',
  user: "root",
  password: "password",
  database: 'loginjs'
});

con.connect((err) => {
    if(err){
      console.log('Error connecting to Db', err);
      return;
    }
    console.log('Connection established');
  });

  module.exports = con;
