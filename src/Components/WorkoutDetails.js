import React from "react";
import { useParams, Link } from "react-router-dom";
import { Button, Icon, Grid } from "semantic-ui-react";

const WorkoutDetails = ({ workoutDataArray, favWorkouts }) => {
  const { workoutId } = useParams();

  const workout = workoutDataArray.find(
    (workout) => workout.id === parseInt(workoutId)
  );

  if (!workout) {
    return <div>Workout not found</div>;
  }

  const { bodyPart, equipment, gifUrl, name, target, image } = workout;

  return (
    <div className="workout-details-container">
      <Grid columns={3} divided>
        <Grid.Row>
          <Grid.Column>
            <h2>Workout Name:</h2>
            <p>{name}</p>
            <h2>Muscle Group:</h2>
            <p>
              {bodyPart} : {target}
            </p>
            <h2>Equiment or BodyWeight?</h2>
            <p>Equipment: {equipment}</p>
          </Grid.Column>
          <Grid.Column>
            <h2>Gif Demo!</h2>
            <img src={gifUrl} alt={name} />
          </Grid.Column>
          <Grid.Column>
            <h2>Difficulty Level:</h2>
            <img src={image} alt={`${name} difficulty`} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <div className="workout-details-buttons">
        <Button animated as={Link} to="/workouts" color="red">
          <Button.Content visible>Back</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow left" />
          </Button.Content>
        </Button>
        <Button
          className="heart icon"
          variant="contained"
          color="primary"
          onClick={() => favWorkouts(workout)}
        >
          Save
        </Button>
      </div>
  </div>

  );
};

export default WorkoutDetails;
