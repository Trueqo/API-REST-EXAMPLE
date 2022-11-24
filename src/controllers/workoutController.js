const workoutService = require('../services/workoutService');

const getAllWorkouts = (req, res) => {
    const allWorkouts = workoutService.getAllWorkouts();
    res.send({status: 'ok', data: allWorkouts});
}

const getOneWorkout = (req, res) => {
    const Workouts = workoutService.getOneWorkout(req.params.workoutId);
    res.send(`get Workout ${req.params.workoutId}`);
}

const createNewWorkout = (req, res) => {
    const {body} = req;
    if (
        !body.name ||
        !body.mode ||
        !body.equipment ||
        !body.exercises ||
        !body.traimerTips
    ) {
        return;
    }

    const netWorkout ={
        name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        exercises: body.exercises,
        trainerTips: body.trainerTips,
    };

    const createdWorkout = workoutService.createNewWorkout(netWorkout);
    res.status(201).send({ status: 'ok', data: createdWorkout});
}

const updateOneWorkout = (req, res) => {
    const updatedWorkouts = workoutService.updateOneWorkout(req.params.workoutId);
    res.status(`update Workout ${req.params.workoutId}`);
}

const deleteOneWorkout = (req, res) => {
    workoutService.deleteOneWorkout(req.params.workoutId)
    res.send(`delete Workout ${req.params.workoutId}`);
}

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
}
