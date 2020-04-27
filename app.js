const express = require('express')
const app = express()
const morgan = require('morgan')
const mysql = require('mysql')
const bodyParser = require('body-parser')

paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': 'AZxNfOJddz0YpTq1W9bpkh_lIceSaDIEa5ITpQt2hvZ0jwlx8I0-ULm_7Bw1-x36XUNO-MNKzHdf11dW',
    'client_secret': 'EEiBHhcgcMdLe5JWFzXaoP5nzQ-jJGk_8QEkR2uenwDZ4OJZcXoM93zZEHvsleI_3JLL9TOGHn8PAdJb'
  });

//middlwear that helps process requests easily
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('./public'));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));

app.use(morgan('short'));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cicada'
  });
  
  connection.connect((err)=>{
    if(!err)
    console.log('Database successfully connected!');
    else
      console.log('Database connection failed \n Error : '+ JSON.stringify(err, undefined, 2));
  });
  
  app.get("/", (req, res) => {
    console.log('Responding to route');
    res.send('Hello from route! ')
  })

app.post('/pay', (req, res) => {
    const create_payment_json = {

    };
});