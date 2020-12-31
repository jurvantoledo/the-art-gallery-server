'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class gallery extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      gallery.belongsTo(models.user)
      gallery.hasMany(models.artWork);
    }
  };
  gallery.init({
    name: { type: DataTypes.STRING, allowNul: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'gallery',
  });
  return gallery;
};