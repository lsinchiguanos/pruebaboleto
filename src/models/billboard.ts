import { DataTypes } from "sequelize";
import db from '../../conexion';
import Booking from "./booking";

const Bilboard = db.define('bilboard', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        autoIncrementIdentity: true,
        field: 'id_bilboard'
    },
    date:{
        type: DataTypes.DATEONLY,
        field: 'date'
    },
    startTime: {
        type: DataTypes.TIME,
        field: 'start_time'
    },
    endTime : {
        type: DataTypes.TIME,
        field: 'end_time'
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
}, {
    timestamps: false
});

Bilboard.hasMany(Booking, {
    foreignKey: 'id_bilboard',
    sourceKey: 'id'
});

Booking.belongsTo(Bilboard,{
    foreignKey: 'id_bilboard',
    targetKey: 'id'
});


export default Bilboard;