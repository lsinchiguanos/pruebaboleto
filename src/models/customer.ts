import { DataTypes } from "sequelize";
import db from '../../conexion';
import Booking from "./booking";

const Customer = db.define('customer', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        autoIncrementIdentity: true,
        field: 'id_customer'
    },
    documentNumber:{
        type: DataTypes.STRING(20),
        allowNull: false,
        field: 'document_number'
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING(50),
        allowNull: false,
        field: 'last_name'
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    phoneNumber: {
        type: DataTypes.STRING(20),
        field: 'phone_number'
    },
    email: {
        type: DataTypes.STRING(100)
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
}, {
    timestamps: false
});

Customer.hasMany(Booking, {
    foreignKey: 'id_customer',
    sourceKey: 'id'
});

Booking.belongsTo(Customer,{
    foreignKey: 'id_customer',
    targetKey: 'id'
});


export default Customer;