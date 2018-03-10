// 4. Your `apiRoutes.js` file should contain two routes:

//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle
//    *  the compatibility logic. 


var friendsData = require("../data/friends");



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {

  app.get("app/data/friends", function (req, res) {
    res.json(friendsData);
  });




  app.post("app/data/friends.js", function (req, res) {

    if (friendsData.length < 30) {
      friendsData.push(req.body);
      res.json(true);
    } else {
      alert("To many friends in Database");
    }
  });

};