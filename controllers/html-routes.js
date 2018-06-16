var path = require("path");


module.exports = function(app) {
    
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/add.html"));
  });
<<<<<<< HEAD
=======
  app.get("/add-a-pet", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/add.html"));
  });

>>>>>>> b370f4e4a2aa12477189a1b5d31db9d5221eb2c1
};
