'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class villager extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.villager.belongsTo(models.user)
    }
  }
  villager.init({
    userId: DataTypes.INTEGER,
    villagerId: DataTypes.INTEGER,
    imgUrl: DataTypes.STRING,
    name: DataTypes.STRING,
    personality: DataTypes.STRING,
    birthday: DataTypes.STRING,
    species: DataTypes.STRING,
    gender: DataTypes.STRING,
    hobby: DataTypes.STRING,
    catch_phrase: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'villager',
  });
  return villager;
};