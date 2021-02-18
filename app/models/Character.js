const client = require('../database');
// const CoreModel = require ('../models/CoreModel');
const tableName = 'character';



class Character{
  constructor(data = {}) {
    //super(data);
    for (const prop in data) {
        this[prop] = data[prop];
    }
  }

static async findAll(callback)  {
    const sql = await client.query(`SELECT * FROM "character"`);
    return sql.rows;
}

static async findOne(characterId)  {
    
    const character = await client.query(`SELECT * FROM "character" WHERE "id" = $1`, [characterId]);
    return character.rows[0];
}

};
module.exports = Character;

// Character.init({
//   firstname: Sequelize.STRING,
//   lastname: Sequelize.STRING,
//   birthday: Sequelize.DATE,
//   deathday: Sequelize.DATE,
//   surnom: Sequelize.STRING,
//   patronus: Sequelize.STRING,
//   maison: Sequelize.STRING,
//   married: Sequelize.STRING,
//   job: Sequelize.STRING,
//   other_features: Sequelize.STRING,
//   brother_sister: Sequelize.STRING,
//   cousin: Sequelize.STRING,
//   oncle_tante: Sequelize.STRING,
//   child: Sequelize.STRING,
//   neveu: Sequelize.STRING,
//   beau_frere: Sequelize.STRING,
//   animal: Sequelize.STRING,
//   home: Sequelize.STRING,
//   cause_deces: Sequelize.STRING,
//   Other_family: Sequelize.STRING,
//   father_id: Sequelize.INTEGER,
//   mother_id: Sequelize.INTEGER,
//   blood_id: Sequelize.INTEGER,
//   shcool_id: Sequelize.INTEGER,
//   url: Sequelize.STRING
// },{
//   sequelize,
//   tableName: "character"
// });

// class Characters extends Sequelize.Model {};

// Characters.init({
//   firstname: Sequelize.STRING,
//   lastname: Sequelize.STRING,
//   maison: Sequelize.STRING,
//   url: Sequelize.STRING
// },{
//   sequelize,
//   tableName: "character"
// });

