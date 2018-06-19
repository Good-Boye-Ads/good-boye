// dependencies
var Jimp = require("jimp");
var keys = require("../keys.js");
var cloudinary = require("cloudinary");

// cloudinary set up
cloudinary.config(keys.cloudinary);

module.exports = {
    composeAd: function (imageUrl, petName, petAge, callback) {
        var text = "Adopt " + petName + ", age " + petAge;
        var composer = this;

        composer.jimpify(imageUrl, text, function (error, buffer) {
            console.log("Jimpify error in AD COMPOSE FUNCTION", error);
            composer.cloudify(buffer, function(error, cloudjson){
                console.log("CLOUDIFY ERROR", error);

                var imageInfo = {
                    width: cloudjson.width,
                    height: cloudjson.height,
                    url: cloudjson.secure_url
                }

                console.log("cloud image info", imageInfo);
                callback(imageInfo);
            });
        });
    },
    jimpify: function (url, text, callback) {
        Jimp.read(url).then(function (image) {
            console.log("JIMPIFY SHOULD BE HAPPENING!");

            Jimp.loadFont(Jimp.FONT_SANS_16_WHITE).then(function (font) {
                image.resize(250, Jimp.AUTO);
                image.brightness(-0.5);
                image.print(font, 20, 20, text, 230);
                image.getBuffer(Jimp.MIME_JPEG, callback);
            });

        }).catch(function (err) {
            // handle an exception
            console.log("JIMPIFY ERROR", err);
        });
    },
    cloudify: function (buffer, callback) {
        console.log("CLOUDIFY SHOULD BE HAPPENING");
        console.log(buffer);

        cloudinary.v2.uploader.upload_stream({ resource_type: 'image' }, callback).end(buffer);
    }
}