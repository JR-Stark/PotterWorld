const characterController = {
    character: async (req, res) => {
        try {
          const character = await Character.findOne({
            include: ['house', 'blood', 'family']
          });
          res.render('character', { character });
        } catch (err) {
          console.trace(err);
          res.status(500).send(err);
        }
      }
  
  };
  
  module.exports = characterController;