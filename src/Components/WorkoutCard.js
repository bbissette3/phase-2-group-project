import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";


const WorkoutCard = ({ workoutDetail, handleFav }) => {
  const { bodyPart, equipment, gifUrl, name, target } = workoutDetail;

  return (
    <Card>
      <Image src={gifUrl} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span className="date">
            {bodyPart} : {target}
          </span>
        </Card.Meta>
        <Card.Description>Eqipment needed: {equipment}</Card.Description>
       </Card.Description>
      <Image src='./images/image1.jpeg' size='small' /> 
    </Card.Content>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          22 Friends
        </a>
        <a>
          <button
            className="asleep"
            variant="contained"
            style={{ float: "right", border: "none", backgroundColor: "white" }}
            color="primary"
            onClick={() => handleFav(workoutDetail)}
          >
            😴😀
          </button>
        </a>
      </Card.Content>
    </Card>
  );
};

export default WorkoutCard;
