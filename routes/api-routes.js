const db = require("../models"); 

module.exports =function(app) {
//adds workout time together
app.get("/api/workouts", (req, res) => {
        db.Workout.aggregate([
           {
            $addFields: {
                totalDuration: { $sum: "$exercises.duration" }
            }
        }
        ]).then(workout => {
            res.json(workout)
        }).catch(err => {
            res.json(err);
        })
})

//creates new workout entry
app.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body)
    .then(workout => {
        res.json(workout); 
    })
    .catch((err) => {
        res.json(err);
    })
})

//updates the total exercise
app.put("/api/workouts/:id", (req, res) => {
        db.Workout.findByIdAndUpdate( 
            req.params.id,
            {
            $push: { exercises: req.body } },
        )
        .then(workout => {
            res.json(workout); 
        })
        .catch((err) => {
            res.json(err);  
        })
})


//adds the exercise data & gets the total of the past 7 days
app.get("/api/workouts/range", (req, res) => {
    db.Workout.aggregate([ 
        {
        $addFields: {
            totalDuration: { $sum: "$exercises.duration" }
        }
    }
    ]).sort({ _id: -1 })
    .limit(7)
    .then(workout => {
        res.json(workout)
    }).catch(err => {
        res.json(err);
    })
})

}