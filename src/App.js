import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import CardContainer from "./Components/CardContainer";
import Footer from "./Components/Footer";
import FilterWorkouts from "./Components/FilterWorkouts";
import "./index.css"

function App() {
  const [workoutDataArray, setWorkoutDataArray] = useState([]);
  //filter state
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/Workouts')
      .then((response) => response.json())
      .then((workoutData) => setWorkoutDataArray(workoutData))
  }, []);

  //this is all for the filter
  const categories = ["All", "back", "cardio", "chest", "upper arms", "lower arms", "upper legs", "lower legs", "shoulders", "waist"]

  const workOutsToShow = workoutDataArray.filter((el) =>
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
      <FilterWorkouts 
        categories={categories} 
        selected={selected}
        toggleCategory={toggleCategory}
      />
      <CardContainer workoutDataArray={workOutsToShow}/>
      <Footer />
    </div>
  );
}

export default App;
