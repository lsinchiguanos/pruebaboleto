import { ResponseEntity } from "../shared/response.entity";
import Customer from "../models/customer";
import { CustomerDTO } from "../interfaces/customers.dto";

export default class CustomerService {
    constructor(){}
    static async getCustomersAll(): Promise<any> {
        return Customer.findAll();
    }

    static async newCustomer(customerInfo: CustomerDTO): Promise<any> {
        const documentNumber = customerInfo.documentNumber;
        const name = customerInfo.name;
        const lastName = customerInfo.lastName;
        const age = customerInfo.age;
        const phoneNumber = customerInfo.phoneNumber;
        const email = customerInfo.email;
        const result = await Customer.create({
            documentNumber ,
            name ,
            lastName ,
            age ,
            phoneNumber ,
            email
        });

        return result;
    }

    static async upCustomer(customerInfo: CustomerDTO): Promise<any> {
        // Busco dentro de la base de datos
        const dataOld:CustomerDTO | any = await Customer.findByPk(customerInfo.id);
        dataOld.documentNumber = customerInfo.documentNumber;
        dataOld.name = customerInfo.name;
        dataOld.lastName = customerInfo.lastName;
        dataOld.age = customerInfo.age;
        dataOld.phoneNumber = customerInfo.phoneNumber;
        dataOld.email = customerInfo.email;
        const result = await dataOld.save();
        return result;
    }

    static async delCustomer(customerInfo: CustomerDTO): Promise<any> {
        // Busco dentro de la base de datos
        const dataOld:CustomerDTO | any = await Customer.findByPk(customerInfo.id);
        dataOld.status = false;
        const result = await dataOld.save();
        return result;
    }
}