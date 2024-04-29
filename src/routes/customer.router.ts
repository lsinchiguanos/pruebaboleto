import { Router } from "express";
import { body, check, query } from "express-validator";
import { delCustomers, getCustomers, newCustomers, upCustomers } from "../controllers/customer.controller";
import validarCampos from "../middlewares/validar-campos";

const customerRoute = Router();

customerRoute.get('/', getCustomers);
customerRoute.post('/rgstr', [  check('documentNumber','Favor ingrese el numero de dni').isLength({ min: 2, max: 20 }).trim().isString(),
                                check('name','Favor ingrese el nombre').isLength({ min: 2, max: 50 }).trim().isString(),
                                check('lastName','Favor ingrese el apellido').isLength({ min: 2, max: 50 }).trim().isString(),
                                check('age','Favor ingrese la edad').isNumeric(),
                                check('phoneNumber','Favor ingrese un numero telefonico').isLength({ min: 10, max: 20 }).trim().isString(),
                                check('email','Favor ingrese el email').isLength({ min: 5, max: 100 }).trim().isString(),
                                validarCampos], newCustomers);
customerRoute.post('/edt', [    check('id','Favor ingrese el cliente').isNumeric(),
                                body('documentNumber','Favor ingrese el numero de dni').isLength({ min: 2, max: 20 }).trim().isString(),
                                body('name','Favor ingrese el nombre').isLength({ min: 2, max: 50 }).trim().isString(),
                                body('lastName','Favor ingrese el apellido').isLength({ min: 2, max: 50 }).trim().isString(),
                                body('age','Favor ingrese la edad').isNumeric(),
                                body('phoneNumber','Favor ingrese un numero telefonico').isLength({ min: 10, max: 20 }).trim().isString(),
                                body('email','Favor ingrese el email').isLength({ min: 5, max: 100 }).trim().isString(),
                                validarCampos], upCustomers);
customerRoute.post('/rmv', [    check('id','Favor ingrese el cliente').isNumeric(),
                                validarCampos], delCustomers);

export default customerRoute;