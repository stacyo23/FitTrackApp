const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

//middleware used to log HTTP requests and errors
app.use(logger("dev"));

//translates from json to human-legible
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//sets public folder to be static
app.use(express.static("public"));


//creates connection to mongodb
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", 
{ 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

//requires the app's routes
require("./routes/html-routes.js")(app); 
require("./routes/api-routes.js")(app); 

//server connection
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
