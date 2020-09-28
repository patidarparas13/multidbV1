const express = require('express');
// const connectDB = require('./config/db');
const bodyParser = require('body-parser');
var cors = require('cors');
const db = require('./config/dbConfig')
const app = express();


// cors
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.urlencoded({ extended: true }));
// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello Nupay!'));
require("./routes/mongodb/customer.mongodb.routes")(app);
require("./routes/mysql/customer.mysql.routes")(app);


const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
