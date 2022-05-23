const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      //allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hp: {
      type: DataTypes.INTEGER,
      //allowNull: false,
    },
    attack: {
      type: DataTypes.INTEGER,
      //allowNull: false,
    },
    defense: {
      type: DataTypes.INTEGER,
      //allowNull: false,
    },
    speed: {
      type: DataTypes.INTEGER,
      //allowNull: false,
    },
    height: {
      type: DataTypes.INTEGER,
      // allowNull: false,
    },
    weight: {
      type: DataTypes.FLOAT
      ,
      //allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
      defaultValue: 'https://via.placeholder.com/250x180',
      //allowNull: false,
      validate: {
        isUrl: true,
        isImg(value) {
          if (value.match(/^http[^\?]*.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/gmi) === null) {
            throw new Error('From DB: Image format not valid!')
          }
        }
      }
    },
    fromDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    }
  }, {
    timestamps: false,
  });
};
