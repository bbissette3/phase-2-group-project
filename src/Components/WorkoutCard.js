import React from "react";
import { Card, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

const WorkoutCard = ({ workoutDetail }) => {
  const { id, gifUrl, name } = workoutDetail;

  return (
    <Link to={`/workouts/${id}`}>
      <div className="card-info">
        <div className="workout-card">
          <Card>
            <Image src={gifUrl} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{name}</Card.Header>
            </Card.Content>
          </Card>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;
