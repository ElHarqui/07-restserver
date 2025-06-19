const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        //Middelware
        this.middlewares();
        //Rutas de la aplicacion
        this.routes();
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
            res.json({
                msg: 'post API'
            });
        });

        this.app.delete('/api',  (req, res) => {
            res.json({
                msg: 'delete API'
            });
        });

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
