import React from "react";
import WorkoutCard from "./WorkoutCard";

const Favorites = ({ savedWorkouts }) => {
  const likedWorkouts = savedWorkouts.map((workoutDetail) => {
    return <WorkoutCard key={workoutDetail.id} workoutDetail={workoutDetail} />;
  });
  return (
    <div className="favorites">
      <h2>My Workouts</h2>
      <div className="favorites-container">
        {likedWorkouts}
      </div>
      </div>
 
  );
};

export default Favorites;
