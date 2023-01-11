'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Invitations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Invitations.belongsTo(models.Users)
      Invitations.belongsTo(models.Musics)
    }
  }
  Invitations.init({
    quote: DataTypes.STRING,
    quote_src: DataTypes.STRING,
    bride: DataTypes.STRING,
    bride_img: DataTypes.STRING,
    bride_nick: DataTypes.STRING,
    bride_mother: DataTypes.STRING,
    bride_father: DataTypes.STRING,
    groom: DataTypes.STRING,
    groom_img: DataTypes.STRING,
    groom_nick: DataTypes.STRING,
    groom_mother: DataTypes.STRING,
    groom_father: DataTypes.STRING,
    matrimony_name: DataTypes.STRING,
    matrimony_date: DataTypes.DATE,
    matrimony_time_start: DataTypes.INTEGER,
    matrimony_time_end: DataTypes.INTEGER,
    ceremonial_name: DataTypes.STRING,
    ceremonial_date: DataTypes.DATE,
    ceremonial_time_start: DataTypes.INTEGER,
    ceremonial_time_end: DataTypes.INTEGER,
    map_location: DataTypes.TEXT,
    photo: DataTypes.STRING,
    story: DataTypes.STRING,
    story_img: DataTypes.STRING,
    wallet_bank: DataTypes.STRING,
    wallet_no: DataTypes.INTEGER,
    wallet_owner: DataTypes.STRING,
    MusicId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Invitations',
  });
  return Invitations;
};