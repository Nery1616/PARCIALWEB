module.exports = (sequelize, Sequelize) => {
// usamos el sequelize.define para "definir" el nombre de la entity en la BD, en este caso "cliente"
// Usamos type.Sequelize para definir el tipo de datos de cada atributo de la entidad 
    const Pelicula = sequelize.define("pelicula_series", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: Sequelize.STRING
        },
        sinopsis: {
            type: Sequelize.STRING
        },
        actores: {
            type: Sequelize.STRING
        },
        duracion: {
            type: Sequelize.INTEGER
        },
        tipo: {
            type: Sequelize.STRING
        },
        categoria: {
            type: Sequelize.STRING
        },
        anioLanzamiento: {
            type: Sequelize.INTEGER
        }
    });
    return Pelicula;
};