import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import BigCard from './BigCard'

const WorkoutCard = ({workoutDetail}) => {
  
  const { bodyPart, equipment, gifUrl, name, target, image} = workoutDetail

  return (
    <div className='card-info'> <BigCard />
  <div className="workout-card">
  <Card>
    <Image src={gifUrl} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        <span className='date'>{bodyPart} : {target}</span>
      </Card.Meta>
      <Card.Description>
        Equipment needed: {equipment}
      </Card.Description>
      <Image src={image} size='small' /> 
    </Card.Content>
  </Card>
  </div>
  </div>
  )
  }

export default WorkoutCard;
