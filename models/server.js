const express = require('express')
const cors = require('cors')
class Server {
      constructor() {
            this.app = express();
            this.port = process.env.PORT;
            this.usersPath = '/api/users'
            // Middlewares
            this.middlewares();
            // Rutas de mi aplicación
            this.routes();
      }

      middlewares() {
            // Configuración del CORS
            this.app.use(cors());

            // Lectura y parseo del body
            this.app.use(express.json());

            // Directorio publico
            this.app.use(express.static('public'))
      }

      routes() {
            // Users
            this.app.use(this.usersPath, require('../routes/user.routes'));
      }

      listen() {
            this.app.listen(this.port, () => {
                  console.log('Servidor corriendo en el puerto: ', this.port);
            });
      }
}

module.exports = Server;