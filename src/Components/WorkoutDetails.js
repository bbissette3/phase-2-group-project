import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button, Icon } from "semantic-ui-react";

const WorkoutDetails = ({ workoutDataArray }) => {

  const { workoutId } = useParams();

  const workout = workoutDataArray.find(
    (workout) => workout.id === parseInt(workoutId)
  );

  if (!workout) {
    return <div>Workout not found</div>;
  }

  const { bodyPart, equipment, gifUrl, name, target, image } = workout;

  return (
    <div className="workout-details">
      <h2>Workout Name: {name}</h2>
      <br />
      <h2>Gif Demo!</h2>
      <img src={gifUrl} alt={name} />
      <br />
      <h2>Workout Target:</h2>
      <p>
        {bodyPart} : {target}
      </p>
      <br />
      <h2>Equiment or BodyWeight?</h2>
      <p>Equipment needed: {equipment}</p>
      <br />
      <h2>Difficulty Level:</h2>
      <img src={image} alt={`${name} difficulty`} />
      <br />
      <Button animated as={Link} to="/workouts"  color="red" >
        <Button.Content visible>Back</Button.Content>
        <Button.Content hidden>
            <Icon name="arrow left" />
        </Button.Content>
      </Button>
    </div>
  );
};

export default WorkoutDetails;
