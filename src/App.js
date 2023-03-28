import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./index.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import CardContainer from "./Components/CardContainer";
import FilterWorkouts from "./Components/FilterWorkouts";
import Home from "./Components/Home";
import Trainers from "./Components/Trainers";
import Favorites from "./Components/Favorites";
import WorkoutDetails from "./Components/WorkoutDetails";

function App() {
  const [workoutDataArray, setWorkoutDataArray] = useState([]);
  //filter state
  const [selected, setSelected] = useState([]);
  // fav state
  const [savedWorkouts, setSavedWorkouts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/Workouts")
      .then((response) => response.json())
      .then((workoutData) => setWorkoutDataArray(workoutData));
  }, []);

  //this is all for the filter
  const categories = [
    "All",
    "back",
    "cardio",
    "chest",
    "upper arms",
    "lower arms",
    "upper legs",
    "lower legs",
    "shoulders",
    "waist",
  ];

  const workOutsToShow = workoutDataArray.filter(
    (el) =>
      selected.length === 0 ||
      selected.includes("All") ||
      selected.includes(el.bodyPart)
  );

  const toggleCategory = (category) => {
    if (selected.includes(category)) {
      setSelected(selected.filter((el) => el !== category));
    } else {
      setSelected([...selected, category]);
    }
  };
  //end of filter components

  // this is for favs
  const addFavWorkouts = (exercise) => {
    if (!savedWorkouts.includes(exercise)) {
      const newExercise = [...savedWorkouts, exercise];
      setSavedWorkouts(newExercise);
    } else if (savedWorkouts.includes(exercise)) {
      const newExercise = savedWorkouts.filter(
        (oldExercise) => exercise.id !== oldExercise.id
      );
      setSavedWorkouts(newExercise);
    }
  };
  // end of favs

  return (
    <main className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/workouts"
          element={
            <div className="container">
              <FilterWorkouts
                categories={categories}
                selected={selected}
                toggleCategory={toggleCategory}
              />
              <CardContainer workoutDataArray={workOutsToShow} />
            </div>
          }
        />
        <Route
          path="/workouts/:workoutId"
          element={
            <WorkoutDetails
              addFavWorkouts={addFavWorkouts}
              savedWorkouts={savedWorkouts}
            />
          }
        />
        <Route path="/trainers" element={<Trainers />} />
        <Route
          path="/favorites"
          element={<Favorites savedWorkouts={savedWorkouts} />}
        />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
