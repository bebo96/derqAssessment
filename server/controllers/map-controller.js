// import user model
const { Site } = require('../models/Site');
const { Detection } = require('../models/Detection');


module.exports = {
    async testApi({body}, res){
        console.log("TEST");
        res.json("test");
    }
}