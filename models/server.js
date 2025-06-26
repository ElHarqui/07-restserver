const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');



class Server {

    constructor() {
           this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';
        //llamada a conectarDB
        this.conectarDB();
        //Middelware
        this.middlewares();
        //Rutas de la aplicacion
        this.routes();

    }
    async conectarDB() {
        await dbConnection();
    }

    routes() {
        this.app.get('/api',  (req, res) => {
            res.json({
                msg: 'get API'
            });
        })

        this.app.put('/api',  (req, res) => {
            res.json({
                msg: 'put API'
            });
        });

        this.app.post('/api',  (req, res) => {
            const body = req.body;
            res.json({
                msg: 'post API',
                body
            });
        });

        this.app.delete('/api',  (req, res) => {
            res.json({
                msg: 'delete API'
            });
        });

        // Montar las rutas de usuarios
        this.app.use(this.usuariosPath, require('../routes/usuarios'));

    }

    listen() {

        this.app.listen(this.port, () =>{
            console.log('Servidor corriendo en puerto ',this.port)
        })
    }
     middlewares(){
        //CORS
        this.app.use(cors());
        //lectura y parseo del body recibe lo que se envia
        this.app.use(express.json());
        //directorio publico
        this.app.use(express.static('public'));

    }



}

module.exports = Server;
