import { ResponseEntity } from "../shared/response.entity";
import Seat from "../models/seat";
import db from '../../conexion';
import { SeatDTO } from "../interfaces/seat.dto";
const { QueryTypes } = require('sequelize');

export default class SeatService {
    constructor(){}
    static async getSeatAll(): Promise<any> {
        return Seat.findAll();
    }

    static async newSeat(seatInfo: SeatDTO): Promise<any> {
        const number = seatInfo.number;
        const rowNumber = seatInfo.rowNumber;
        const id_room = seatInfo.id_room;
        const result = await Seat.create({
            number,
            rowNumber,
            id_room
        });
        return result;
    }

    static async upSeat(seatInfo: SeatDTO): Promise<any> {
        // Busco dentro de la base de datos
        const dataOld:SeatDTO | any = await Seat.findByPk(seatInfo.id);
        dataOld.number = seatInfo.number;
        dataOld.rowNumber = seatInfo.rowNumber;
        dataOld.id_room = seatInfo.id_room;
        const result = await dataOld.save();
        return result;
    }

    static async delSeat(seatInfo: SeatDTO): Promise<any> {
        // Busco dentro de la base de datos
        const dataOld:SeatDTO | any = await Seat.findByPk(seatInfo.id);
        dataOld.status = false;
        const result = await dataOld.save();
        return result;
    }

    static async getBucatas(id_billboard: number, id_room: number): Promise<any>{
        const query = `select * from get_bucatas(:id_billboard, :id_room)`;
        const [results, metadata] = await db.query(query, {
            replacements: { id_billboard: id_billboard, id_room: id_room },
            type: QueryTypes.SELECT
        });
        return results;
    }
}