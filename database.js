const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' })

mongoose.connect(process.env.URI)
    .then(db => console.log('DB está conectada'))
    .catch(err => console.error(err));

module.exports = mongoose;
    