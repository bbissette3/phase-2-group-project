import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { Link } from "react-router-dom";


const WorkoutCard = ({workoutDetail}) => {
  
  const { id, bodyPart, equipment, gifUrl, name, target, image} = workoutDetail

    return (
      <Link to={`/workouts/${id}`}>
        <div className='card-info'> 
          <div className="workout-card">
            <Card>
              <Image src={gifUrl} wrapped ui={false} />
              <Card.Content>
                <Card.Header>
                  {name}
                </Card.Header>
                {/* <Card.Meta>
                  <span className='date'>{bodyPart} : {target}</span>
                </Card.Meta> */}
                {/* <Card.Description>
                  Equipment needed: {equipment}
                </Card.Description>
                <Image src={image} size='small' />  */}
              </Card.Content>
            </Card>
          </div>
      </div>
      </Link> 
    )
  }

export default WorkoutCard;
