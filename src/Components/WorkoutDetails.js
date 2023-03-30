import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Icon, Grid, Image } from "semantic-ui-react";
import meter1 from "../images/meter1.png";
import meter2 from "../images/meter2.png";
import meter3 from "../images/meter3.png";
import meter4 from "../images/meter4.png";
import meter5 from "../images/meter5.png";
import meter6 from "../images/meter6.png";
import meter7 from "../images/meter7.png";

const WorkoutDetails = ({ addFavWorkouts, savedWorkouts }) => {
  const [workoutDetails, setWorkoutDetails] = useState([]);
  const { workoutId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const rawData = await fetch(
        `http://localhost:3001/Workouts/${workoutId}`
      );
      const data = await rawData.json();
      setWorkoutDetails(data);
    }
    fetchData();
  }, [workoutId]);

  const { bodyPart, equipment, gifUrl, name, target, difficulty } =
    workoutDetails;

  const meterMap = {
    1: meter1,
    2: meter2,
    3: meter3,
    4: meter4,
    5: meter5,
    6: meter6,
    7: meter7,
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="workout-details-container">
      <Grid columns={3} divided>
        <Grid.Row>
          <Grid.Column verticalAlign="center">
            <h2>Workout Name:</h2>
            <p>{name}</p>
            <h2>Muscle Group:</h2>
            <p>
              {bodyPart} : {target}
            </p>
            <h2>Equiment Needed:</h2>
            <p>{equipment}</p>
          </Grid.Column>
          <Grid.Column>
            <h2>Gif Demo!</h2>
            <Image src={gifUrl} alt={name} centered/>
          </Grid.Column>
          <Grid.Column>
            <h2>Difficulty Level:</h2>
            <img src={meterMap[difficulty]} alt={`${name} difficulty`} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <div className="workout-details-buttons">
        <Button animated onClick={goBack} color="red">
          <Button.Content visible>Back</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow left" />
          </Button.Content>
        </Button>
        <Button color="instagram" onClick={() => addFavWorkouts(workoutDetails)}>
          <Button.Content>
            {savedWorkouts.find((workout) => workout.id === workoutDetails.id)
              ? "Unsave"
              : "Save"}
          </Button.Content>
        </Button>
      </div>
    </div>
  );
};

export default WorkoutDetails;
