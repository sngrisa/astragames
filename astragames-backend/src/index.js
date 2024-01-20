const express = require('express');
const cors = require('cors');
const { conectWithMongoDB } = require('./config/mongoDBconfig.js');


//Puerto al que se conecta el servidor;
const port = 3000;

//Uso de express mediante una variable constante
const app = express();

//Configuracion con MongoDB de la base de datos
conectWithMongoDB();

//Configuracion de CORS para usar cualquier conexion
app.use(cors({ origin: 'http://localhost:4200' }));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
})

//Uso de la libreria de express JSON()
app.use(express.json());

//Configuracion de rutas
app.use('/api/users', require('./router/usersrouter.js'));
app.use('/api/games', require('./router/gamesrouter.js'));
app.use('/api/categories', require('./router/categoriesrouter.js'));
app.use('/api/articles', require('./router/articlesrouter.js'));


//Notificacion del puerto usado
app.listen(port, () => {
    console.info(`Escuchando en el puerto ${port}`);
})
