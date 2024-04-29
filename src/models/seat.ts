import { DataTypes } from "sequelize";
import db from '../../conexion';

const Seat = db.define('seat', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        autoIncrementIdentity: true,
        field: 'id_seat'
    },
    number:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    rowNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'row_number'
    },
    aviable:{
        type: DataTypes.INTEGER,
        defaultValue: 1
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
}, {
    timestamps: false
});

export default Seat;