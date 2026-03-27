const express = require('express');
const mysql = require('mysql2');
const app = express();

const db = mysql.createConnection({
  host: '192.168.10.10', // IP du futur serveur DB (LAN)
  user: 'appuser',
  password: 'password123',
  database: 'appdb'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connecté à MySQL sur le LAN !');
});

app.get('/', (req, res) => {
  db.query('SELECT * FROM fruits', (err, results) => {
    if (err) throw err;
    res.send('<h1>Projet 3-Tiers - OpenShift</h1>' + JSON.stringify(results));
  });
});

app.listen(3000, '0.0.0.0', () => console.log('Serveur Web DMZ démarré sur port 3000'));