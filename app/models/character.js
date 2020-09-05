const Sequelize = require('sequelize');
const sequelize = require('../database');
const { SELECT } = require('sequelize/types/lib/query-types');

class Character extends Sequelize.Model {};

Character.init({
  firstname: Sequelize.STRING,
  lastname: Sequelize.STRING,
  birthday: Sequelize.DATE,
  deathday: Sequelize.DATE,
  surnom: Sequelize.STRING,
  patronus: Sequelize.STRING,
  maison: Sequelize.STRING,
  married: Sequelize.STRING,
  job: Sequelize.STRING,
  other_features: Sequelize.STRING,
  brother_sister: Sequelize.STRING,
  cousin: Sequelize.STRING,
  oncle_tante: Sequelize.STRING,
  child: Sequelize.STRING,
  neveu: Sequelize.STRING,
  beau_frere: Sequelize.STRING,
  animal: Sequelize.STRING,
  home: Sequelize.STRING,
  cause_deces: Sequelize.STRING,
  Other_family: Sequelize.STRING,
  father_id: Sequelize.INTEGER,
  mother_id: Sequelize.INTEGER,
  blood_id: Sequelize.INTEGER,
  shcool_id: Sequelize.INTEGER,
  url: Sequelize.STRING
},{
  sequelize,
  tableName: "character"
});

// on exporte la class directement !
module.exports = Character;