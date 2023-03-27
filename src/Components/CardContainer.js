import React from "react";
import WorkoutCard from "./WorkoutCard";

const CardContainer = ({ workoutDataArray, favWorkouts }) => {
  const workoutDetails = workoutDataArray.map((workoutDetail) => {
    return (
      <WorkoutCard
        key={workoutDetail.id}
        workoutDetail={workoutDetail}
        favWorkouts={favWorkouts}
      />
    );
  });

  return <div className="workout-list">{workoutDetails}</div>;
};

export default CardContainer;
