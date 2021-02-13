const path = require("path");

module.exports = function(app) {

//renders index page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

//renders stats page
app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname,  "../public/stats.html"));
});

//renders exercise page
app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname,  "../public/exercise.html"))
});

}

