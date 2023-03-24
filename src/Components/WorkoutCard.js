import React from 'react';

const WorkoutCard = ({workoutDetail}) => {

  const { bodyPart, equipment, gifUrl, name, target } = workoutDetail

  return (
    <div className='workout'>WorkoutCard
      <img src = {gifUrl} />
      <div className='excercise-info'>
        <h3>{name}</h3>
        <h4>
          {bodyPart}
          {target}
        </h4>
        <h5> Eqipment needed: {equipment}</h5>
      </div>
    </div>
  )
}

export default WorkoutCard;