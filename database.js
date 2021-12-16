const mongoose = require('mongoose');

const URI = "mongodb+srv://root:root@cluster0.vm7l1.mongodb.net/proyectosAdmin";
// const URI = "mongodb+srv://root:root@habilishoesdb.czmry.mongodb.net/proyectosAdmin";
// mongodb+srv://root:<password>@cluster0.vm7l1.mongodb.net/
mongoose.connect(URI)
    .then(db => console.log('DB está conectada'))
    .catch(err => console.error(err));

module.exports = mongoose;
    