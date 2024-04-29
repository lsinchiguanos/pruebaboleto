import { DataTypes } from "sequelize";
import db from '../../conexion';
import Bilboard from "./billboard";

const Movie = db.define('movie', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        autoIncrementIdentity: true,
        field: 'id_movie'
    },
    name:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    genre: {
        type: DataTypes.ENUM,
        values: [ 'ACTION',
            'ADVENTURE',
            'COMEDY',
            'DRAMA',
            'FANTASY',
            'HORROR',
            'MUSICALS',
            'MYSTERY',
            'ROMANCE',
            'SCIENCE_FICTION',
            'SPORTS',
            'THRILLER',
            'WESTERN'],
        allowNull: false
    },
    allowedAge : {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'allowed_age'
    },
    lengthMinutes : {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'length_minutes'
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
}, {
    timestamps: false
});

Movie.hasMany(Bilboard, {
    foreignKey: 'id_movie',
    sourceKey: 'id'
});

Bilboard.belongsTo(Movie,{
    foreignKey: 'id_movie',
    targetKey: 'id'
});

export default Movie;