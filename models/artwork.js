'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class artWork extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      artWork.belongsTo(models.gallery);
      artWork.belongsToMany(models.order, {
        through: "orderArtWorks",
        foreignKey: "artWorkId",
      });
    }
  }
  artWork.init({
    name: { type: DataTypes.STRING, allowNull: false },
    image: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    price: { type: DataTypes.STRING, allowNul: false },
    galleryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'artWork',
  });
  return artWork;
};