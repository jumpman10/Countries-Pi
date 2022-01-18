const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('tourism', {

    name: {
        type: DataTypes.STRING,
        allowNull: false,
        
      },
    dificulty: {
          type: DataTypes.INTEGER,
          validate: {
              min: 1,
              max: 5
          },
          allowNull: false,
      },
    duration: {
      type: DataTypes.INTEGER,
      validate: {
          min: 1,
          max: 5
      },
      allowNull: false,
      },
    season: {
          type: DataTypes.ENUM('summer', 'autumn', 'winter', 'spring'),
          allowNull: false,
      },
  

  });
};

