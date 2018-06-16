var path = require("path");


module.exports = function(app) {
    
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  app.get("/add-a-pet", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/add.html"));
  });
};
