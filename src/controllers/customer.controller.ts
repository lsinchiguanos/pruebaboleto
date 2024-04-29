import { Response } from "express";
import CustomerService from "../services/customers.service";

export const getCustomers = (req: any, res: Response) => {
    CustomerService.getCustomersAll().then((result: any ) => {
        if( result ){
            return res.json({
                ok: true,
                tabla: result
            });
        }
    }).catch( (err: any) => {
        return res.status(500).json({
            ok: false,
            mensaje: "Error ejecutar proceso"
        })
    });
};

export const newCustomers = (req: any, res: Response) => {
    const customerInfor = req.body;
    
    CustomerService.newCustomer(customerInfor).then((result: any ) => {
        if( result ){
            return res.json({
                ok: true,
                tabla: result
            });
        }
    }).catch( (err: any) => {
        return res.status(500).json({
            ok: false,
            mensaje: "Error ejecutar proceso"
        })
    });
};

export const upCustomers = (req: any, res: Response) => {
    const customerInfor = req.body;
    
    CustomerService.upCustomer(customerInfor).then((result: any ) => {
        if( result ){
            return res.json({
                ok: true,
                tabla: result
            });
        }
    }).catch( (err: any) => {
        return res.status(500).json({
            ok: false,
            mensaje: "Error ejecutar proceso"
        })
    });
};

export const delCustomers = (req: any, res: Response) => {
    const customerInfor = req.body;
    
    CustomerService.delCustomer(customerInfor).then((result: any ) => {
        if( result ){
            return res.json({
                ok: true,
                tabla: result
            });
        }
    }).catch( (err: any) => {
        return res.status(500).json({
            ok: false,
            mensaje: "Error ejecutar proceso"
        })
    });
};