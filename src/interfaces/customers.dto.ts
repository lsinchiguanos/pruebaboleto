import { BaseDto } from "./base.dto";

export interface CustomerDTO extends BaseDto{
    documentNumber: string,
    name: string,
    lastName: string,
    age: number,
    phoneNumber: string,
    email: string
}