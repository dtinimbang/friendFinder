var express = require('express');
var bodyParser=require('body-parser');
var path = require('path');

var app = express();


//=====code below used from hot restaurant
// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


require('./app/routing/apiroutes')(app); 
require('./app/routing/htmlroutes')(app);

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
