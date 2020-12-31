'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order_artWork extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      order_artWork.belongsTo(models.order);
      order_artWork.belongsTo(models.artWork);
    }
  };
  order_artWork.init({
    orderId: DataTypes.INTEGER,
    artWorkId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'order-artWork',
  });
  return order_artWork;
};