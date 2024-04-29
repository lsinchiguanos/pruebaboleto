import { Response } from "express";
import SeatService from "../services/seat.service";

export const getSeat = (req: any, res: Response) => {
    SeatService.getSeatAll().then((result: any ) => {
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

export const getSeatRoom = (req: any, res: Response) => {
    const {id_billboard, id_room} = req.query;
    SeatService.getBucatas(id_billboard, id_room ).then((result: any ) => {
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

export const newSeat = (req: any, res: Response) => {
    const seatInfor = req.body;
    
    SeatService.newSeat(seatInfor).then((result: any ) => {
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

export const upSeat = (req: any, res: Response) => {
    const seatInfor = req.body;
    
    SeatService.upSeat(seatInfor).then((result: any ) => {
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

export const delSeat = (req: any, res: Response) => {
    const seatInfor = req.body;
    
    SeatService.delSeat(seatInfor).then((result: any ) => {
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