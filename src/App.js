import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import CardContainer from "./Components/CardContainer";
import Footer from "./Components/Footer";
import FilterWorkouts from "./Components/FilterWorkouts";

function App() {
  const [workoutDataArray, setWorkoutDataArray] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/Workouts')
      .then((response) => response.json())
      .then((workoutData) => setWorkoutDataArray(workoutData))
  }, [])
  
  return (
    <div className="App">
      <Header />
      <CardContainer workoutDataArray={workoutDataArray}/>
      <FilterWorkouts workoutDataArray={workoutDataArray}/>
      <Footer />
    </div>
  );
}

export default App;
