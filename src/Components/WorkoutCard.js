import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const WorkoutCard = ({workoutDetail}) => {
  
  const { bodyPart, equipment, gifUrl, name, target, image} = workoutDetail

  return (
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
      <Image src='./images/image1.jpeg' size='small' /> 
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
  )
  }

export default WorkoutCard;
