const mongoose = require('mongoose');

mongoose.Promise = global.Promise;


mongoose.connect('mongodb://Phillip04:Zbaby022@ds049864.mlab.com:49864/pollingapp')
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));