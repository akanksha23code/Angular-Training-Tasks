const express = require("express");
const cors = require("cors");
const mysql = require('mysql2');
const app = express();
const db = mysql.createConnection({
    user: 'mysql_esigndc_user',
    host: 'esigndcauroramysql-dasaurora-mysqlcluster-dev.cluster-ckoxxobcoomc.eu-west-1.rds.amazonaws.com',
    password: 'AJIGG2QMdqFO5FxiUCAY',
    database: 'ppHack'
  });
  
db.connect(err => {
    if (err) {
      console.error('Connection failed:', err);
      return;
    }
    console.log('Connected to MySQL');
});

app.use(cors({ origin: "http://localhost:4200/form" }));
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
app.get("/", (req, res) => {
    res.send("Node.js Express server is running...");
});

app.get("/get/message", (req, res) => {
    //res.send("this is a msg...");
    res.json({message:"this is a test api"})
});

app.get('/users/signin', (req, res) => {
    db.query('SELECT * FROM tst_users WHERE userid = ?', [req.query.id], (err, results) => {
      if (err) return res.status(500).send(err);
      //if (results.length === 0) return res.status(404).send({ message: 'User not found' });
      console.log("user list",results[0])
      res.json(results[0]);
    });
  });
  
  //  UPDATE user
  app.put('/users/signup', (req, res) => {
    const { id, name,pw } = req.body;
    const sql = 'insert into tst_users (userid,name,password) values (?,?,?)';
    db.query(sql, [id,name, pw], (err, result) => {
      if (err) return res.status(500).send(err);
      res.send({ message: 'User updated' });
    });
  });

