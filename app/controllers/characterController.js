const { Character } = require('../models');

const characterController = {
    character: async (req, res) => {
        try {
          const character = await Character.findOne(
            //`async: true`
          );
          res.render('character', { character });
        } catch (err) {
          console.trace(err);
          res.status(500).send(err);
        }
      }
  
  };
  
  module.exports = characterController;

