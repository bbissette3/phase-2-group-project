import React from "react";
import WorkoutCard from "./WorkoutCard";

const FavWorkout = ({ favStuff, handleFav }) => {
  const workout = favStuff.map((workoutDetail) => {
    return (
      <WorkoutCard
        key={workoutDetail.id}
        workoutDetail={workoutDetail}
        handleFav={handleFav}
      />
    );
  });

  return (
    <>
      <h4>This is the favs</h4>
      <div>{workout}</div>
    </>
  );
};

export default FavWorkout;
