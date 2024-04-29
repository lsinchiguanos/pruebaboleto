import Server from './src/config/server';

import billboardRoutes from "./src/routes/billboard.router";
import bookingRoutes from "./src/routes/booking.router";
import customerRoutes from "./src/routes/customer.router";
import movieRoutes from "./src/routes/movie.router";
import roomRoutes from "./src/routes/room.router";
import seatRoutes from "./src/routes/seat.router";

var path = require('path');
require('dotenv').config();
const server = new Server();

server.app.use('/bllbrd', billboardRoutes);
server.app.use('/bkn', bookingRoutes);
server.app.use('/cstmr', customerRoutes);
server.app.use('/mv', movieRoutes);
server.app.use('/rm', roomRoutes);
server.app.use('/st', seatRoutes);

//Levantar express
server.start( () => {
    console.log(`Servidor corriendo en puerto ${ server.port }`)
});