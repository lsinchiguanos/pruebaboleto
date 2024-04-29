import { BaseDto } from "./base.dto";

export interface RoomDTO extends BaseDto{
    name: string,
    number: number,
}