// dependencies
// var keys = require("../keys.js");
var db = require("../models");
var cloudinary = require("cloudinary");

//var adComposer = require("./ad-composer.js")(keys);
console.log(process.env.CLOUDINARY_NAME);

console.log("This is going on!!!!!");
// adComposer.composeAd("https://i.imgur.com/39PONo4.jpg", "Waluigi", 7);

module.exports = function (app, keys) {

  // cloudinary API set up
  cloudinary.config(keys.cloudinary);
  console.log(keys.cloudinary);

  var adComposer = require("./ad-composer.js")(cloudinary);
  adComposer.composeAd("https://i.imgur.com/39PONo4.jpg", "Waluigi", 7);

  app.get("/api/pets", function (req, res) {
    // this will be used if we have a webpage that shows all the pets in the database
    db.Pets.findAll({}).then(function (dbPets) {
      res.json(dbPets);
    });
  });

  app.post("/api/pets", function (req, res) {
    console.log('creatin', req.body);

    // testing cloudinary
    // cloudinary.uploader.upload("./doggo.jpeg", function (result) {
    //   console.log(result)
    // });

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
