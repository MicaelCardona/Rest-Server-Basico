
const express = require('express')
const cors=require('cors');//Es para controlar que solo ciertas paginas web accedan a ellas o todas
class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usurPath='/api/users';

    //middlewares
    this.middlewares();

    //rutas de Aplicacion
    this.routes();
  }

  middlewares() {

    //CORS
    this.app.use(cors());
    //Lectura y parseo del body
    this.app.use(express.json());
    //Directorio publico
    this.app.use(express.static('public'))
  }

  routes() {
  this.app.use(this.usurPath,require('../routes/users'));// la primera parte da el link ejemplo sera /api
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Example app listening on port ${this.port}`)
    })
  }

}


module.exports = Server;