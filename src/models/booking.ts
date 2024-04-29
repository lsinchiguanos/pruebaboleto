import { DataTypes } from "sequelize";
import db from '../../conexion';

const Booking = db.define('booking', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        autoIncrementIdentity: true,
        field: 'id_booking'
    },
    date:{
        type: DataTypes.DATE,
        allowNull: false,
        field: 'date'
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
}, {
    timestamps: false
});

export default Booking;