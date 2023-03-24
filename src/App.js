import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import CardContainer from "./Components/CardContainer";
import Footer from "./Components/Footer";
import FilterWorkouts from "./Components/FilterWorkouts";
import FavWorkout from "./Components/FavWorkout";

function App() {
  const [workoutDataArray, setWorkoutDataArray] = useState([]);
  const [favStuff, setFavStuff] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/Workouts")
      .then((response) => response.json())
      .then((workoutData) => setWorkoutDataArray(workoutData));
  }, []);

  const handleFav = (exercise) => {
    if (!favStuff.includes(exercise)) {
      const exerciseList = [...favStuff, exercise];
      setFavStuff(exerciseList);
    } else if (favStuff.includes(exercise)) {
      const exerciseList = favStuff.filter(
        (workout) => exercise.id !== workout.id
      );
      setFavStuff(exerciseList);
    }
  };

  return (
    <div className="App">
      <Header />
      <CardContainer
        workoutDataArray={workoutDataArray}
        handleFav={handleFav}
      />
      <FavWorkout favStuff={favStuff} handleFav={handleFav} />
      <FilterWorkouts workoutDataArray={workoutDataArray} />
      <Footer />
    </div>
  );
}

export default App;
