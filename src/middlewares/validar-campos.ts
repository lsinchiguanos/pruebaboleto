
import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';

const validarCampos = (req: Request, res: Response, next: NextFunction) => {
    // console.log(req.body);
    const errors = validationResult( req );
    // console.log(errors);
    if( !errors.isEmpty() ){
        return res.status(400).json({
            ok: false,
            errors: errors['errors']
        })
    }
    next();
}


export default validarCampos;