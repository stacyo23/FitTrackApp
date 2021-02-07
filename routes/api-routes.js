var Workout = require("../models/workout"); 

module.exports =function(app) {

app.get("/api/workouts", (req, res) => {
        Workout.find()
        .then(workout => {
            res.status(200).json(workout); 
            })
            .catch((err) => {
                res.status(400).json(err); 
        })
})

app.post("/api/workouts", (req, res) => {
    Workout.create({})
    .then(workout => {
        res.status(200).json(workout); 
    })
    .catch((err) => {
        res.status(400).json(err);
    })
})

app.put("/api/workouts/:id", ({body, params}, res) => {
        Workout.findByIdAndUpdate(  
            params.id,
            {$push:{exercises:body} },
            {new: true,runValidators:true }
        )
        .then(workout => {
            res.status(200).json(workout); 
        })
        .catch((err) => {
            res.status(400).json(err);  
        })
})

app.get("/api/workouts/range", (req, res) => {
    Workout.find()
    .then(workout => {
        res.status(200).json(workout); 
        })
        .catch((err) => {
            res.status(400).json(err); 
    })
})

app.post("/api/workouts/range", (req, res) => {
    Workout.create({})
    .then(workout => {
        res.status(200).json(workout); 
        })
        .catch((err) => {
            res.status(400).json(err); 
    })
})

}