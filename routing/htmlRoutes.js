// 3. Your `htmlRoutes.js` file should include two routes:

//    * A GET Route to `/survey` which should display the survey page.
//    * A default, catch-all route that leads to `home.html` which displays the home page. // need this
//============================================================================================

// Basic route that sends the user first to the AJAX Page
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
  });
  