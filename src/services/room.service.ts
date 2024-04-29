import { ResponseEntity } from "../shared/response.entity";
import Room from "../models/room";
import { RoomDTO } from "../interfaces/room.dto";

export default class RoomService {
    constructor(){}
    static async getRoomAll(): Promise<any> {
        return Room.findAll();
    }

    static async newRoom(roomInfo: RoomDTO): Promise<any> {
        const name = roomInfo.name;
        const number = roomInfo.number;
        const result = await Room.create({
            name,
            number
        });
        return result;
    }

    static async upRoom(roomInfo: RoomDTO): Promise<any> {
        // Busco dentro de la base de datos
        const dataOld:RoomDTO | any = await Room.findByPk(roomInfo.id);
        dataOld.name = roomInfo.name;
        dataOld.number = roomInfo.number;
        const result = await dataOld.save();
        return result;
    }

    static async delRoom(roomInfo: RoomDTO): Promise<any> {
        // Busco dentro de la base de datos
        const dataOld:RoomDTO | any = await Room.findByPk(roomInfo.id);
        dataOld.status = false;
        const result = await dataOld.save();
        return result;
    }
}