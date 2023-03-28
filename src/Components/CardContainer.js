import React from "react";
import WorkoutCard from "./WorkoutCard";

const CardContainer = ({ workoutDataArray }) => {
  const workoutDetails = workoutDataArray.map((workoutDetail) => {
    return <WorkoutCard key={workoutDetail.id} workoutDetail={workoutDetail} />;
  });

  return <div className="workout-list">{workoutDetails}</div>;
};

export default CardContainer;
