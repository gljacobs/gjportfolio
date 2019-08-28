//import express for use
var express = require("express");

//create instance of express server
var app = express();
//specify port to listen for
var PORT = process.env.PORT || 8000;

//data parsing for for app
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//point to html routes for app to render
require("./routes/htmlRoutes")(app);

//hook up port for app to listen for
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
})