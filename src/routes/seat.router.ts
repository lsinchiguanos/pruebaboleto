import { Router } from "express";
import { body, check, query } from "express-validator";
import { delSeat, getSeat, getSeatRoom, newSeat, upSeat } from "../controllers/seat.controller";
import validarCampos from "../middlewares/validar-campos";

const seatRoute = Router();

seatRoute.get('/', getSeat);
seatRoute.get('/btcs', [    check('id_room','Favor ingrese la sala').isNumeric(),
                            check('id_billboard','Favor ingrese la cartelera').isNumeric(),
                            validarCampos],getSeatRoom);
seatRoute.post('/rgstr', [  check('number','Favor ingrese el numero de butaca').isNumeric(),
                            check('rowNumber','Favor ingrese el numero de fila').isNumeric(),
                            check('id_room','Favor ingrese la sala').isNumeric(),
                            validarCampos], newSeat);
seatRoute.post('/edt', [    check('id','Favor ingrese la bucata a modificar').isNumeric(),
                            body('number','Favor ingrese el numero de butaca').isNumeric(),
                            body('rowNumber','Favor ingrese el numero de fila').isNumeric(),
                            body('id_room','Favor ingrese la sala').isNumeric(),
                            validarCampos], upSeat);
seatRoute.post('/rmv', [    check('id','Favor ingrese el room').isNumeric(),
                            validarCampos], delSeat);


export default seatRoute;