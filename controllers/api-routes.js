// dependencies
var db = require("../models");

module.exports = function (app) {
  var adComposer = require("./ad-composer.js");

  app.get("/api/pets", function (req, res) {
    // this will be used if we have a webpage that shows all the pets in the database
    db.Pets.findAll({}).then(function (dbPets) {
      res.json(dbPets);
    });
  });

  app.post("/api/pets", function (req, res) {
    console.log('creatin', req.body);

    // take petImage, run it through jimp, upload to cloudinary,
    // get back upload url, push into object, push into db

    var newPet = {
      pet_name: req.body.petName,
      pet_type: req.body.petType,
      pet_age: req.body.petAge,
      location: req.body.petLoc,
      url: req.body.petUrl,
      image_url: req.body.petImage,
      image_width: "", // from cloudinary
      image_height: "" // from cloudinary
    }
    console.log("API: NEW PET CREATED", newPet);

    // db.Pets.create(newPet).then(function(dbPets) {
    //   res.json(dbPets);
    // });
  });

  app.delete("/api/pets/:id", function (req, res) {
    db.Pets.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbPets) {
      res.json(dbPets);
    });
  });
};
