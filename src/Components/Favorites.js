import React from "react";
import WorkoutCard from "./WorkoutCard";
import { useAuth0 } from "@auth0/auth0-react";

const Favorites = ({ savedWorkouts }) => {
  const { user } = useAuth0;
  const likedWorkouts = savedWorkouts.map((workoutDetail) => {
    return <WorkoutCard key={workoutDetail.id} workoutDetail={workoutDetail} />;
  });
  return (
    <div className="favorites">
      <h2>My Workouts</h2>
      <div className="favorites-container">{likedWorkouts}</div>
    </div>
  );
};

export default Favorites;
