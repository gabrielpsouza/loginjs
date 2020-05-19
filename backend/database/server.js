const mysql = require('mysql');
var express = require('express');
var app = express();
const con = mysql.createConnection({
  host: '127.0.0.1',
  user: "root",
  password: "password",
  database: 'loginjs'
});

con.connect((err) => {
    if(err){
      console.log('Error connecting to Db');
      return;
    }
    console.log('Connection established');
  });
  
  AddUsers();
  ListUsers();

  function AddUsers() {
    const user = { FirstName: 'Gabriel', LastName: 'Pedro', Age: 19, Senha: "testeApi" };
    con.query('INSERT INTO Usuarios SET ?', user, (err, res) => {
      if(err) throw err;
    
      console.log('Last insert ID:', res.insertId);
    });
  }

  function ListUsers() {
      con.query('SELECT * FROM Usuarios', (err,rows) => {
        if(err) throw err;

        console.log(rows);
        rows.send(recordset);
      });      
  }  

  var server = app.listen(5000, function () {
    console.log('Server is running..');
});