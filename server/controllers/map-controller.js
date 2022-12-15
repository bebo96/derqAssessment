// import user model
const { Site } = require('../models/Site');

module.exports = {
    // When detectionData is recieved, create a Site based on Site model 
    async saveDetection({ body }, res) {
      const detectionData = await Site.create(body);
      
      if (!detectionData) {
        return res.status(400).json({ message: 'Something is wrong!' });
      }
      res.json( user );
    }
}