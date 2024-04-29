import { Response } from "express";
import RoomService from "../services/room.service";

export const getRoom = (req: any, res: Response) => {
    RoomService.getRoomAll().then((result: any ) => {
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

export const newRoom = (req: any, res: Response) => {
    const roomInfor = req.body;
    
    RoomService.newRoom(roomInfor).then((result: any ) => {
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

export const upRoom = (req: any, res: Response) => {
    const roomInfor = req.body;
    
    RoomService.upRoom(roomInfor).then((result: any ) => {
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

export const delRoom = (req: any, res: Response) => {
    const roomInfor = req.body;
    
    RoomService.delRoom(roomInfor).then((result: any ) => {
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