import { Router } from "express";
import { body, check, query } from "express-validator";
import { delRoom, getRoom, newRoom, upRoom } from "../controllers/room.controller";
import validarCampos from "../middlewares/validar-campos";

const roomRoute = Router();

roomRoute.get('/', getRoom);
roomRoute.post('/rgstr', [  check('name','Favor ingrese el nombre').isLength({ min: 2, max: 50 }).trim().isString(),
                                check('number','Favor ingrese el numero').isNumeric(),
                                validarCampos], newRoom);
roomRoute.post('/edt', [    check('id','Favor ingrese el room a modificar').isNumeric(),
                                body('name','Favor ingrese el nombre').isLength({ min: 2, max: 50 }).trim().isString(),
                                body('number','Favor ingrese el numero').isNumeric(),
                                validarCampos], upRoom);
roomRoute.post('/rmv', [    check('id','Favor ingrese el room').isNumeric(),
                                validarCampos], delRoom);

export default roomRoute;