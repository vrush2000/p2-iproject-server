'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Greets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Greets.belongsTo(models.Users)
    }
  }
  Greets.init({
    guest: DataTypes.STRING,
    presence: DataTypes.STRING,
    greeting: DataTypes.TEXT,
    date: DataTypes.DATE,
    UserId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Greets',
  });
  return Greets;
};