// 3. Your `htmlRoutes.js` file should include two routes:

//    * A GET Route to `/survey` which should display the survey page.
//    * A default, catch-all route that leads to `home.html` which displays the home page. // need this
//============================================================================================

var path = require('path');

module.exports = function (app) {

	// brings us to survey page
	app.get('/survey', function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});



	// when nothing matches it will bring us back to home page
	app.use(function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});

}