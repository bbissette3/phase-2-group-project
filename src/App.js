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
      .then((workoutData) => {
        const newWorkoutArray = workoutData.map((workout) => {
          return { ...workout, liked: false };
        });
        setWorkoutDataArray(newWorkoutArray);
      });
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

  //this is all for the filter
  const categories = ["All", "back", "cardio", "chest", "upper arms", "lower arms", "upper legs", "lower legs", "shoulders", "waist"]

  const workOutsToShow = newWorkoutArray.filter((el) =>
  selected.length === 0 || selected.includes("All") || selected.includes(el.bodyPart)
);

  const toggleCategory = (category) => {
    if (selected.includes(category)) {
      setSelected(selected.filter((el) => el !== category));
    } else {
      setSelected([...selected, category]);
    }
  };
  //end of filter components
   
  return (
    <div className="App">
      <Header />
      <div className= "container">
        <FilterWorkouts 
          categories={categories} 
          selected={selected}
          toggleCategory={toggleCategory}
        />
        <CardContainer workoutDataArray={workOutsToShow} handleFav={handleFav} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
