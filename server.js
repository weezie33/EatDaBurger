var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var hbs = require('express-handlebars');
var app = express();

var port = process.env.PORT || 3000;

//Express static uses whatever domain name/public
// app.use(express.static(__dirname + '/public'));
app.use(express.static("public")); //Handlebars likes this one better
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

app.engine("handlebars", hbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// var routes = require('./controllers/burgers_controllers.js');

app.use(require('./controllers/burgers_controllers.js'));



//sets up the port as a variable and listens to it

app.listen(port,(err) => {
    if (err) throw err;
console.log("Listening on port %s", port);
});