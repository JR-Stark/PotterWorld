const { Character } = require('../models/Character');

const charactersListController = {

  characters: async (req, res) => {
    try {
      const characters = await Character.findAll();
      
      res.render('characters', { characters });
    } catch (err) {
      console.trace(err);
      res.status(500).send(err);
    }
  }
};

module.exports = charactersListController;