const express = require('express')
var cors = require('cors')
const app = express()
var bodyParser = require('body-parser')
const con = require('./connector.js')
const port = 3000

// inizializzazione connessione
/*const connection = mysql.createConnection({
    host     : '127.0.0.1', // macchina locale, localhost == 127.0.0.1
    port     : 3306,
    user     : 'its_user',
    password : 'its@123456789',
    database : 'registro'
});

connection.connect(function (err) {
  // Check if there is a connection error
  if (err) {
      console.log("connection error", err.stack);
      return;
  }

  console.log(`connected to database`);
});

connection.end((err) => {
  // The connection is terminated gracefully
  // Ensures all remaining queries are executed
  // Then sends a quit packet to the MySQL server.
});
*/

var jsonParser = bodyParser.json()

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// Enable CORS for all routes
app.use(cors(corsOptions));


app.get('/getallusers', async (req, res) => {
  let startvalue = (req.query.startvalue - 1) * req.query.endvalue;
  let endvalue = (req.query.startvalue * req.query.endvalue) - 1;
    try {
      const [data] = await con.execute(`select * from users LIMIT ${startvalue},${endvalue}`);
      data.forEach((row) => {
        console.log(`${row.id} = ${row.lastname} ${row.firstname}`);
      });

      res.json(data);
    } catch (err) {
      console.log(err);
      res.json({ error: true, errormessage: "retrieve users error" });
    }
})
/*
app.get('/getallusers', async (req, res) => {
  pagenumber=(req.query.pagenumber - 1) * req.query.pagesize;
  pagesize=(req.query.pagenumber * req.query.pagesize) - 1;
  try{
    const [data] = await con.execute(`select * from users LIMIT ${pagenumber},${pagesize}`);
    data.forEach( (row) => {
      console.log(`${row.id} = ${row.lastname} ${row.firstname}`);
    });

    res.json(data);
  } catch(err) {
    console.log(err);
    res.json({ error: true, errormessage: "retrieve users error"});
  }

})*/

app.post('/Register', jsonParser, (req, res) => {
  console.log(req.body);
  res.statusCode = 200;
  res.send('Register')
})


app.listen(port, () => {
  console.log(`Its register app listening on port ${port}`)
})