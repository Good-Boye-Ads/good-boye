// dependencies
var Jimp = require("jimp");

// cloudinary.uploader.upload("/Users/smanik/Desktop/good-boye/controllers/doggo.jpeg", function (result) {
//     console.log(result);
// });

// take petImage, run it through jimp, upload to cloudinary,
// get back upload url, push into object, push into db

module.exports = function (cloudinary) {

    return {
        composeAd: function(imageUrl, petName, petAge) {
            var text = "Adopt " + petName + ", age " + petAge;
            var composer = this;

            composer.jimpify(imageUrl, text, function (error, buffer) {
                console.log("Jimpify error in AD COMPOSE FUNCTION", error);
                composer.cloudify(buffer);
            });
        },
        jimpify: function(url, text, callback) {
            Jimp.read(url).then(function (image) {
                console.log("JIMPIFY SHOULD BE HAPPENING!");

                Jimp.loadFont(Jimp.FONT_SANS_16_WHITE).then(function (font) {
                    image.resize(250, Jimp.AUTO);
                    image.brightness(-0.5);
                    image.print(font, 20, 20, text, 230);
                    // .write("newdoggo.jpg"); // do buffer instead
                    image.getBuffer(Jimp.MIME_JPEG, callback);
                });

            }).catch(function (err) {
                // handle an exception
                console.log("JIMPIFY ERROR", err);
            });
        },
        cloudify: function(buffer) {
            console.log("CLOUDIFY SHOULD BE HAPPENING");
            console.log(buffer);

            cloudinary.v2.uploader.upload_stream({ resource_type: 'image' }, function (error, result) {
                console.log(result);
                console.log("CLOUD UPLOAD ERROR", error);
            }).end(buffer);
        }
    }

}