const express = require('express');
const morgan = require('morgan');
const path = require('path')
const cors = require('cors')

const {mongoose} = require('./database')
const app = express();

//settings
app.set('port', process.env.PORT || 4000);
app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "http://localhost:3000/");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});

const corsOptions = {
   origin: 'http://localhost:3000/',
   optionsSuccessStatus: 200,
   methods: "GET, PUT, POST, DELETE"
}

app.use(cors(corsOptions));


//middlewares
app.use(morgan('dev'));
app.use(express.json());
//routes
app.use('/api/proyectos', require('./src/routes/proyectos'));
app.use('/api/usuarios',require('./src/routes/usuarios'));
//static files
console.log(path.join(__dirname, 'public'))
app.use(express.static(path.join(__dirname, 'public')))
//empezando el server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
