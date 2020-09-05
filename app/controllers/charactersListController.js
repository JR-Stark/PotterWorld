const { Character } = require('../models/');

const charactersListController = {

  characters: async (req, res) => {
    try {
      const characters = await Character.findAll({
        association: "blood",
        include: ['name'],
        order : [
          ['position', 'ASC'],
          ['character', 'id', 'ASC']
      ]
      });
      
      res.render('characters', { characters });
    } catch (err) {
      console.trace(err);
      res.status(500).send(err);
    }
  }

};


module.exports = charactersListController;