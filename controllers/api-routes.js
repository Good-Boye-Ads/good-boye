var db = require("../models");
var Jimp = require("jimp");

module.exports = function(app) {
  app.get("/api/pets", function(req, res) {
    //This will be used if we have a webpage that shows all the pets in the database
    db.Pets.findAll({}).then(function(dbPets) {
      res.json(dbPets);
    });
  });

  app.get("/api/pets/:id", function(req, res) {
    //Find one particular pet in the database
    db.Pets.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbPets) {
        Jimp.read(Pets.image_url).then(function(image) {
            image.scaleToFit( w, h[ mode] );
        }).catch(function (err) {
        });
        Jimp.loadFont( path ).then(function (font) {
            image.print(font, x, y, str, width); // print a message on an image with text wrapped at width
        });
      //res.json(dbPets);
    });
  });

  app.post("/api/pets", function(req, res) {
    db.Pets.create(req.body).then(function(dbPets) {
      res.json(dbPets);
    });
  });

  app.delete("/api/pets/:id", function(req, res) {
    db.Pets.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbPets) {
      res.json(dbPets);
    });
  });

};
