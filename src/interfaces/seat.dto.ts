import { BaseDto } from "./base.dto";

export interface SeatDTO extends BaseDto{
    number: number,
    rowNumber: number,
    aviable: number,
    id_room: number
}