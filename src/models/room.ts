import { DataTypes } from "sequelize";
import db from '../../conexion';
import Bilboard from "./billboard";
import Seat from "./seat";

const Room = db.define('room', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        autoIncrementIdentity: true,
        field: 'id_room'
    },
    name:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    number: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
}, {
    timestamps: false
});

Room.hasMany(Bilboard, {
    foreignKey: 'id_room',
    sourceKey: 'id'
});

Bilboard.belongsTo(Room,{
    foreignKey: 'id_room',
    targetKey: 'id'
});

Room.hasMany(Seat, {
    foreignKey: 'id_room',
    sourceKey: 'id'
});

Seat.belongsTo(Room,{
    foreignKey: 'id_room',
    targetKey: 'id'
});

export default Room;