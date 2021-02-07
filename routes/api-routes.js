const router = require("express").Router(); 
const db = require("../models"); 

router.get("api/workouts", (req, res) => {
    db.Workout.find({})
    .sort({ date: -1})
    .then((workout) => {
        res.status(200).json(workout); 
    })
    .catch((err) => {
        res.status(400).json(err);
    })
})


module.exports = router; 