'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Musics extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Musics.hasMany(models.Invitations)
    }
  }
  Musics.init({
    band: DataTypes.STRING,
    song: DataTypes.STRING,
    song_src: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Musics',
  });
  return Musics;
};