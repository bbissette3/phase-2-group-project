
// const WorkoutCard = ({workoutDetail}) => {

//   const { bodyPart, equipment, gifUrl, name, target } = workoutDetail

//   return (
//     <div className='workout'>WorkoutCard
//       <img src = {gifUrl} />
//       <div className='excercise-info'>
//         <h3>{name}</h3>
//         <h4>
//           {bodyPart} : 
//           {target}
//         </h4>
//         <h5> Eqipment needed: {equipment}</h5>
//       </div>
//     </div>
//   )
// }

// export default WorkoutCard;

import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const WorkoutCard = ({workoutDetail}) => {
  
  const { bodyPart, equipment, gifUrl, name, target } = workoutDetail

  return (
  <Card>
    <Image src={gifUrl} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        <span className='date'>{bodyPart} : {target}</span>
      </Card.Meta>
      <Card.Description>
        Eqipment needed: {equipment}
      </Card.Description>
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
