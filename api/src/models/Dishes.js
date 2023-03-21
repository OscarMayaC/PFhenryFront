const { DataTypes, INTEGER } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dishes', {
    name: {
      type: DataTypes.STRING,
      ilike: true,
      allowNull: false, // no sea null
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true
    },
    description: { // vida
      type: DataTypes.STRING,
      allowNull: true,
      // unique: true // un unico valor,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false, // no sea null
      },
    availability: { // vida
        type: DataTypes.BOOLEAN,
        allowNull: false,
        // unique: true // un unico valor,
      },
    nationality: {
      type: DataTypes.STRING, 
      allowNull: false
      // allowNull: false
    }
  },
  {
    timestamps: false,
  });

};
