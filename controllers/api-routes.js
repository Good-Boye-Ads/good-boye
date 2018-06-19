// dependencies
var db = require("../models");

module.exports = function (app) {
  // does this need to be inside here? test it later
  var adComposer = require("./ad-composer.js");

  app.get("/api/pets", function (req, res) {
    // shuffles array
    // https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
    function shuffle(a) {
      var j, x, i;
      for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
      }
      return a;
    }

    // this will be used if we have a webpage that shows all the pets in the database
    db.Pets.findAll({}).then(function (dbPets) {
      // return ten random adoption data
      shuffle(dbPets);
      dbPets = dbPets.slice(0, 10);
      res.json(dbPets);
    });
  });

  app.post("/api/pets", function (req, res) {
    console.log('creatin', req.body);
    var input = req.body;

    // take petImage, run it through jimp, upload to cloudinary,
    // get back upload url, push into object, push into db
    adComposer.composeAd(input.petImage, input.petName, input.petAge, function (error, imageInfo) {
      if (error) {
        console.log("composeAd error:", error);
        res.status(400).send("Bad request!");
        return;
      }

      var newPet = {
        pet_name: input.petName,
        pet_type: input.petType,
        pet_age: input.petAge,
        location: input.petLoc,
        url: input.petUrl,
        image_url: imageInfo.url, // from cloudinary
        image_width: imageInfo.width, // from cloudinary
        image_height: imageInfo.height // from cloudinary
      }
      console.log("API: NEW PET CREATED", newPet);

      // push into db
      db.Pets.create(newPet).then(function (dbPets) {
        res.json(dbPets);
      });
    });
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
