const express = require('express');
const path =require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

require('./config/db');

const app = express();

const poll = require('./routes/poll');

app.use(express.static(path.join(__dirname, 'public')));

//Middleware
//bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

//cors
app.use(cors());

app.use('/poll', poll);

//port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

