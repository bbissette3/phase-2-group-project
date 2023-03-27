import React from "react";
import WorkoutCard from "./WorkoutCard";

const Favorites = ({ savedWorkout, favWorkouts }) => {
  const likedWorkouts = savedWorkout.map((workoutDetail) => {
    return (
      <WorkoutCard
        key={workoutDetail.id}
        workoutDetail={workoutDetail}
        favWorkouts={favWorkouts}
      />
    );
  });
  return (
    <div className="favorites">
      <p>{likedWorkouts}</p>
    </div>
  );
};

export default Favorites;
