import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import CardContainer from "./Components/CardContainer";
import Footer from "./Components/Footer";
import FilterWorkouts from "./Components/FilterWorkouts";
import "./index.css"

function App() {
  const [workoutDataArray, setWorkoutDataArray] = useState([]);
  //filter state
  const [selected, setSetlected] = useState("All");

  useEffect(() => {
    fetch('http://localhost:3001/Workouts')
      .then((response) => response.json())
      .then((workoutData) => setWorkoutDataArray(workoutData))
  }, [])

  const categories = ["All", "back", "cardio", "chest", "lower arms", "lower legs", "neck", "shoulders", "upper arms", "upper legs", "waist"]

  const workOutsToShow = workoutDataArray.filter((el) => (
    selected === "All" || el.bodyPart === selected
  ));
  
  return (
    <div className="App">
      <Header />
      <FilterWorkouts 
        workoutDataArray={workoutDataArray} 
        categories={categories} 
        selected={selected} 
        setSetlected={setSetlected}
      />
      <CardContainer workoutDataArray={workOutsToShow}/>
      <Footer />
    </div>
  );
}

export default App;
