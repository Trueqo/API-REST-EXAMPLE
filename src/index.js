const express = require("express");
const app = express();

const v1WorkoutRouter = require("./v1/routes/workoutRoutes");

const PORT = process.env.PORT || 3000;

//app.use("/api/v1", v1Router);
app.use(express.json());
app.use("/api/v1/workouts", v1WorkoutRouter);



/*
app.get('/', (req, res) => {
    res.send('Hello World');
});
*/
app.listen(PORT, () =>{
    console.log(`Servidor Corriendo en el puerto ${PORT}`);
});