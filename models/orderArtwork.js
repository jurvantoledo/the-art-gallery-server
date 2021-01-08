'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orderArtWork extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      orderArtWork.belongsTo(models.order);
      orderArtWork.belongsTo(models.artWork);
    }
  };
  orderArtWork.init({
    orderId: DataTypes.INTEGER,
    artWorkId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'orderArtWork',
  });
  return orderArtWork;
};