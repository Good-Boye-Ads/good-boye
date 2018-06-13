// DEPENDENCIES
// ===================
var express = require("express");
var bodyParser = require("body-parser");

// SETS UP EXPRESS
// ===================
var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");

// SETS UP EXPRESS TO HANDLE DATA PARSING
// ===================
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());
// static directory
app.use(express.static("public"));

// ROUTES
// ===================
require("./controllers/api-routes.js")(app);
require("./controllers/html-routes.js")(app);

// SYNC
// ===================
db.sequelize.sync({}).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});